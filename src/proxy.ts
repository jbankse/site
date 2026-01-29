import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const hostname = request.headers.get('host') || '';
    const url = request.nextUrl;

    // Check if we are on the shop subdomain
    // We check for both localhost (development) and production domain
    const isShopSubdomain =
        hostname.includes('shop.unmarkedlabelstudios.com') ||
        hostname.includes('shop.localhost');

    if (isShopSubdomain) {
        // Rewrite the request to the /buy page
        if (url.pathname === '/') {
            url.pathname = '/buy';
            return NextResponse.rewrite(url);
        }
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
         * - icon.png (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|icon.png).*)',
    ],
};
