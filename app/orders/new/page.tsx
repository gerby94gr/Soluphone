"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewOrder() {
  const router = useRouter();

  const [client, setClient] = useState("");
  const [device, setDevice] = useState("");
  const [price, setPrice] = useState(0);

  async function createOrder() {
    await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        client,
        device,
        price,
      }),
    });

    router.push("/orders");
  }

  return (
    <div style={box}>
      <h1>➕ Nueva Orden</h1>

      <input placeholder="Cliente" onChange={(e) => setClient(e.target.value)} />
      <input placeholder="Equipo" onChange={(e) => setDevice(e.target.value)} />
      <input type="number" placeholder="Precio" onChange={(e) => setPrice(Number(e.target.value))} />

      <button onClick={createOrder}>Crear orden</button>
    </div>
  );
}

const box = {
  padding: 30,
};