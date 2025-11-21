import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.parse(body);

    // In a production environment, you would:
    // 1. Send an email notification using a service like SendGrid, AWS SES, or Resend
    // 2. Store the submission in a database
    // 3. Send auto-response to the customer
    // 4. Add to CRM system

    // For now, we'll log it and return success
    console.log('Contact form submission:', validatedData);

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Example: Send email using a service (commented out)
    /*
    await sendEmail({
      to: 'info@northstack.solutions',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${validatedData.service}</p>
        <p><strong>Budget:</strong> ${validatedData.budget}</p>
        <p><strong>Timeline:</strong> ${validatedData.timeline}</p>
        <p><strong>Preferred Contact:</strong> ${validatedData.preferredContact}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });

    // Send auto-response to customer
    await sendEmail({
      to: validatedData.email,
      subject: 'Thank you for contacting NorthStack Solutions',
      html: `
        <h2>Thanks for reaching out, ${validatedData.name}!</h2>
        <p>We've received your inquiry and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to check out our <a href="https://northstack.solutions/blog">blog</a> for helpful resources.</p>
        <p>Best regards,<br/>The NorthStack Solutions Team</p>
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Validation error
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.issues.map((err) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    // Other errors
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again or email us directly at info@northstack.solutions',
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
