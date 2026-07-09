import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();

console.log("Connected DB:", mongoose.connection.name);

    const applications = await Application.find()
      .sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      applications,
    });

  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch applications",
      },
      { status: 500 }
    );
  }
}