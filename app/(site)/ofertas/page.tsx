export default function Ofertas() {
  return (
    <main className="container mx-auto px-6 py-12">
      
      <header className="text-center">
        <h1 className="text-4xl font-extrabold text-emerald-600">🔥 Ofertas Especiais 🔥</h1>
        <p className="mt-2 text-lg text-gray-700">
          Aproveite descontos incríveis por tempo limitado!
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {[1, 2, 3, 4, 5, 6].map((produto) => (
          <div
            key={produto}
            className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <div className="h-40 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Imagem Produto</span>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">Produto {produto}</h2>
              <p className="text-gray-500 mt-1 text-sm">Descrição breve do produto.</p>
              <p className="text-red-500 font-bold text-xl mt-3">
                De <span className="line-through text-gray-400">R$ 200,00</span> por R$ {150 - produto * 5},00
              </p>
              <button className="mt-4 w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition">
                Comprar agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
