import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import SearchBar from "./search";

export default function Header() {
  return (
    <header className="bg-gray-300 shadow-md p-6">
      <div className="container mx-auto flex flex-col items-center relative">
        <div className="w-full flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold">Loja e Lar</span>
          </Link>

          {/* Barra de Pesquisa */}
          <div className="w-1/3">
            <SearchBar />
          </div>

          {/* Ícones de usuário e carrinho */}
          <div className="flex space-x-6">
            <Link href="/login" className="text-2xl hover:text-gray-600">
              <FaUser />
            </Link>
            <Link href="/carrinho" className="text-2xl hover:text-gray-600 relative">
              <FaShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
            </Link>
          </div>
        </div>

        {/* NavBar */}
        <nav className="w-full bg-gray-400 mt-4 p-2 rounded-md">
          <ul className="flex justify-center space-x-20 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-gray-600">Início</Link>
            </li>
            <li>
              <Link href="/catalogo" className="hover:text-gray-600">Catálogo</Link>
            </li>
            <li>
              <Link href="/ofertas" className="hover:text-gray-600">Ofertas</Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-gray-600">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}