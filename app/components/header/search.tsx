import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar produtos..."
        className="w-full p-2 pl-10 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
}
