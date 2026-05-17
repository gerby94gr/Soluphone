import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(req) {
  const data = await req.json();

  const order = await prisma.order.update({
    where: { id: data.id },
    data: {
      status: data.status
    }
  });

  return Response.json(order);
}

export async function POST(req) {
  const data = await req.json();

  const order = await prisma.order.create({
    data: {
      deviceType: data.deviceType,
      brand: data.brand,
      model: data.model,
      problem: data.problem,
      partsCost: Number(data.partsCost),
      laborCost: Number(data.laborCost),
      finalPrice: Number(data.finalPrice),
      client: {
        connectOrCreate: {
          where: { phone: data.phone },
          create: {
            name: data.name,
            phone: data.phone
          }
        }
      }
    }
  });

  return Response.json(order);
}