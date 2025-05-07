import { NextRequest, NextResponse } from "next/server";
import { createEdgeRouter } from "next-connect";
import {
  uploadImageToCloudinary,
  getAllImages,
} from "@/backend/controllers/imageControllers";

// Correct type parameters
const router = createEdgeRouter<NextRequest, void>();
/*
router.get(async (req) => {
  return getAllImages();
});

router.post(async (req) => {
  return uploadImageToCloudinary(req);
});*/
router.get(getAllImages).post(uploadImageToCloudinary);
export async function GET(request: NextRequest): Promise<NextResponse> {
  return router.run(request) as Promise<NextResponse>;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  return router.run(request) as Promise<NextResponse>;
}
