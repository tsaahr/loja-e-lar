"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:3000/auth/login", // Redireciona após ativação
      },
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Conta criada! Verifique seu e-mail para confirmar.");
      setTimeout(() => router.push("/auth/login"), 3000); // Redireciona para login após 3s
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pt-4 pb-4">
      <h1 className="text-2xl mb-4">Criar Conta</h1>
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
      <input
        type="tel"
        placeholder="Telefone (opcional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 border rounded mb-2 w-1/3"
      />
      <button
        onClick={handleRegister}
        disabled={loading}
        className="bg-green-500 text-white p-2 rounded w-1/5"
      >
        {loading ? "Criando..." : "Criar Conta"}
      </button>
      {message && <p className="text-red-500 mt-2">{message}</p>}

      {/* Link para login manualmente */}
      <p className="mt-4">
        Já tem uma conta?{" "}
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Faça login aqui
        </span>
      </p>
    </div>
  );
}
