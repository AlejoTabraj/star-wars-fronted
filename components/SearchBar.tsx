export default function SearchBar() {
    return (
      <div className="flex items-center text-black">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Filtrar
        </button>
      </div>
    );
  }