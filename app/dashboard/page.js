import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";

async function getOrders() {
  const res = await fetch("http://localhost:3000/api/orders", {
    cache: "no-store"
  });

  return res.json();
}

export default async function Dashboard() {
  const session = await getServerSession();

  if (!session) redirect("/login");

  const orders = await getOrders();

  const totalGanancia = orders.reduce((acc, o) => {
    return acc + (Number(o.finalPrice) - (Number(o.partsCost) + Number(o.laborCost)));
  }, 0);

  const activos = orders.filter(o => o.status !== "entregado").length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">SoluPhone ODR 🔧</h1>

        <Navbar />
 
        <a
          href="/dashboard/new"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Nueva Orden
        </a>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded shadow">
          <p>Órdenes activas</p>
          <h2 className="text-xl font-bold">{activos}</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Total órdenes</p>
          <h2 className="text-xl font-bold">{orders.length}</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p>Ganancia total</p>
          <h2 className="text-xl font-bold text-green-600">
            ${totalGanancia}
          </h2>
        </div>
      </div>

      {/* LISTA ODR */}
      <div className="grid gap-3">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-4 rounded shadow flex justify-between">

            <div>
              <h3 className="font-bold">
                {order.deviceType} - {order.brand}
              </h3>
              <p className="text-gray-500">{order.problem}</p>
              <p className="text-sm text-gray-400">
                Cliente: {order.client?.name}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">
                ${order.finalPrice}
              </p>

              <span className="text-xs px-2 py-1 bg-yellow-200 rounded">
                {order.status || "recibido"}
              </span>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}