import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET as string);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

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
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    const response = NextResponse.redirect(new URL("/admin/login", req.url));
    response.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};