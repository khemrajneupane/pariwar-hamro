import { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { deleteImage } from "@/backend/controllers/imageControllers";
import dbConnect from "@/backend/config/dbConnect";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

dbConnect();

router.delete(deleteImage);

export async function DELETE(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
