"use client";

import { useState } from "react";

export default function NewOrder() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    deviceType: "",
    brand: "",
    model: "",
    problem: "",
    partsCost: 0,
    laborCost: 0,
    finalPrice: 0
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Orden creada ✔");
      window.location.href = "/dashboard";
    } else {
      alert("Error al crear orden");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Nueva Orden</h1>

      <input name="name" placeholder="Cliente" className="border p-2 w-full mb-2" onChange={handleChange} />
      <input name="phone" placeholder="Teléfono" className="border p-2 w-full mb-2" onChange={handleChange} />

      <input name="deviceType" placeholder="Tipo (Celular / PS4 / Notebook)" className="border p-2 w-full mb-2" onChange={handleChange} />
      <input name="brand" placeholder="Marca" className="border p-2 w-full mb-2" onChange={handleChange} />
      <input name="model" placeholder="Modelo" className="border p-2 w-full mb-2" onChange={handleChange} />

      <input name="problem" placeholder="Falla" className="border p-2 w-full mb-2" onChange={handleChange} />

      <input name="partsCost" placeholder="Costo repuestos" type="number" className="border p-2 w-full mb-2" onChange={handleChange} />
      <input name="laborCost" placeholder="Mano de obra" type="number" className="border p-2 w-full mb-2" onChange={handleChange} />
      <input name="finalPrice" placeholder="Precio final" type="number" className="border p-2 w-full mb-4" onChange={handleChange} />

      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 w-full rounded">
        Crear Orden
      </button>
    </div>
  );
}