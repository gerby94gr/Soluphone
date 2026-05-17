export const metadata = {
  title: "SoluPhone",
  description: "Sistema de gestión de reparaciones",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}