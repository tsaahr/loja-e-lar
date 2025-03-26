"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção Hero */}
      <header className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Bem-vindo à Loja e Lar</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90">
          Os melhores produtos para sua casa com conforto e qualidade.
        </p>
        <Link
          href="/catalogo"
          className="mt-6 inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Explorar Catálogo
        </Link>
      </header>

      <section className="p-6 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Destaques da Semana</h2>
        <p className="mt-2 text-gray-600">Confira os produtos mais vendidos e novidades.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <div className="h-40 bg-gray-200 rounded"></div>
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Produto Exemplo</h3>
            <p className="text-emerald-600 font-bold">R$ 199,90</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} Loja e Lar - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
