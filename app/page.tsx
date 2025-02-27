"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch("/api/produtos"); // Chama a API interna
        const data = await res.json();
        
        if (data.produtos) {
          setProdutos(data.produtos);
        } else {
          console.error("Erro ao carregar produtos:", data.error);
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div>
      <h1>Loja e Lar 🚀</h1>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul>
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <li key={produto.id}>
                {produto.nome} - R$ {produto.preco.toFixed(2)}
              </li>
            ))
          ) : (
            <p>Nenhum produto encontrado.</p>
          )}
        </ul>
      )}
    </div>
  );
}
