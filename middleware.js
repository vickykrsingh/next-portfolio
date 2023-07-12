// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"


export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(request) {
        if (request.nextUrl.pathname.startsWith("/dashboard")
            && request.nextauth.token?.role !== 1 ) {
            return NextResponse.rewrite(
                new URL("/", request.url)
            )
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
)

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/dashboard/:path*"] }