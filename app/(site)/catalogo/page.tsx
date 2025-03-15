// app/(site)/catalogo/page.tsx
'use client'

import { useEffect, useState } from "react";
import { fetchProdutos } from "@/app/utils/fetchProdutos";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
};

export default function CatalogoPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      const dados = await fetchProdutos();
      setProdutos(dados);
    };

    carregarProdutos();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produtos.map((produto) => (
          <div key={produto.id} className="bg-white shadow-md rounded-xl p-4">
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-gray-600 text-sm mt-1 mb-2">{produto.descricao}</p>
            <p className="text-blue-600 font-bold text-lg">
              R$ {produto.preco.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
