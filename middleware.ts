import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET as string;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Only guard the dashboard (and anything else under /admin except /admin/login)
  const isProtectedAdminRoute =
    pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (!isProtectedAdminRoute) {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin_session")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    // Invalid or expired token
    const response = NextResponse.redirect(new URL("/admin/login", req.url));
    response.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
