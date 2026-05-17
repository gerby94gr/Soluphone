"use client";
import { useState } from "react";

export default function Calculator() {
  const [parts, setParts] = useState(0);
  const [labor, setLabor] = useState(0);
  const [price, setPrice] = useState(0);

  const cost = Number(parts) + Number(labor);
  const profit = Number(price) - cost;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold mb-2">Calculadora</h2>

      <input placeholder="Repuestos" onChange={e => setParts(e.target.value)} className="border p-2 w-full mb-2" />
      <input placeholder="Mano de obra" onChange={e => setLabor(e.target.value)} className="border p-2 w-full mb-2" />
      <input placeholder="Precio final" onChange={e => setPrice(e.target.value)} className="border p-2 w-full mb-2" />

      <p>Costo: ${cost}</p>
      <p className="text-green-600 font-bold">Ganancia: ${profit}</p>
    </div>
  );
}