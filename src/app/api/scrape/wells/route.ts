import { NextResponse } from "next/server";
import { getWellsData } from "@/app/services/WellsLibraryRooms";

export async function GET() {
  try {
    const data = await getWellsData();
    return NextResponse.json({ status: 200, success: true, data: data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown Error",
      },
      { status: 500 }
    );
  }
}
