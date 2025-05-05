import type { NextRequest } from "next/server";
import { createEdgeRouter } from "next-connect";
import { allImages } from "@/backend/controllers/imageControllers";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequest, RequestContext>();

router.get(allImages);

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
