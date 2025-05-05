import { NextRequest, NextResponse } from "next/server";

export const allImages = async (req: NextRequest) => {
  return NextResponse.json({
    data: "Hello world",
  });
};
