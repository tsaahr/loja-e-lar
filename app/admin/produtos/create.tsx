'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function CreateProduto() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('produtos').insert([
      { nome, preco: parseFloat(preco), estoque: parseInt(estoque) }
    ]);

    setLoading(false);
    if (error) {
      console.error('Erro ao criar produto:', error);
    } else {
      router.push('/admin/produtos');
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Criar Novo Produto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          className="border p-2" 
          required 
        />
        <input 
          type="number" 
          placeholder="Preço" 
          value={preco} 
          onChange={(e) => setPreco(e.target.value)} 
          className="border p-2" 
          required 
        />
        <input 
          type="number" 
          placeholder="Estoque" 
          value={estoque} 
          onChange={(e) => setEstoque(e.target.value)} 
          className="border p-2" 
          required 
        />
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded" 
          disabled={loading}
        >
          {loading ? 'Salvando...' : 'Criar Produto'}
        </button>
      </form>
    </div>
  );
}