import { NextRequest, NextResponse } from "next/server";
import { getEducationData } from "@/app/services/educationLibrary";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await getEducationData();
    return NextResponse.json({
      status: res.status,
      succuess: true,
      data: data,
    });
  } catch (error) {
    return NextResponse.json({
      status: res.status,
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
