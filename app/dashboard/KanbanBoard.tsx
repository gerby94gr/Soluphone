"use client";

import { useState } from "react";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import OrderCard from "./OrderCard";
import OrderModal from "./OrderModal";

import type { OrderType } from "../../types/order";

type Props = {
  orders: OrderType[];
};

export default function KanbanBoard({
  orders,
}: Props) {
  const [data, setData] =
    useState<OrderType[]>(orders);

  const [selected, setSelected] =
    useState<OrderType | null>(null);

  const columns = {
    received: data.filter(
      (o) => o.status === "received"
    ),

    repair: data.filter(
      (o) => o.status === "repair"
    ),

    ready: data.filter(
      (o) => o.status === "ready"
    ),
  };

  async function moveOrder(
    id: string,
    status: string
  ) {
    try {
      await fetch(`/api/orders/${id}`, {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ status }),
      });

      setData((prev) =>
        prev.map((o) =>
          o.id === id
            ? { ...o, status }
            : o
        )
      );
    } catch (error) {
      console.error(error);
    }
  }

  async function onDragEnd(result: any) {
    if (!result.destination) return;

    const orderId =
      result.draggableId;

    const newStatus =
      result.destination.droppableId;

    await moveOrder(
      orderId,
      newStatus
    );
  }

  return (
    <>
      <DragDropContext
        onDragEnd={onDragEnd}
      >
        <div style={board}>
          {Object.entries(columns).map(
            ([status, items]) => (
              <Droppable
                droppableId={status}
                key={status}
              >
                {(provided) => (
                  <div
                    ref={
                      provided.innerRef
                    }
                    {...provided.droppableProps}
                    style={column}
                  >
                    <h3
                      style={
                        columnTitle
                      }
                    >
                      {status ===
                        "received" &&
                        "📥 Recibido"}

                      {status ===
                        "repair" &&
                        "🔧 Reparación"}

                      {status ===
                        "ready" &&
                        "✅ Listo"}
                    </h3>

                    {items.map(
                      (
                        order,
                        index
                      ) => (
                        <Draggable
                          key={
                            order.id
                          }
                          draggableId={
                            order.id
                          }
                          index={index}
                        >
                          {(
                            provided
                          ) => (
                            <div
                              ref={
                                provided.innerRef
                              }
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <OrderCard
                                order={
                                  order
                                }
                                move={
                                  moveOrder
                                }
                                open={
                                  setSelected
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      )
                    )}

                    {
                      provided.placeholder
                    }
                  </div>
                )}
              </Droppable>
            )
          )}
        </div>
      </DragDropContext>

      <OrderModal
        order={selected}
        onClose={() =>
          setSelected(null)
        }
      />
    </>
  );
}

/* STYLES */

const board: React.CSSProperties = {
  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(320px, 1fr))",

  gap: 20,

  padding: 20,
};

const column: React.CSSProperties = {
  background: "rgba(15,23,42,0.75)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  borderRadius: 18,

  padding: 14,

  minHeight: "80vh",

  backdropFilter: "blur(18px)",
};

const columnTitle: React.CSSProperties = {
  marginBottom: 16,

  fontSize: 18,

  fontWeight: 600,
};