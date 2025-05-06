import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import {
  uploadImageToCloudinary,
  getAllImages,
  deleteImage,
} from "@/backend/controllers/imageControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

// DELETE handler
const handleDelete = async (req: NextRequest, ctx: RequestContext) => {
  const { id } = ctx.params; // Get ID from route params
  return deleteImage(req, { params: { id } });
};

router.get(getAllImages).post(uploadImageToCloudinary).delete(handleDelete);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function POST(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}

export async function DELETE(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
