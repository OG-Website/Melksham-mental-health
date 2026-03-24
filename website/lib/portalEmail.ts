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
  const displayName = input.name.trim() || 'there';
  const safeName = escapeHtml(displayName);
  const supportEmail = getSupportAddress();
  const safeSupportEmail = escapeHtml(supportEmail);
  const from = getFromAddress();
  const portalLoginUrl = 'https://melksham-mentalhealth.us/portal/login';

  const payload = {
    from,
    to: [input.email.toLowerCase().trim()],
    subject: 'Hello, welcome to Berkshire Mental Health',
    text:
      `Hello ${displayName}, welcome to Berkshire Mental Health.\n\n` +
      'Thank you for registering for the Members Portal.\n\n' +
      'What the portal is:\n' +
      'The portal is your secure member space for training, support resources, and progress tools.\n\n' +
      'How to use the portal:\n' +
      `1. Sign in here: ${portalLoginUrl}\n` +
      '2. Open your learning modules and review each section in order.\n' +
      '3. Request access to additional courses from your portal account.\n' +
      '4. Update your interests so your content stays relevant.\n' +
      '5. Use diary and story features to record reflections and personal progress.\n' +
      '6. Return regularly to continue your learning journey and track updates.\n\n' +
      'If you need help with login, access, or course support, contact us and we will assist.\n' +
      `Support email: ${supportEmail}\n\n` +
      'Berkshire Mental Health\n' +
      'Real Struggles. Real Support.\n',
    html: `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#0a0a0a;padding:24px 12px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:linear-gradient(180deg,#1a1a1a 0%,#0a0a0a 100%);border:2px solid #ff6600;border-radius:12px;overflow:hidden;">
              <tr>
                <td style="background:#111111 url('https://melksham-mentalhealth.us/background_1.png') center/cover no-repeat;padding:28px 24px;border-bottom:2px solid #ff6600;">
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="vertical-align:middle;">
                        <p style="margin:0;font-family:'Arial Black',Impact,Arial,sans-serif;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#ffcc99;">
                          Members Portal
                        </p>
                        <h1 style="margin:8px 0 0;font-family:'Arial Black',Impact,Arial,sans-serif;font-size:30px;line-height:1.15;text-transform:uppercase;color:#ff9900;">
                          Hello, Welcome To Berkshire Mental Health
                        </h1>
                      </td>
                      <td align="right" style="vertical-align:middle;">
                        <img src="https://melksham-mentalhealth.us/logo.png" width="110" alt="Melksham Mental Health" style="display:block;border:0;outline:none;text-decoration:none;height:auto;max-width:110px;">
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 24px;font-family:'Arial Black',Impact,Arial,sans-serif;color:#ffffff;">
                  <p style="margin:0 0 14px;font-size:16px;line-height:1.6;color:#ffffff;">
                    Hello ${safeName}, thank you for joining the Members Portal.
                  </p>
                  <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#ffcc99;">
                    This portal is your secure member space for course learning, support tools, and personal progress tracking.
                  </p>
                  <p style="margin:0 0 10px;font-size:14px;line-height:1.5;color:#ff9900;text-transform:uppercase;letter-spacing:1px;">
                    How to use your portal
                  </p>
                  <ul style="margin:0 0 22px 18px;padding:0;font-size:14px;line-height:1.65;color:#ffffff;">
                    <li style="margin:0 0 8px;">Sign in and review your assigned learning modules in order.</li>
                    <li style="margin:0 0 8px;">Request course access for additional training pathways.</li>
                    <li style="margin:0 0 8px;">Update your interests so your learning stays relevant.</li>
                    <li style="margin:0 0 8px;">Use diary and story tools to record reflection and progress.</li>
                    <li style="margin:0;">Return regularly to continue your course journey.</li>
                  </ul>
                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:0 0 22px;">
                    <tr>
                      <td style="border-radius:6px;background:#ff6600;background-image:linear-gradient(180deg,#ff6600 0%,#ff8800 100%);">
                        <a href="${portalLoginUrl}" style="display:inline-block;padding:12px 18px;font-family:'Arial Black',Impact,Arial,sans-serif;font-size:14px;line-height:1;text-transform:uppercase;letter-spacing:1px;color:#ffffff;text-decoration:none;">
                          Sign In To Portal
                        </a>
                      </td>
                    </tr>
                  </table>
                  <p style="margin:0;font-size:14px;line-height:1.6;color:#ffcc99;">
                    Need help? Email
                    <a href="mailto:${safeSupportEmail}" style="color:#ff9900;text-decoration:underline;">${safeSupportEmail}</a>.
                  </p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 24px;border-top:1px solid #2a2a2a;background:#080808;">
                  <p style="margin:0;font-family:'Arial Black',Impact,Arial,sans-serif;font-size:12px;line-height:1.5;text-transform:uppercase;letter-spacing:1px;color:#ffb36f;">
                    Real Struggles. Real Support.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
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
