import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const number = searchParams.get("number");

  console.log(number);

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_DOMAIN_UTILITIES}/api/Utility/covert-number-to-multi-text/${number}`
    );

    const { viText, enText } = response.data;

    return NextResponse.json({ viText, enText });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to convert number to words" },
      { status: 500 }
    );
  }
}
