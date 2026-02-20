import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Pages inside /portal that are publicly accessible (no login required)
const PUBLIC_PORTAL_PATHS = ['/portal/login', '/portal/register'];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected =
    pathname.startsWith('/courses') ||
    (pathname.startsWith('/portal') &&
      !PUBLIC_PORTAL_PATHS.some((p) => pathname === p || pathname.startsWith(p + '/')));

  if (!isProtected) return NextResponse.next();

  const sessionCookie = request.cookies.get('mmh-portal-session');
  if (!sessionCookie) {
    const loginUrl = new URL('/portal/login', request.url);
    loginUrl.searchParams.set('next', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/courses/:path*', '/portal/:path*'],
};
