import { NextResponse } from "next/server";
import  connectDB from "@/lib/mongodb";
import Application from "@/models/Application";

export async function POST(req: Request) {

  try {

    await connectDB();

    const data = await req.json();

    console.log("APPLICATION RECEIVED:", data);

    const application = await Application.create(data);

    return NextResponse.json({
      success: true,
      application,
    });

  } catch (error: any) {

  console.error("APPLICATION ERROR:", error);

  return NextResponse.json(
    {
      success: false,
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    },
    {
      status: 500,
    }
  );
}
}
