//import { NextResponse } from "next/server";
import { getEducationData } from "@/app/services/educationLibrary";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  try {
    const data = await getEducationData();
    return NextResponse.json({
      status: 200,
      success: true,
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
