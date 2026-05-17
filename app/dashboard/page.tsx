import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "../../lib/prisma";
import KanbanBoard from "./KanbanBoard";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  // 🔐 Protección
  if (!session) {
    redirect("/login");
  }

  // 📦 Órdenes del usuario
  const orders = await prisma.order.findMany({
    where: {
      user: {
        email: session.user?.email || "",
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // 🚀 Render Kanban
  return <KanbanBoard orders={orders} />;
}