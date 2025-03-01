"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mensagem enviada por ${nome}!`);
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Entre em Contato</h1>

      {/* Botão para WhatsApp */}
      <Link
        href="https://wa.me/53991799058"
        target="_blank"
        className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block mb-6"
      >
        Fale no WhatsApp
      </Link>

      {/* Formulário de Contato */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg">
        <label className="block mb-2">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <label className="block mb-4">
          Mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
