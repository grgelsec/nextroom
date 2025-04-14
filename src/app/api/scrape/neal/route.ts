import { getNealData } from "@/app/services/nealLibrary";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const data = await getNealData();
    return NextResponse.json({ status: res.status, success: true, data: data });
  } catch (error) {
    return NextResponse.json({
      status: res.status,
      success: false,
      error: error instanceof Error ? error.message : "Unkown Error",
    });
  }
};
