"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Order = {
  id: number;
  client: string;
  device: string;
  status: "received" | "repair" | "ready";
};

export default function OrdersPage() {
  const [filter, setFilter] = useState<"all" | Order["status"]>("all");

  const [orders] = useState<Order[]>([
    { id: 1, client: "Juan", device: "iPhone 12", status: "received" },
    { id: 2, client: "Maria", device: "Samsung S21", status: "repair" },
    { id: 3, client: "Pedro", device: "iPhone 13", status: "ready" },
  ]);

  const filtered = useMemo(() => {
    if (filter === "all") return orders;
    return orders.filter((o) => o.status === filter);
  }, [filter, orders]);

  return (
    <div style={page}>
      <h1>📦 Órdenes</h1>

      {/* FILTERS */}
      <div style={filters}>
        <button onClick={() => setFilter("all")} style={btn}>Todas</button>
        <button onClick={() => setFilter("received")} style={btn}>Recibidas</button>
        <button onClick={() => setFilter("repair")} style={btn}>Reparación</button>
        <button onClick={() => setFilter("ready")} style={btn}>Listas</button>

        <Link href="/orders/new" style={newBtn}>
          + Nueva orden
        </Link>
      </div>

      {/* LIST */}
      <div style={grid}>
        {filtered.map((order) => (
          <Link key={order.id} href={`/orders/${order.id}`} style={card}>
            <h3>{order.client}</h3>
            <p>{order.device}</p>
            <span style={badge(order.status)}>{order.status}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* STYLES */

const page: React.CSSProperties = { padding: 30 };

const filters: React.CSSProperties = {
  display: "flex",
  gap: 10,
  marginBottom: 20,
  flexWrap: "wrap",
};

const btn: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 8,
  border: "1px solid #333",
  background: "transparent",
  color: "white",
  cursor: "pointer",
};

const newBtn: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 8,
  background: "#3b82f6",
  color: "white",
  textDecoration: "none",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 15,
};

const card: React.CSSProperties = {
  padding: 15,
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  textDecoration: "none",
  color: "white",
};

const badge = (status: string): React.CSSProperties => {
  const colors: any = {
    received: "#3b82f6",
    repair: "#f59e0b",
    ready: "#22c55e",
  };

  return {
    display: "inline-block",
    marginTop: 6,
    padding: "4px 10px",
    borderRadius: 999,
    background: colors[status],
    fontSize: 12,
  };
};