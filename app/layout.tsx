import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body style={body}>
        <div style={app}>
          
          {/* SIDEBAR */}

          <aside style={sidebar}>
            <div style={logoBox}>
              <img
                src="/logo.png"
                style={logo}
              />

              <div>
                <h2 style={brand}>
                  Soluphone
                </h2>

                <p style={brandSub}>
                  Workshop SaaS
                </p>
              </div>
            </div>

            <nav style={nav}>
              <SidebarLink
                href="/dashboard"
                label="Dashboard"
                icon="📊"
              />

              <SidebarLink
                href="/orders"
                label="Órdenes"
                icon="📦"
              />

              <SidebarLink
                href="/orders/new"
                label="Nueva orden"
                icon="➕"
              />

              <SidebarLink
                href="/login"
                label="Login"
                icon="🔐"
              />
            </nav>

            <div style={bottom}>
              <div style={userCard}>
                <div style={avatar}>
                  G
                </div>

                <div>
                  <strong>
                    Gerby
                  </strong>

                  <p style={role}>
                    Admin
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* MAIN */}

          <main style={main}>
            <header style={topbar}>
              <div>
                <h1 style={topTitle}>
                  Soluphone
                </h1>

                <p style={topSub}>
                  Sistema de gestión
                </p>
              </div>

              <div style={topActions}>
                <button style={actionBtn}>
                  🔔
                </button>

                <button style={actionBtn}>
                  ⚙️
                </button>
              </div>
            </header>

            <div style={content}>
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

function SidebarLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <Link
      href={href}
      style={link}
    >
      <span>{icon}</span>

      <span>{label}</span>
    </Link>
  );
}

/* STYLES */

const body: React.CSSProperties = {
  margin: 0,

  fontFamily:
    "Inter, Arial, sans-serif",

  background: "#020617",

  color: "white",
};

const app: React.CSSProperties = {
  display: "flex",

  minHeight: "100vh",
};

const sidebar: React.CSSProperties = {
  width: 260,

  background:
    "rgba(15,23,42,0.75)",

  borderRight:
    "1px solid rgba(255,255,255,0.06)",

  backdropFilter: "blur(20px)",

  padding: 20,

  display: "flex",

  flexDirection: "column",

  justifyContent:
    "space-between",
};

const logoBox: React.CSSProperties = {
  display: "flex",

  alignItems: "center",

  gap: 12,
};

const logo: React.CSSProperties = {
  width: 46,

  height: 46,

  borderRadius: 14,

  objectFit: "cover",
};

const brand: React.CSSProperties = {
  margin: 0,

  fontSize: 18,
};

const brandSub: React.CSSProperties = {
  margin: 0,

  opacity: 0.6,

  fontSize: 12,
};

const nav: React.CSSProperties = {
  display: "flex",

  flexDirection: "column",

  gap: 10,

  marginTop: 30,
};

const link: React.CSSProperties = {
  display: "flex",

  alignItems: "center",

  gap: 12,

  textDecoration: "none",

  color: "white",

  padding: "14px 16px",

  borderRadius: 14,

  background:
    "rgba(255,255,255,0.04)",

  transition: "0.2s ease",
};

const bottom: React.CSSProperties = {
  marginTop: 20,
};

const userCard: React.CSSProperties = {
  display: "flex",

  alignItems: "center",

  gap: 12,

  background:
    "rgba(255,255,255,0.05)",

  borderRadius: 16,

  padding: 14,
};

const avatar: React.CSSProperties = {
  width: 42,

  height: 42,

  borderRadius: "50%",

  background:
    "linear-gradient(135deg,#3b82f6,#8b5cf6)",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  fontWeight: 700,
};

const role: React.CSSProperties = {
  margin: 0,

  opacity: 0.6,

  fontSize: 12,
};

const main: React.CSSProperties = {
  flex: 1,

  display: "flex",

  flexDirection: "column",
};

const topbar: React.CSSProperties = {
  height: 72,

  borderBottom:
    "1px solid rgba(255,255,255,0.06)",

  display: "flex",

  alignItems: "center",

  justifyContent:
    "space-between",

  padding: "0 24px",

  background:
    "rgba(15,23,42,0.45)",

  backdropFilter: "blur(20px)",
};

const topTitle: React.CSSProperties = {
  margin: 0,

  fontSize: 20,
};

const topSub: React.CSSProperties = {
  margin: 0,

  opacity: 0.6,

  fontSize: 12,
};

const topActions: React.CSSProperties = {
  display: "flex",

  gap: 10,
};

const actionBtn: React.CSSProperties = {
  width: 42,

  height: 42,

  borderRadius: 12,

  border: "none",

  cursor: "pointer",

  background:
    "rgba(255,255,255,0.06)",

  color: "white",

  fontSize: 18,
};

const content: React.CSSProperties = {
  flex: 1,

  overflow: "auto",
};