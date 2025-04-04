import "./global.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { CartProvider } from "@/app/context/cart-context";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="relative bg-gray-50">
        <CartProvider>
          {/* 🔥 Fundo dinâmico com blur e gradiente animado */}
          <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-emerald-700 via-emerald-500 to-green-400 animate-gradientBlur"></div>

          <div className="min-h-screen flex flex-col">
            <Header />
            
            {/* 🔥 Conteúdo com leve transparência e efeito vidro */}
            <main className="flex-grow container mx-auto p-8 backdrop-blur-md bg-white/70 shadow-xl rounded-xl transition-all duration-300">
              {children}
            </main>

            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
