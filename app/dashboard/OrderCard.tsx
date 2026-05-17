"use client";

import type { OrderType } from "../../types/order";

type Props = {
  order: OrderType;
  move: (id: string, status: string) => void;
  open: (order: OrderType) => void;
};

export default function OrderCard({
  order,
  move,
  open,
}: Props) {
  return (
    <div
      style={card}
      onClick={() => open(order)}
    >
      <div style={top}>
        <div>
          <h4 style={client}>
            {order.clientName}
          </h4>

          <p style={device}>
            📱 {order.device}
          </p>

          {order.problem && (
            <p style={problem}>
              {order.problem}
            </p>
          )}
        </div>

        <div style={priceBox}>
          ${order.price || 0}
        </div>
      </div>

      <div style={buttons}>
        <button
          style={button}
          onClick={(e) => {
            e.stopPropagation();
            move(order.id, "received");
          }}
        >
          📥
        </button>

        <button
          style={button}
          onClick={(e) => {
            e.stopPropagation();
            move(order.id, "repair");
          }}
        >
          🔧
        </button>

        <button
          style={button}
          onClick={(e) => {
            e.stopPropagation();
            move(order.id, "ready");
          }}
        >
          ✅
        </button>
      </div>
    </div>
  );
}

/* STYLES */

const card: React.CSSProperties = {
  padding: 14,
  borderRadius: 16,
  marginBottom: 12,

  background: "rgba(255,255,255,0.06)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  backdropFilter: "blur(14px)",

  transition: "0.2s ease",

  cursor: "pointer",
};

const top: React.CSSProperties = {
  display: "flex",

  justifyContent: "space-between",

  alignItems: "flex-start",

  gap: 10,
};

const client: React.CSSProperties = {
  margin: 0,

  fontSize: 16,

  fontWeight: 600,
};

const device: React.CSSProperties = {
  margin: "6px 0",

  opacity: 0.85,

  fontSize: 14,
};

const problem: React.CSSProperties = {
  marginTop: 8,

  fontSize: 13,

  opacity: 0.7,
};

const priceBox: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",

  padding: "6px 10px",

  borderRadius: 999,

  fontSize: 13,

  whiteSpace: "nowrap",
};

const buttons: React.CSSProperties = {
  display: "flex",

  gap: 8,

  marginTop: 14,
};

const button: React.CSSProperties = {
  flex: 1,

  border: "none",

  borderRadius: 10,

  padding: "10px 0",

  cursor: "pointer",

  background: "rgba(255,255,255,0.08)",

  color: "white",

  fontSize: 14,
};