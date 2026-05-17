import { prisma } from "../../../lib/prisma";

export async function GET() {
  const orders = await prisma.order.findMany({
    orderBy: { id: "desc" },
  });

  return Response.json(orders);
}

export async function POST(req: Request) {
  const data = await req.json();

  const order = await prisma.order.create({
    data: {
      client: data.client,
      device: data.device,
      price: data.price,
      status: "received",
    },
  });

  return Response.json(order);
}