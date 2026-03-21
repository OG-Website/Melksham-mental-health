import { NextResponse } from 'next/server';
import { portalApiErrorResponse } from '@/lib/portalApi';
import { loadCurrentSessionUser } from '@/lib/portalAuth';

export async function GET() {
  try {
    const { user } = await loadCurrentSessionUser();

    if (!user) {
      return NextResponse.json({ isLoggedIn: false });
    }

    return NextResponse.json({
      isLoggedIn: true,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        interests: user.interests,
      },
    });
  } catch (error) {
    return portalApiErrorResponse(error);
  }
}
