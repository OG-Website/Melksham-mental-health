/** Shared project constants */
const configuredContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
export const CONTACT_EMAIL = configuredContactEmail || 'hello@melksham-mentalhealth.us';
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
