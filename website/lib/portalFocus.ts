export type PortalFocus = 'general' | 'women' | 'men';

export function normalizePortalFocus(value: unknown): PortalFocus {
  if (value === 'men') return 'men';
  return value === 'women' ? 'women' : 'general';
}

export function hasWomenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'women';
}

export function hasMenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'men';
}
