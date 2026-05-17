"use client";

import { useSession, signOut } from "next-auth/react";

export default function UserInfo() {
  const { data } = useSession();

  return (
    <div style={{ marginBottom: 20 }}>
      <p>👤 {data?.user?.email}</p>

      <button onClick={() => signOut()} style={{ marginTop: 5 }}>
        Logout
      </button>
    </div>
  );
}