/** Shared project constants */
const configuredContactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
export const CONTACT_EMAIL = configuredContactEmail || 'melksham-mental-health@outlook.com';
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_EMAIL_LABEL = 'Email support';
