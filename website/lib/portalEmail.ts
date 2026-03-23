interface WelcomeEmailInput {
  name: string;
  email: string;
}

interface PortalEmailResult {
  sent: boolean;
  provider: 'resend' | 'none';
  reason?: string;
}

function getResendApiKey(): string | null {
  const value = process.env.RESEND_API_KEY?.trim();
  return value ? value : null;
}

function getFromAddress(): string {
  const explicit = process.env.RESEND_FROM_EMAIL?.trim();
  if (explicit) return explicit;
  return 'Melksham Mental Health <onboarding@resend.dev>';
}

function getSupportAddress(): string {
  return process.env.CONTACT_EMAIL?.trim() || 'Melksham-mental-health@outlook.com';
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
  const apiKey = getResendApiKey();
  if (!apiKey) {
    return { sent: false, provider: 'none', reason: 'RESEND_API_KEY is not configured.' };
  }

  const safeName = escapeHtml(input.name.trim() || 'there');
  const supportEmail = getSupportAddress();

  const payload = {
    from: getFromAddress(),
    to: [input.email.toLowerCase().trim()],
    subject: 'Welcome to the Melksham Mental Health Members Portal',
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

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    return {
      sent: false,
      provider: 'resend',
      reason: `Resend API returned ${response.status}. ${body}`.trim(),
    };
  }

  return { sent: true, provider: 'resend' };
}
