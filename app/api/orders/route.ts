import { prisma } from "../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const orders = await prisma.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      [],
      { status: 500 }
    );
  }
}

export async function POST(
  req: NextRequest
) {
  try {
    const data = await req.json();

    const order =
      await prisma.order.create({
        data: {
          clientName:
            data.clientName,

          device: data.device,

          problem:
            data.problem,

          price: data.price,

          status: "received",
        },
      });

    return NextResponse.json(order);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Error creating order",
      },
      {
        status: 500,
      }
    );
  }
}