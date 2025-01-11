import { NextMiddleware, NextResponse } from 'next/server'

/** Middleware */
export const middleware: NextMiddleware = (req, event) => {
  return NextResponse.redirect(new URL('/about', req.url))
}

/** Middleware Matcher */
export const config = {
  matcher: ['/account/:path*'],
}
