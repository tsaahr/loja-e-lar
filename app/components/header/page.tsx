"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import { useCart } from "@/app/context/cart-context";
import { User } from "@supabase/supabase-js";
import SearchBar from "./search";

export default function TopFloatingBar() {
  const [user, setUser] = useState<User | null>(null);
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
<div className="fixed top-0 left-0 w-full bg-emerald-900 shadow-md z-50">
  <div className="container mx-auto px-4 py-2 flex justify-between items-center h-16">
    {/* Search */}
    <div className="flex-1 max-w-xs">
      <SearchBar />
    </div>

    {/* Icons Section */}
    <div className="flex items-center space-x-4">
      {/* Login */}
      <Link
        href={user ? "/conta" : "/auth/login"}
        className={`w-8 h-8 flex items-center justify-center aspect-square text-xl rounded-full ${
          user ? "text-emerald-200" : "text-white"
        } hover:text-emerald-300`}
      >
        <FaUser />
      </Link>

      {/* Carrinho */}
      <Link
        href="/carrinho"
        className="w-8 h-8 flex items-center justify-center aspect-square relative text-xl text-white hover:text-emerald-300"
      >
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </Link>

      {/* Menu */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-8 h-8 flex items-center justify-center aspect-square text-xl text-white hover:text-emerald-300"
        >
          <FaBars />
        </button>

        {isMenuOpen && (
          <ul className="absolute right-0 top-10 w-48 bg-emerald-800 text-white shadow-lg rounded-md border border-emerald-700 z-50">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-emerald-700">Início</Link>
            </li>
            <li>
              <Link href="/catalogo" className="block px-4 py-2 hover:bg-emerald-700">Catálogo</Link>
            </li>
            <li>
              <Link href="/ofertas" className="block px-4 py-2 hover:bg-emerald-700">Ofertas</Link>
            </li>
            <li>
              <Link href="/contato" className="block px-4 py-2 hover:bg-emerald-700">Contato</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  </div>
</div>
  );
} 