import { NextResponse } from "next/server";
import { getSpeaData } from "@/app/services/SpeaLibrary";

//error instanceof Error checks if error is a apart of an object. If thats true then you can treat error as that object allowing us to use error.message

export async function GET() {
  try {
    //spent two hours on this because i forgot the await. STOP FORGETTING AWAITS
    const data = await getSpeaData();
    return NextResponse.json({ status: 200, success: true, data: data });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      success: false,
      error: error instanceof Error ? error.message : `Unknown Error`,
    });
  }
}
