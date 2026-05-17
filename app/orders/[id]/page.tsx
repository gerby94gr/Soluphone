export default function OrderDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div style={{ padding: 30 }}>
      <h1>📄 Orden #{params.id}</h1>

      <div style={box}>
        <p>Cliente: Juan Pérez</p>
        <p>Dispositivo: iPhone 12</p>
        <p>Estado: En reparación</p>
        <p>Problema: No enciende</p>
      </div>
    </div>
  );
}

const box: React.CSSProperties = {
  marginTop: 20,
  padding: 20,
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
};