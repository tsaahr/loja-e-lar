"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {/* Spinner com efeito de escala + rotação mais lenta */}
      <motion.div
        className="w-16 h-16 border-[6px] border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }} // Alterna entre 1x e 1.1x
        transition={{ 
          repeat: Infinity, 
          duration: 2, // Mais lento (2 segundos por rotação)
          ease: "easeInOut"
        }}
      />

      {/* Texto com efeito de fade pulsante */}
      <motion.p
        className="mt-4 text-lg font-semibold text-gray-700"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Carregando...
      </motion.p>
    </div>
  );
}


