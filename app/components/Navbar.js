"use client";

import { signOut } from "next-auth/react";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow mb-4">

      <h1 className="font-bold">SoluPhone</h1>

      <div className="flex gap-3 items-center">

        <a href="/dashboard" className="text-blue-600">
          Dashboard
        </a>

        <a href="/dashboard/new" className="text-blue-600">
          Nueva Orden
        </a>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Salir
        </button>

      </div>
    </div>
  );
}