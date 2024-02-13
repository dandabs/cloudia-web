import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from '@auth0/nextjs-auth0/edge';
import axios, {isCancel, AxiosError} from 'axios';
 
export async function middleware(request: NextRequest) {
    const session = await getSession();
    if (!session?.user) {
        return NextResponse.redirect(new URL('/api/auth/login', request.nextUrl));
    }

    try {
        const response = await (await fetch(new URL(`/api/users/${session?.user.sub}`, request.nextUrl).toString())).json();
        console.log(response);
        if (!response.mc) {
            if (request.nextUrl.pathname ==  '/account/setup') return NextResponse.next();
            return NextResponse.redirect(new URL('/account/setup', request.nextUrl));
        }
    } catch (error) {
        console.log(error);
        if (request.nextUrl.pathname ==  '/account/setup') return NextResponse.next();
        return NextResponse.redirect(new URL('/account/setup', request.nextUrl));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|img).*)',
    ],
  }