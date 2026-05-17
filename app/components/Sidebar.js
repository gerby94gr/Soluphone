export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold mb-6">SoluPhone</h2>

      <nav className="flex flex-col gap-3">
        <button className="text-left hover:bg-gray-100 p-2 rounded">
          Dashboard
        </button>

        <button className="text-left hover:bg-gray-100 p-2 rounded">
          Nueva Orden
        </button>

        <button className="text-left hover:bg-gray-100 p-2 rounded">
          Clientes
        </button>

        <button className="text-left hover:bg-gray-100 p-2 rounded">
          Caja / Ganancias
        </button>
      </nav>
    </aside>
  );
}