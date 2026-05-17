"use client";

type Order = {
  status: "received" | "repair" | "ready";
  price?: number;
};

export default function DashboardClient({
  orders,
  user,
}: {
  orders: Order[];
  user: any;
}) {
  const total = orders.length;
  const repair = orders.filter((o) => o.status === "repair").length;
  const ready = orders.filter((o) => o.status === "ready").length;
  const received = orders.filter((o) => o.status === "received").length;

  const revenue = orders.reduce((a, o) => a + (o.price || 0), 0);

  return (
    <div style={page}>
      <div style={bg} />

      <div style={content}>
        <h1 style={title}>📊 Dashboard</h1>
        <p style={subtitle}>Bienvenido {user?.email}</p>

        <div style={grid}>
          <Card label="Órdenes" value={total} />
          <Card label="Recibidas" value={received} />
          <Card label="En reparación" value={repair} />
          <Card label="Listas" value={ready} />
          <Card label="Ingresos" value={`$${revenue}`} />
        </div>

        <div style={panel}>
          <h3 style={{ marginBottom: 15 }}>Actividad</h3>

          <Bar label="Órdenes" value={total} color="#60a5fa" />
          <Bar label="Reparación" value={repair} color="#fbbf24" />
          <Bar label="Listas" value={ready} color="#34d399" />
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Card({ label, value }: any) {
  return (
    <div style={card}>
      <span style={cardLabel}>{label}</span>
      <span style={cardValue}>{value}</span>
    </div>
  );
}

function Bar({ label, value, color }: any) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={barHeader}>
        <span>{label}</span>
        <span style={{ color: "#94a3b8" }}>{value}</span>
      </div>
      <div style={barBg}>
        <div
          style={{
            ...barFill,
            width: `${Math.min(value * 10, 100)}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
}

/* STYLES */

const page: React.CSSProperties = { position: "relative" };

const bg: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "radial-gradient(circle at top, #1e293b, #0b0f19)",
  zIndex: 0,
};

const content: React.CSSProperties = {
  position: "relative",
  zIndex: 1,
  padding: 30,
};

const title: React.CSSProperties = { fontSize: 28, marginBottom: 5 };

const subtitle: React.CSSProperties = {
  color: "#94a3b8",
  marginBottom: 25,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 16,
};

const card: React.CSSProperties = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 14,
  padding: 18,
  backdropFilter: "blur(12px)",
};

const cardLabel: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  color: "#94a3b8",
};

const cardValue: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 600,
  marginTop: 6,
};

const panel: React.CSSProperties = {
  marginTop: 30,
  padding: 20,
  borderRadius: 14,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
};

const barHeader: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: 13,
  marginBottom: 6,
};

const barBg: React.CSSProperties = {
  height: 8,
  background: "rgba(255,255,255,0.08)",
  borderRadius: 999,
  overflow: "hidden",
};

const barFill: React.CSSProperties = {
  height: "100%",
  borderRadius: 999,
  transition: "width 0.3s ease",
};