import nodemailer from 'nodemailer';

interface WelcomeEmailInput {
  name: string;
  email: string;
}

interface PortalEmailResult {
  sent: boolean;
  provider: 'resend' | 'smtp' | 'none';
  reason?: string;
}

function getResendApiKey(): string | null {
  const value = process.env.RESEND_API_KEY?.trim();
  return value ? value : null;
}

interface SmtpConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
}

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASSWORD?.trim();
  const parsedPort = Number(process.env.SMTP_PORT?.trim() || '465');
  const port = Number.isInteger(parsedPort) && parsedPort > 0 ? parsedPort : 465;
  const secureEnv = process.env.SMTP_SECURE?.trim().toLowerCase();
  const secure = secureEnv ? secureEnv !== 'false' && secureEnv !== '0' : port === 465;

  if (!host || !user || !pass) return null;
  return { host, port, secure, user, pass };
}

function getFromAddress(): string {
  const unified = process.env.MAIL_FROM_EMAIL?.trim();
  if (unified) return unified;

  const smtp = process.env.SMTP_FROM_EMAIL?.trim();
  if (smtp) return smtp;

  const explicit = process.env.RESEND_FROM_EMAIL?.trim();
  if (explicit) return explicit;

  return 'Melksham Mental Health <hello@melksham-mentalhealth.us>';
}

function getSupportAddress(): string {
  return process.env.CONTACT_EMAIL?.trim() || 'hello@melksham-mentalhealth.us';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function sendPortalWelcomeEmail(input: WelcomeEmailInput): Promise<PortalEmailResult> {
  const safeName = escapeHtml(input.name.trim() || 'there');
  const supportEmail = getSupportAddress();
  const from = getFromAddress();

  const payload = {
    from,
    to: [input.email.toLowerCase().trim()],
    subject: 'Welcome to the Melksham Mental Health Members Portal',
    text:
      `Welcome, ${safeName}\n\n` +
      'Thanks for registering with Melksham Mental Health.\n\n' +
      'You can now sign in to the members portal to browse modules, request course access, and manage your learning interests.\n\n' +
      'Portal link: https://melksham-mentalhealth.us/portal/login\n\n' +
      `If you need help, contact us at ${supportEmail}.\n\n` +
      'Melksham Mental Health\n',
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <h2 style="margin: 0 0 16px;">Welcome, ${safeName}</h2>
        <p>Thanks for registering with Melksham Mental Health.</p>
        <p>
          You can now sign in to the members portal to browse modules, request course access,
          and manage your learning interests.
        </p>
        <p>
          Portal link:
          <a href="https://melksham-mentalhealth.us/portal/login">https://melksham-mentalhealth.us/portal/login</a>
        </p>
        <p>
          If you need help, contact us at
          <a href="mailto:${supportEmail}">${supportEmail}</a>.
        </p>
        <p style="margin-top: 24px;">Melksham Mental Health</p>
      </div>
    `,
  };

  const apiKey = getResendApiKey();
  if (apiKey) {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { sent: true, provider: 'resend' };
    }

    const body = await response.text().catch(() => '');
    const smtpConfig = getSmtpConfig();
    if (!smtpConfig) {
      return {
        sent: false,
        provider: 'resend',
        reason: `Resend API returned ${response.status}. ${body}`.trim(),
      };
    }

    try {
      const transporter = nodemailer.createTransport({
        host: smtpConfig.host,
        port: smtpConfig.port,
        secure: smtpConfig.secure,
        auth: {
          user: smtpConfig.user,
          pass: smtpConfig.pass,
        },
      });
      await transporter.sendMail(payload);
      return { sent: true, provider: 'smtp' };
    } catch (smtpError) {
      return {
        sent: false,
        provider: 'smtp',
        reason:
          `Resend failed (${response.status}) and SMTP fallback failed: ` +
          ((smtpError as Error).message || 'unknown SMTP error'),
      };
    }
  }

  const smtpConfig = getSmtpConfig();
  if (!smtpConfig) {
    return {
      sent: false,
      provider: 'none',
      reason: 'No email provider configured. Set RESEND_API_KEY or SMTP_HOST/SMTP_USER/SMTP_PASSWORD.',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: smtpConfig.secure,
      auth: {
        user: smtpConfig.user,
        pass: smtpConfig.pass,
      },
    });
    await transporter.sendMail(payload);
    return { sent: true, provider: 'smtp' };
  } catch (error) {
    return {
      sent: false,
      provider: 'smtp',
      reason: (error as Error).message || 'SMTP delivery failed.',
    };
  }
}
