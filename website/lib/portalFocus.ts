export type PortalFocus = 'general' | 'women' | 'men';
export type PublicPortalFocus = Exclude<PortalFocus, 'general'>;

export function normalizePortalFocus(value: unknown): PortalFocus {
  if (value === 'men') return 'men';
  return value === 'women' ? 'women' : 'general';
}

export function isPublicPortalFocus(value: unknown): value is PublicPortalFocus {
  return value === 'women' || value === 'men';
}

export function hasWomenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'women';
}

export function hasMenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'men';
}
