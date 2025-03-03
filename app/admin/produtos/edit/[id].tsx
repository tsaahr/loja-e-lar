'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EditProduto() {
  const router = useRouter();
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduto() {
      const { data, error } = await supabase
        .from('produtos')
        .select('*')
        .eq('id', id)
        .single();

      if (data) {
        setNome(data.nome);
        setPreco(data.preco);
        setEstoque(data.estoque);
      }
      setLoading(false);
    }
    fetchProduto();
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('produtos').update({
      nome,
      preco: parseFloat(preco),
      estoque: parseInt(estoque)
    }).eq('id', id);

    setLoading(false);
    if (error) {
      console.error('Erro ao atualizar produto:', error);
    } else {
      router.push('/admin/produtos');
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Editar Produto</h1>
      {loading ? (
        <p>Carregando...</p>
      ) : (
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
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </button>
        </form>
      )}
    </div>
  );
}