'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return { success: false, error: 'All fields are required' };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Invalid email format' };
  }

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <no-reply@pedrorfdez.com>', // Use your verified domain here
      to: ['pfrascon24@gmail.com'], // Your email
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003554; border-bottom: 2px solid #00a6fb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #003554;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #00a6fb; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      // This sets the reply-to address to the sender's email
      replyTo: email,
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: 'Failed to send email' };
    }

    console.log('Email sent successfully:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}

// Optional: Send a confirmation email to the person who submitted the form
export async function sendConfirmationEmail(email: string, name: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Pedro <onboarding@resend.dev>', // Use your verified domain
      to: [email],
      subject: 'Thanks for reaching out!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #003554;">Hi ${name}!</h2>
          
          <p>Thank you for reaching out through my portfolio contact form. I've received your message and will get back to you as soon as possible.</p>
          
          <p>I typically respond within 24-48 hours during business days.</p>
          
          <div style="margin: 30px 0; padding: 20px; background-color: #f0f9ff; border-radius: 8px; border-left: 4px solid #00a6fb;">
            <p style="margin: 0; color: #003554;"><strong>What's next?</strong></p>
            <p style="margin: 10px 0 0 0;">I'll review your message and respond directly to this email address. In the meantime, feel free to check out my other projects on GitHub or connect with me on LinkedIn.</p>
          </div>
          
          <p>Best regards,<br>Pedro</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 12px;">
              🔗 <a href="https://github.com/pedrorfdez" style="color: #00a6fb;">GitHub</a> | 
              <a href="https://www.linkedin.com/in/pedrorfdez/" style="color: #00a6fb;">LinkedIn</a> | 
              <a href="https://x.com/pedrorfdez" style="color: #00a6fb;">Twitter</a>
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Confirmation email error:', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    return { success: false, error };
  }
}
