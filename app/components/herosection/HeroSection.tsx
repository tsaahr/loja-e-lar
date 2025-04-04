import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white text-center py-20 px-4">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo.png"
          alt="Logo Loja e Lar"
          width={140}
          height={140}
          className="rounded-full shadow-lg border-4 border-white"
        />
      </div>

      {/* Texto de boas-vindas */}
      <h1 className="text-4xl md:text-5xl font-extrabold">Bem-vindo à Loja e Lar</h1>
      <p className="mt-4 text-lg md:text-xl text-white/90">
        Os melhores produtos para sua casa com conforto e qualidade.
      </p>

      {/* Botão */}
      <Link
        href="/catalogo"
        className="mt-6 inline-block bg-white text-emerald-600 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition"
      >
        Explorar Catálogo
      </Link>
    </section>
  );
}
