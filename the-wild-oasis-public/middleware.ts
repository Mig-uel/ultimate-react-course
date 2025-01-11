import { auth } from '@/lib/auth'

/** Middleware */
export const middleware = auth

/** Middleware Matcher */
export const config = {
  matcher: ['/account/:path*'],
}
