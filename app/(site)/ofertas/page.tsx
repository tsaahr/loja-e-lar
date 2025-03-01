export default function Ofertas() {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Ofertas Especiais</h1>
        <p>Aqui você encontrará os melhores produtos com desconto!</p>
  
        {/* Futuramente, os produtos serão listados aqui */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Produto 1</h2>
            <p className="text-red-500">De R$ 100,00 por <strong>R$ 75,00</strong></p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Produto 2</h2>
            <p className="text-red-500">De R$ 200,00 por <strong>R$ 150,00</strong></p>
          </div>
        </div>
      </main>
    );
  }