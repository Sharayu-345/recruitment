import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET as string;

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { role: "admin", email },
        JWT_SECRET,
        { expiresIn: "8h" }
      );

      const response = NextResponse.json({
        success: true,
        message: "Login successful",
      });

      response.cookies.set("admin_session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 8, // 8 hours, matches JWT expiry
      });

      return response;
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid credentials",
      },
      { status: 401 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
