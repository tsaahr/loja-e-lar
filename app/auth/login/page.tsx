"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    console.log("🟡 Iniciando login...");

    const { data, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError || !data.user) {
      console.error("❌ Erro no login:", loginError?.message);
      setError("Erro ao fazer login. Verifique seu email e senha.");
      setLoading(false);
      return;
    }

    const userId = data.user.id;
    console.log("✅ Login bem-sucedido! ID do usuário:", userId);

    // Buscar a role do usuário no banco de dados
    console.log("🔍 Buscando role do usuário...");

    const { data: userData, error: roleError } = await supabase
      .from("users")
      .select("role")
      .eq("id", userId)
      .single();

    if (roleError || !userData?.role) {
      console.error("❌ Erro ao buscar role:", roleError?.message);
      setError("Erro ao verificar tipo de usuário.");
      setLoading(false);
      return;
    }

    console.log("✅ Role obtida:", userData.role);

    // Redirecionamento baseado na role
    if (userData.role === "admin") {
      console.log("🚀 Redirecionando para /admin");
      router.push("/admin");
    } else {
      console.log("🚀 Redirecionando para /conta");
      router.push("/conta");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl mb-4">Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded mb-2 w-1/3"
      />

      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded mb-2 w-1/3"
      />

      <button
        onClick={() => {
          console.log("🔘 Botão de login clicado!");
          handleLogin();
        }}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded w-1/5"
      >
        {loading ? "Carregando..." : "Entrar"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
