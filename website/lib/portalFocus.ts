export type PortalFocus = 'women' | 'men' | 'both';

export function normalizePortalFocus(value: unknown): PortalFocus {
  return value === 'women' || value === 'both' ? value : 'men';
}

export function isPortalFocus(value: unknown): value is PortalFocus {
  return value === 'women' || value === 'men' || value === 'both';
}

export function isPublicPortalFocus(value: unknown): value is Exclude<PortalFocus, 'both'> {
  return value === 'women' || value === 'men';
}

export function hasWomenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'women' || user.portalFocus === 'both';
}

export function hasMenSupportAccess(user: { isAdmin: boolean; portalFocus: PortalFocus }): boolean {
  return user.isAdmin || user.portalFocus === 'men' || user.portalFocus === 'both';
}
