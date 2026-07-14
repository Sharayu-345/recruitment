import { NextRequest, NextResponse } from "next/server";
// import { jwtVerify } from "jose"; // commented out — unused for now

// const JWT_SECRET = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET as string);

export async function middleware(req: NextRequest) {
  // Admin auth temporarily disabled — project now uses Google Sheets
  // for form submissions instead of a custom backend + MongoDB.
  // Original logic kept below for reference / resume purposes.
  return NextResponse.next();

  /*
  const { pathname } = req.nextUrl;

  // Protect everything under /admin except the login page itself
  const isProtectedAdminRoute =
    pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (!isProtectedAdminRoute) {
    return NextResponse.next();
  }

  const token = req.cookies.get("admin_session")?.value;

  // No token at all -> force login
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  try {
    // Valid token -> allow access to dashboard
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    // Invalid/expired token -> clear cookie, force login again
    const response = NextResponse.redirect(new URL("/admin/login", req.url));
    response.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
    return response;
  }
  */
}

export const config = {
  matcher: [], // disabled — was: ["/admin/:path*"]
};