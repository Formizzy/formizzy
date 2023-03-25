import { jwtVerify } from "jose";

export function isBrowser() {
    return typeof window !== 'undefined'
}

export async function isUserLoggedIn(tokenCookie?: string): Promise<boolean> {

    if (tokenCookie) {
        try {
            const { payload } = await jwtVerify(tokenCookie, new TextEncoder().encode(process.env.JWT_SECRET))

            if (payload?.id) {
                return true
            }
        } catch (error) {

        }
    }
    return false
}