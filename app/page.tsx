"use client";
import HeroSection from "./components/herosection/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection/>
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
    </div>
  );
}
