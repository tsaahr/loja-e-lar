'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type Produto = {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
};

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchProdutos() {
      const { data, error } = await supabase.from('produtos').select('*');
      if (error) console.error('Erro ao buscar produtos:', error);
      else setProdutos(data || []);
    }
    fetchProdutos();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Gerenciar Produtos</h1>
      <Link href="/admin/produtos/create" className="bg-blue-500 text-white px-4 py-2 rounded">
        + Novo Produto
      </Link>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Nome</th>
            <th className="border p-2">Preço</th>
            <th className="border p-2">Estoque</th>
            <th className="border p-2">Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id} className="border">
              <td className="border p-2">{produto.nome}</td>
              <td className="border p-2">R$ {produto.preco.toFixed(2)}</td>
              <td className="border p-2">{produto.estoque}</td>
              <td className="border p-2 flex gap-2">
                <Link href={`/admin/produtos/edit/${produto.id}`} className="text-blue-500">Editar</Link>
                <button className="text-red-500">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
