'use client';

import { useEffect, useState } from "react";
import { fetchProdutos } from "@/app/utils/fetchProdutos";
import Image from "next/image";
import { motion } from "framer-motion";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem_url: string;
};

export default function CatalogoPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarProdutos = async () => {
      const dados = await fetchProdutos();
      setProdutos(dados);
      setLoading(false);
    };

    carregarProdutos();
  }, []);

  const fallbackImage = "/images/sem-imagem.png";

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-emerald-600">
        🛒 Catálogo de Produtos
      </h1>
      <p className="text-center text-gray-600 mt-2">
        Explore nossa variedade de produtos com preços incríveis!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl animate-pulse">
              <div className="h-60 bg-gray-300 rounded-t-2xl" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="h-4 bg-gray-300 rounded w-1/2" />
                <div className="h-6 bg-gray-300 rounded w-1/4 mt-4" />
              </div>
            </div>
          ))
        ) : produtos.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            Nenhum produto encontrado.
          </p>
        ) : (
          produtos.map((produto) => {
            const imagemPath = produto.imagem_url?.trim() || "";
            const imageUrl = imagemPath
              ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imagemPath}`
              : fallbackImage;

            return (
              <motion.div
                key={produto.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-transform hover:scale-105"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={imageUrl}
                    alt={`Imagem do produto ${produto.nome}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = fallbackImage;
                    }}
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{produto.nome}</h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">{produto.descricao}</p>
                  <p className="text-emerald-600 font-bold text-lg mt-4">
                    R$ {produto.preco.toFixed(2).replace(".", ",")}
                  </p>

                  <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                    Ver Detalhes
                  </button>
                </div>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
