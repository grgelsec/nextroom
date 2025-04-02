import { getMusicData } from "@/app/services/musicLibrary";
import { NextResponse } from "next/server";

export const GET = async (res: NextResponse) => {
  try {
    const data = await getMusicData();
    return NextResponse.json({ status: res.status, success: true, data: data });
  } catch (error) {
    return NextResponse.json({
      status: res.status,
      success: false,
      error: error instanceof Error ? error.message : "Unknown Error",
    });
  }
};
