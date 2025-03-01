import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gray-300 shadow-md p-6">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold">Loja e Lar</span>
        </Link>

        {/* Menu */}
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-gray-600">Início</Link>
            </li>
            <li>
              <Link href="/categorias" className="hover:text-gray-600">Categorias</Link>
            </li>
            <li>
              <Link href="/ofertas" className="hover:text-gray-600">Ofertas</Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-gray-600">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* Ícones de usuário e carrinho */}
        <div className="flex space-x-6 absolute right-0 top-1/2 transform -translate-y-1/2">
          <Link href="/login" className="text-2xl hover:text-gray-600">
            <FaUser />
          </Link>
          <Link href="/carrinho" className="text-2xl hover:text-gray-600 relative">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
          </Link>
        </div>
      </div>
    </header>
  );
};