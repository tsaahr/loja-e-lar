export default async function Catalogo() { // Adicionando 'async' aqui
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulando atraso de 3s

    return (
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Catálogo de Produtos</h1>
        <p>Aqui será listado os produtos disponíveis.</p>
      </main>
    );
  }