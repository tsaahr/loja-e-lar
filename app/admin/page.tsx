"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { checkIfUserIsAdmin } from "@/utils/check-admin";
import { supabase } from "@/lib/supabase";
import DashboardOverview from "../components/admin/DashboardOverview";

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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  if (loading) return <p className="text-center mt-10">Carregando...</p>;

  if (!isAdmin) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Acesso negado. Esta página é apenas para administradores.
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 md:px-12 pb-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-emerald-800">
          Painel do Administrador
        </h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
        >
          Sair
        </button>
      </div>
      <DashboardOverview />
    </div>
  );
}
