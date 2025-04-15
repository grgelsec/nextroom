import { NextRequest, NextResponse } from "next/server";
import { getWellsData } from "../services/WellsLibraryRooms";

export const GET = async (req: NextRequest) => {
  console.log(req);
  try {
    const data = await getWellsData();
    return NextResponse.json({ status: 200, success: true, data: data });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown Error",
      },
      { status: 400 }
    );
  }
};
