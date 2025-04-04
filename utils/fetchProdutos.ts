// app/utils/fetchProdutos.ts
export async function fetchProdutos() {
    try {
      const res = await fetch("/api/produtos");
      const json = await res.json();
  
      if (!res.ok) {
        console.error("Erro ao buscar produtos:", json.error);
        return [];
      }
  
      return json.produtos;
    } catch (error) {
      console.error("Erro inesperado:", error);
      return [];
    }
  }
  