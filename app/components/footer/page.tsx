import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Informações da Loja */}
      <div>
        <h2 className="text-lg font-semibold">Loja e Lar</h2>
        <p className="mt-2 text-gray-400">Sua loja online de produtos para casa.</p>
        <p className="mt-2 text-gray-400">Endereço: Rua Roberto Socowisk, 123 - Rio Grande</p>
        <p className="text-gray-400">Telefone: (53) 9179-9058</p>
        <p className="text-gray-400">E-mail: contato@lojaelar.com</p>
      </div>

      {/* Links Rápidos */}
      <div>
        <h2 className="text-lg font-semibold">Links</h2>
        <ul className="mt-2 space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Sobre</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contato</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a></li>
        </ul>
      </div>

      {/* Redes Sociais */}
      <div>
        <h2 className="text-lg font-semibold">Siga-nos</h2>
        <div className="mt-2 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
        </div>
      </div>
    </div>
    
    {/* Direitos Autorais */}
    <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
      &copy; {new Date().getFullYear()} Loja e Lar. Todos os direitos reservados.
    </div>
  </footer>
  );
};