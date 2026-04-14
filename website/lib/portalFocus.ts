export type PortalFocus = 'women' | 'men';

export function normalizePortalFocus(value: unknown): PortalFocus {
  return value === 'women' ? 'women' : 'men';
}

export function isPortalFocus(value: unknown): value is PortalFocus {
  return value === 'women' || value === 'men';
}

export function hasWomenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'women';
}

export function hasMenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'men';
}
