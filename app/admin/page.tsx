"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

const ADMIN_EMAIL = "admin@exemplo.com";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      const user = session?.user;

      if (!user) {
        router.push("/auth/login");
        return;
      }

      if (user.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    };

    checkAdmin();
  }, [router]);

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  if (!isAdmin) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Acesso negado. Esta página é apenas para administradores.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
      <p className="text-gray-700">Bem-vindo, administrador! Em breve você poderá gerenciar os produtos por aqui.</p>
    </div>
  );
}