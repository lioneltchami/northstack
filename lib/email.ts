import { Resend } from 'resend';
import { ContactFormData } from '@/types';

// Lazy-load Resend instance to avoid build-time errors
// The instance is created only when actually sending emails
let resendInstance: Resend | null = null;

function getResendClient(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured');
  }

  if (!resendInstance) {
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }

  return resendInstance;
}

// Email configuration
const EMAIL_CONFIG = {
  from: 'NorthStack Solutions <noreply@northstack.solutions>',
  to: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'hello@northstack.ca',
  replyTo: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@northstack.ca',
} as const;

/**
 * Sends a contact form notification email to the business
 */
export async function sendContactNotification(data: ContactFormData) {
  const resend = getResendClient();

  const subject = `New Contact Form Submission from ${data.name}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #f97316 100%); padding: 2rem; text-align: center; color: white; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
        <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">From ${data.name}</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 2rem; border-radius: 0 0 8px 8px;">
        <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
          <h2 style="color: #1d4ed8; margin-top: 0; margin-bottom: 1rem; font-size: 18px;">Contact Information</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #3b82f6;">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Preferred Contact Method:</strong> ${data.preferredContact === 'email' ? 'Email' : 'Phone'}</p>
        </div>
        
        <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
          <h2 style="color: #1d4ed8; margin-top: 0; margin-bottom: 1rem; font-size: 18px;">Project Details</h2>
          <p><strong>Service of Interest:</strong> ${getServiceName(data.service)}</p>
          <p><strong>Budget Range:</strong> ${getBudgetRange(data.budget)}</p>
          <p><strong>Timeline:</strong> ${getTimeline(data.timeline)}</p>
        </div>
        
        <div style="background: white; padding: 1.5rem; border-radius: 8px;">
          <h2 style="color: #1d4ed8; margin-top: 0; margin-bottom: 1rem; font-size: 18px;">Message</h2>
          <div style="background: #f8f9fa; padding: 1rem; border-radius: 6px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; line-height: 1.6; white-space: pre-line;">${data.message}</p>
          </div>
        </div>
        
        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e9ecef; text-align: center; color: #666;">
          <p style="margin: 0; font-size: 14px;">
            Submitted on ${new Date().toLocaleString('en-CA', { 
              timeZone: 'America/Calgary',
              dateStyle: 'full',
              timeStyle: 'short'
            })} MST
          </p>
        </div>
      </div>
    </div>
  `;

  try {
    const { data: result, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: data.email,
      subject,
      html,
    });

    if (error) {
      throw new Error(`Failed to send notification email: ${error.message}`);
    }

    return { success: true, id: result?.id };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}

/**
 * Sends an auto-response email to the customer
 */
export async function sendAutoResponse(data: ContactFormData) {
  if (!process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY not configured, skipping auto-response');
    return { success: true, id: 'skipped' };
  }

  const resend = getResendClient();
  const subject = `Thank you for contacting NorthStack Solutions, ${data.name.split(' ')[0]}!`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #f97316 100%); padding: 2rem; text-align: center; color: white; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px; font-weight: bold;">Thanks for reaching out!</h1>
        <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">We'll get back to you within 24 hours</p>
      </div>
      
      <div style="background: #f8f9fa; padding: 2rem; border-radius: 0 0 8px 8px;">
        <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
          <p style="margin: 0 0 1rem 0; font-size: 16px;">Hi ${data.name.split(' ')[0]},</p>
          
          <p style="margin: 0 0 1rem 0; line-height: 1.6;">
            Thank you for your interest in our ${getServiceName(data.service).toLowerCase()} services! 
            We've received your inquiry and one of our team members will respond within 24 hours during business days.
          </p>
          
          <div style="background: #e6f3ff; padding: 1rem; border-radius: 6px; border-left: 4px solid #3b82f6; margin: 1rem 0;">
            <h3 style="margin: 0 0 0.5rem 0; color: #1d4ed8; font-size: 16px;">What happens next?</h3>
            <ol style="margin: 0; padding-left: 1.2rem; line-height: 1.6;">
              <li>We'll review your project details and timeline</li>
              <li>Schedule a free 30-minute consultation call</li>
              <li>Provide a detailed proposal with transparent pricing</li>
              <li>Begin work upon your approval</li>
            </ol>
          </div>
          
          <p style="margin: 1rem 0; line-height: 1.6;">
            In the meantime, feel free to explore our 
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/blog" style="color: #3b82f6; text-decoration: none;">blog</a> 
            for helpful resources and case studies from our Calgary-based team.
          </p>
        </div>
        
        <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-bottom: 1rem;">
          <h3 style="margin: 0 0 1rem 0; color: #1d4ed8; font-size: 16px;">Contact Information</h3>
          <p style="margin: 0 0 0.5rem 0;"><strong>Email:</strong> <a href="mailto:${EMAIL_CONFIG.replyTo}" style="color: #3b82f6;">${EMAIL_CONFIG.replyTo}</a></p>
          <p style="margin: 0 0 0.5rem 0;"><strong>Phone:</strong> <a href="tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}" style="color: #3b82f6;">${process.env.NEXT_PUBLIC_CONTACT_PHONE}</a></p>
          <p style="margin: 0;"><strong>Business Hours:</strong> Monday-Friday 9 AM - 6 PM MST</p>
        </div>
        
        <div style="text-align: center; margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #e9ecef;">
          <p style="margin: 0 0 1rem 0; color: #666; font-size: 14px;">
            Best regards,<br>
            <strong>The NorthStack Solutions Team</strong><br>
            Calgary, Alberta, Canada
          </p>
          
          <a href="${process.env.NEXT_PUBLIC_CALENDLY_URL}" 
             style="display: inline-block; padding: 12px 24px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 1rem;">
            Schedule Direct Call
          </a>
        </div>
      </div>
    </div>
  `;

  try {
    const { data: result, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: data.email,
      replyTo: EMAIL_CONFIG.replyTo,
      subject,
      html,
    });

    if (error) {
      throw new Error(`Failed to send auto-response email: ${error.message}`);
    }

    return { success: true, id: result?.id };
  } catch (error) {
    console.error('Auto-response email error:', error);
    throw error;
  }
}

// Helper functions for formatting form data
function getServiceName(service: string): string {
  const services: Record<string, string> = {
    'web-development': 'Web Development',
    'automation': 'IT Automation',
    'home-server': 'Home Server Setup',
    'cloud-infrastructure': 'Cloud Infrastructure',
    'security': 'Security & DevSecOps',
    'consulting': 'Consulting',
    'other': 'Other Services',
  };
  return services[service] || 'General Inquiry';
}

function getBudgetRange(budget: string): string {
  const budgets: Record<string, string> = {
    'under-2500': 'Under $2,500',
    '2500-5000': '$2,500 - $5,000',
    '5000-10000': '$5,000 - $10,000',
    '10000-plus': '$10,000+',
    'not-sure': 'Not Sure',
  };
  return budgets[budget] || 'Not specified';
}

function getTimeline(timeline: string): string {
  const timelines: Record<string, string> = {
    'urgent': 'Urgent (1-2 weeks)',
    'soon': 'Soon (2-4 weeks)',
    'flexible': 'Flexible (1-3 months)',
    'planning': 'Just Planning',
  };
  return timelines[timeline] || 'Not specified';
}