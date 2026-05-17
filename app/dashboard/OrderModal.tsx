"use client";

import type { OrderType } from "../../types/order";

type Props = {
  order: OrderType | null;
  onClose: () => void;
};

export default function OrderModal({
  order,
  onClose,
}: Props) {
  if (!order) return null;

  return (
    <div
      style={overlay}
      onClick={onClose}
    >
      <div
        style={modal}
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div style={header}>
          <div>
            <h2 style={title}>
              {order.clientName}
            </h2>

            <p style={device}>
              📱 {order.device}
            </p>
          </div>

          <button
            style={close}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div style={section}>
          <span style={labelStyle}>
            Problema
          </span>

          <p style={text}>
            {order.problem ||
              "Sin detalle"}
          </p>
        </div>

        <div style={grid}>
          <Info
            label="Estado"
            value={order.status}
          />

          <Info
            label="Precio"
            value={`$${order.price || 0}`}
          />
        </div>

        <div style={section}>
          <span style={labelStyle}>
            Fecha
          </span>

          <p style={text}>
            {new Date(
              order.createdAt
            ).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div style={infoCard}>
      <span style={labelStyle}>
        {label}
      </span>

      <strong>{value}</strong>
    </div>
  );
}

/* STYLES */

const overlay: React.CSSProperties = {
  position: "fixed",

  inset: 0,

  background:
    "rgba(0,0,0,0.6)",

  backdropFilter: "blur(6px)",

  display: "flex",

  justifyContent: "flex-end",

  zIndex: 999,
};

const modal: React.CSSProperties = {
  width: 420,

  height: "100vh",

  background: "#0f172a",

  borderLeft:
    "1px solid rgba(255,255,255,0.08)",

  padding: 24,

  overflowY: "auto",
};

const header: React.CSSProperties = {
  display: "flex",

  justifyContent:
    "space-between",

  alignItems: "flex-start",
};

const title: React.CSSProperties = {
  margin: 0,

  fontSize: 24,
};

const device: React.CSSProperties = {
  opacity: 0.7,

  marginTop: 6,
};

const close: React.CSSProperties = {
  background: "transparent",

  border: "none",

  color: "white",

  fontSize: 22,

  cursor: "pointer",
};

const section: React.CSSProperties = {
  marginTop: 24,
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,

  opacity: 0.6,

  display: "block",

  marginBottom: 6,
};

const text: React.CSSProperties = {
  lineHeight: 1.5,
};

const grid: React.CSSProperties = {
  display: "grid",

  gridTemplateColumns:
    "1fr 1fr",

  gap: 12,

  marginTop: 24,
};

const infoCard: React.CSSProperties = {
  background:
    "rgba(255,255,255,0.05)",

  borderRadius: 14,

  padding: 14,
};