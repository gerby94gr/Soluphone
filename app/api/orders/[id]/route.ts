import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  {
    params,
  }: {
    params: { id: string };
  }
) {
  try {
    const body = await req.json();

    const updated =
      await prisma.order.update({
        where: {
          id: params.id,
        },

        data: {
          status: body.status,
        },
      });

    return NextResponse.json(
      updated
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          "Error updating order",
      },
      {
        status: 500,
      }
    );
  }
}