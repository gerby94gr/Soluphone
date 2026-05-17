import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    const { id } =
      await context.params;

    const body =
      await req.json();

    const updated =
      await prisma.order.update({
        where: {
          id,
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