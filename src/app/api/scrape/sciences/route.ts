import { getSciencesData } from "@/app/services/sciencesLibrary";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  console.log(req);
  try {
    const data = await getSciencesData();
    return NextResponse.json({ status: 200, success: true, data: data });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      success: false,
      error: error instanceof Error ? error.message : "Unkown Error",
    });
  }
};
