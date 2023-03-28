import { NextRequest, NextResponse } from "next/server"
import { isUserLoggedIn } from "./utils/common";



export async function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get("session-token")?.value

    // const isLoggedIn = await isUserLoggedIn(sessionToken)
    const isLoggedIn = true;
    console.log("--------->", isLoggedIn);
    // const isLoggedIn = !!sessionToken

    const url = request.url

    if (url.includes("/login") && isLoggedIn) {
        const urlParams = new URLSearchParams(request.nextUrl.search);

        const redirect_uri = urlParams.get('redirect_uri')
        console.log("redirect_uri", redirect_uri);

        return NextResponse.redirect(redirect_uri ?? "http://localhost:3000/dashboard")
    }

    if (url.includes("/dashboard") && !isLoggedIn) {
        return NextResponse.redirect(new URL(`/login?redirect_uri=${request.url}`, request.url))
    }
}

export const config = { matcher: ["/dashboard/:path*", "/login"] }