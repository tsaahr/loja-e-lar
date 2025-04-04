"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkIfUserIsAdmin } from "@/utils/check-admin";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const verifyAdmin = async () => {
      const result = await checkIfUserIsAdmin();

      if (result.isAdmin) {
        setIsAdmin(true);
      } else if (result.redirect) {
        router.push(result.redirect);
      }

      setLoading(false);
    };

    verifyAdmin();
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
      <p className="text-gray-700">Bem-vindo, administrador! Aqui você poderá gerenciar seus produtos, pedidos e muito mais.</p>
    </div>
  );
}
