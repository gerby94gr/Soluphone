"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  }

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={box}>
        <h2>🔐 Soluphone Login</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button style={button} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
}

/* STYLES */

const container: React.CSSProperties = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#0b0f19",
};

const box: React.CSSProperties = {
  width: 320,
  padding: 24,
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: 10,
};

const input: React.CSSProperties = {
  padding: 10,
  borderRadius: 8,
  border: "1px solid #333",
  background: "#111827",
  color: "white",
};

const button: React.CSSProperties = {
  padding: 10,
  borderRadius: 8,
  background: "#3b82f6",
  color: "white",
  border: "none",
  cursor: "pointer",
};