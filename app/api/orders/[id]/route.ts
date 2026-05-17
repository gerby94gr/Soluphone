import { prisma } from "../../../../lib/prisma";

export async function PATCH(req: Request, { params }: any) {
  const { status } = await req.json();

  const updated = await prisma.order.update({
    where: { id: Number(params.id) },
    data: { status },
  });

  return Response.json(updated);
}