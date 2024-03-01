import { NextResponse, type NextRequest } from 'next/server';
import { updateSession } from './app/lib/auth';

const protectedRoutes = ['/', '/login', '/signup'];

export async function middleware(request: NextRequest) {
  const session = await updateSession(request);
  if (protectedRoutes.includes(request.nextUrl.pathname)) {
    if (session?.cookies) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  } else {
    if (!session) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
