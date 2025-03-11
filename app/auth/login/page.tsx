"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const ADMIN_EMAIL = "admin@exemplo.com"; // Defina o email do admin aqui

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    setMessage("");
  
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
    console.log("Dados do login:", data);
    console.log("Erro no login:", error);
  
    if (error) {
      setError(error.message);
    } else {
      const userEmail = data.user?.email?.toLowerCase().trim();
      const adminEmail = ADMIN_EMAIL.toLowerCase().trim();
  
      console.log("Email logado:", userEmail);
      console.log("Email do admin:", adminEmail);
      console.log("É admin?", userEmail === adminEmail);
  
      if (userEmail === adminEmail) {
        router.push("/admin");
      } else {
        router.push("/conta");
      }
    }
  
    setLoading(false);
  };
  

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message);
    } else {
      setMessage("Conta criada! Verifique seu e-mail para confirmar.");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pt-4 pb-4">
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
        onClick={handleLogin}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded w-1/5 mb-2"
      >
        {loading ? "Carregando..." : "Entrar"}
      </button>

      <button
        onClick={handleSignUp}
        disabled={loading}
        className="bg-green-500 text-white p-2 rounded w-1/5"
      >
        {loading ? "Carregando..." : "Criar Conta"}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
      {message && <p className="text-green-500 mt-2">{message}</p>}
    </div>
  );
}
