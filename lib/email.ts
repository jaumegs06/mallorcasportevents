import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123');

interface EmailTemplateData {
  name?: string;
  verifyUrl?: string;
  unsubscribeUrl?: string;
}

/**
 * Send newsletter verification email
 */
export async function sendVerificationEmail(
  email: string,
  token: string,
  locale: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
    const verifyUrl = `${baseUrl}/api/newsletter/verify?token=${token}`;

    const messages = {
      es: {
        subject: '✉️ Confirma tu suscripción - Mallorca Sport Events',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #ec4899;">¡Bienvenido a Mallorca Sport Events!</h1>
            <p>Gracias por suscribirte a nuestras novedades.</p>
            <p>Para confirmar tu suscripción, haz clic en el siguiente botón:</p>
            <a href="${verifyUrl}" style="display: inline-block; background: linear-gradient(to right, #ec4899, #f97316); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0;">
              Confirmar Suscripción
            </a>
            <p style="color: #666; font-size: 14px;">O copia este enlace en tu navegador:<br>${verifyUrl}</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px;">¿No te has suscrito? Ignora este email.</p>
          </div>
        `,
      },
      en: {
        subject: '✉️ Confirm your subscription - Mallorca Sport Events',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #ec4899;">Welcome to Mallorca Sport Events!</h1>
            <p>Thank you for subscribing to our newsletter.</p>
            <p>To confirm your subscription, click the button below:</p>
            <a href="${verifyUrl}" style="display: inline-block; background: linear-gradient(to right, #ec4899, #f97316); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0;">
              Confirm Subscription
            </a>
            <p style="color: #666; font-size: 14px;">Or copy this link into your browser:<br>${verifyUrl}</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px;">Didn't subscribe? Ignore this email.</p>
          </div>
        `,
      },
      de: {
        subject: '✉️ Bestätige dein Abonnement - Mallorca Sport Events',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #ec4899;">Willkommen bei Mallorca Sport Events!</h1>
            <p>Vielen Dank für Ihr Abonnement unseres Newsletters.</p>
            <p>Um Ihr Abonnement zu bestätigen, klicken Sie auf die Schaltfläche unten:</p>
            <a href="${verifyUrl}" style="display: inline-block; background: linear-gradient(to right, #ec4899, #f97316); color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0;">
              Abonnement bestätigen
            </a>
            <p style="color: #666; font-size: 14px;">Oder kopieren Sie diesen Link in Ihren Browser:<br>${verifyUrl}</p>
            <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
            <p style="color: #999; font-size: 12px;">Nicht abonniert? Ignorieren Sie diese E-Mail.</p>
          </div>
        `,
      },
    };

    const msg = messages[locale as keyof typeof messages] || messages.es;

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@mallorcasportevents.com',
      to: email,
      subject: msg.subject,
      html: msg.html,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending verification email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

/**
 * Send contact form confirmation email to user
 */
export async function sendContactConfirmation(
  email: string,
  name: string,
  locale: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const messages = {
      es: {
        subject: '✅ Mensaje recibido - Mallorca Sport Events',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10b981;">¡Gracias por contactarnos!</h1>
            <p>Hola ${name},</p>
            <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
            <p>Nuestro equipo revisará tu consulta y te contactaremos en un plazo de 24-48 horas.</p>
            <p style="margin-top: 30px;">Saludos,<br><strong>Equipo Mallorca Sport Events</strong></p>
          </div>
        `,
      },
      en: {
        subject: '✅ Message received - Mallorca Sport Events',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10b981;">Thank you for contacting us!</h1>
            <p>Hello ${name},</p>
            <p>We have received your message and will respond as soon as possible.</p>
            <p>Our team will review your inquiry and contact you within 24-48 hours.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Mallorca Sport Events Team</strong></p>
          </div>
        `,
      },
      de: {
        subject: '✅ Nachricht erhalten - Mallorca Sport Events',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #10b981;">Vielen Dank für Ihre Kontaktaufnahme!</h1>
            <p>Hallo ${name},</p>
            <p>Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.</p>
            <p>Unser Team wird Ihre Anfrage prüfen und sich innerhalb von 24-48 Stunden bei Ihnen melden.</p>
            <p style="margin-top: 30px;">Mit freundlichen Grüßen,<br><strong>Mallorca Sport Events Team</strong></p>
          </div>
        `,
      },
    };

    const msg = messages[locale as keyof typeof messages] || messages.es;

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@mallorcasportevents.com',
      to: email,
      subject: msg.subject,
      html: msg.html,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending contact confirmation:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

/**
 * Send admin notification for new contact message
 */
export async function sendAdminNotification(
  contactData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    eventType?: string | null;
  }
): Promise<{ success: boolean; error?: string }> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@mallorcasportevents.com';

    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'noreply@mallorcasportevents.com',
      to: adminEmail,
      subject: `🔔 Nuevo mensaje de contacto: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3b82f6;">Nuevo mensaje de contacto</h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Nombre:</td>
              <td style="padding: 8px;">${contactData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${contactData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Asunto:</td>
              <td style="padding: 8px;">${contactData.subject}</td>
            </tr>
            ${contactData.eventType ? `
            <tr>
              <td style="padding: 8px; background: #f3f4f6; font-weight: bold;">Evento:</td>
              <td style="padding: 8px;">${contactData.eventType}</td>
            </tr>
            ` : ''}
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f9fafb; border-left: 4px solid #3b82f6;">
            <h3 style="margin-top: 0;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">${contactData.message}</p>
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error: 'Failed to send notification' };
  }
}
