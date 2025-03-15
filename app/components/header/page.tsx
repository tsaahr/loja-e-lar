"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import SearchBar from "./search";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useCart } from "@/app/context/cart-context";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const { totalItems } = useCart();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setUser(session?.user || null);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="bg-gray-300 shadow-md p-4 md:p-6">
      <div className="container mx-auto flex flex-col relative">
        {/* Topbar: Logo - Busca - Ícones */}
        <div className="w-full flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Logo Loja e Lar"
              width={80}
              height={80}
              objectPosition="left"
              className="rounded-md"
            />
          </Link>

          {/* Barra de Pesquisa */}
          <div className="w-full md:w-1/3 mt-2 md:mt-0 flex justify-center">
            <SearchBar />
          </div>

          {/* Ícones de usuário e carrinho */}
          <div className="flex space-x-4 md:space-x-6 mt-2 md:mt-0 items-center">
            <Link
              href={user ? "/conta" : "/auth/login"}
              className={`text-xl md:text-2xl ${user ? "text-green-500" : "text-black"} hover:text-gray-600`}
            >
              <FaUser />
            </Link>
            <Link href="/carrinho" className="text-xl md:text-2xl hover:text-gray-600 relative">
              <FaShoppingCart />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Navbar */}
        <nav className="w-full bg-gray-400 mt-4 p-2 rounded-md">
          <ul className="flex flex-wrap justify-center space-x-6 md:space-x-20 text-sm md:text-lg font-medium">
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
