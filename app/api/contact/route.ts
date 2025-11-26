import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactNotification, sendAutoResponse } from '@/lib/email';
import { rateLimit, getClientIp, formatRateLimitError } from '@/lib/rate-limit';

// Contact form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.enum(['email', 'phone']),
  timeline: z.string().min(1, 'Please select a timeline'),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting: Max 5 submissions per hour per IP
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(clientIp, {
      maxRequests: 5,
      windowSeconds: 3600, // 1 hour
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: formatRateLimitError(rateLimitResult),
          error: 'RATE_LIMIT_EXCEEDED',
        },
        {
          status: 429, // Too Many Requests
          headers: {
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': String(rateLimitResult.remaining),
            'X-RateLimit-Reset': String(rateLimitResult.reset),
            'Retry-After': String(rateLimitResult.retryAfter ?? 0),
          },
        }
      );
    }

    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // Log the submission for monitoring
    console.log('Contact form submission received:', {
      name: validatedData.name,
      email: validatedData.email,
      service: validatedData.service,
      timestamp: new Date().toISOString(),
    });

    // Send notification email to business
    const notificationResult = await sendContactNotification(validatedData);
    
    // Send auto-response to customer (don't fail if this fails)
    try {
      await sendAutoResponse(validatedData);
    } catch (autoResponseError) {
      console.error('Auto-response failed (continuing):', autoResponseError);
    }

    // In production, you might also want to:
    // 1. Store the submission in a database
    // 2. Add to CRM system (HubSpot, Pipedrive, etc.)
    // 3. Send Slack notification to team
    // 4. Track analytics event

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        id: notificationResult.id, // For tracking purposes
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': '5',
          'X-RateLimit-Remaining': String(rateLimitResult.remaining),
          'X-RateLimit-Reset': String(rateLimitResult.reset),
        },
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation error
      return NextResponse.json(
        {
          success: false,
          message: 'Please check your form inputs and try again.',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Email sending or other errors
    console.error('Contact form processing error:', error);
    
    // Don't expose internal error details to the user
    return NextResponse.json(
      {
        success: false,
        message: `We're experiencing technical difficulties. Please try again or email us directly at ${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@northstack.ca'}`,
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS (if needed)
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
