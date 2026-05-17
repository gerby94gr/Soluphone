export default function OrderCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

      {/* Info izquierda */}
      <div>
        <h3 className="font-bold">iPhone 11 - Pantalla rota</h3>
        <p className="text-gray-500">Cliente: Juan Pérez</p>
        <p className="text-sm text-gray-400">Ingreso: 16/05</p>
      </div>

      {/* Estado */}
      <div className="text-center">
        <span className="px-3 py-1 rounded-full text-sm bg-yellow-200 text-yellow-800">
          En proceso
        </span>
      </div>

      {/* Ganancia */}
      <div className="text-right">
        <p className="text-gray-500">Ganancia</p>
        <p className="font-bold text-green-600">$15.000</p>
      </div>

    </div>
  );
}