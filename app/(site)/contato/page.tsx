"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contato() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-4"
      >
        Entre em Contato 💬
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-gray-600 text-lg max-w-xl mb-8"
      >
        Estamos disponíveis para te ajudar via WhatsApp. É rápido, fácil e direto ao ponto!
      </motion.p>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        <Link
          href="https://wa.me/53991799058"
          target="_blank"
          className="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg hover:bg-emerald-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12.04 2C6.49 2 2 6.48 2 11.99c0 2.11.55 4.11 1.61 5.9L2 22l4.2-1.57a10.01 10.01 0 0 0 5.84 1.86c5.55 0 10.04-4.48 10.04-9.99S17.6 2 12.04 2zm.07 17.9c-1.85 0-3.66-.5-5.23-1.45l-.38-.23-2.48.92.89-2.43-.25-.39A8.018 8.018 0 0 1 4.04 12c0-4.41 3.58-7.99 7.99-7.99 4.41 0 7.99 3.58 7.99 7.99s-3.58 7.99-7.99 7.99zm4.42-5.94c-.24-.12-1.42-.7-1.64-.77-.22-.08-.39-.12-.55.12-.16.24-.63.77-.77.93-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.22-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.01-.36.11-.48.12-.12.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.83-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.33.98 2.5c.12.16 1.69 2.6 4.1 3.65.57.24 1.02.38 1.37.48.57.18 1.09.16 1.5.1.46-.07 1.42-.58 1.62-1.13.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
          </svg>
          Falar no WhatsApp
        </Link>
      </motion.div>
    </main>
  );
}
