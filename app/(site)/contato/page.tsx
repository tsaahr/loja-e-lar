"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-emerald-600">
        📩 Entre em Contato
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Fale conosco pelo WhatsApp ou envie uma mensagem pelo formulário abaixo.
      </p>

      {/* Botão do WhatsApp */}
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center mt-6"
      >
        <Link
          href="https://wa.me/53991799058"
          target="_blank"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-emerald-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 3.009c-1.81 0-3.56.49-5.09 1.41a11.383 11.383 0 0 0-4.08 4.09 11.118 11.118 0 0 0-1.41 5.08c0 1.36.27 2.68.8 3.91l-1.7 4.94 5-1.71c1.22.53 2.54.8 3.91.8 1.81 0 3.56-.49 5.09-1.41a11.51 11.51 0 0 0 4.08-4.09 10.92 10.92 0 0 0 1.42-5.08c0-2.76-1.08-5.34-3.06-7.32A10.39 10.39 0 0 0 20 3.009z" />
          </svg>
          Fale pelo WhatsApp
        </Link>
      </motion.div>

      {/* Formulário de Contato */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-6 rounded-lg mt-10 max-w-lg mx-auto"
      >
        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Nome:</span>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-2"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700 font-medium">Mensagem:</span>
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-2 resize-none h-32"
            required
          />
        </label>

        <button
          type="submit"
          className="bg-emerald-600 text-white px-6 py-3 w-full rounded-lg font-semibold hover:bg-emerald-700 transition"
        >
          Enviar Mensagem
        </button>

        {enviado && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center text-emerald-600 font-semibold mt-4"
          >
            ✅ Mensagem enviada com sucesso!
          </motion.p>
        )}
      </motion.form>
    </main>
  );
}
