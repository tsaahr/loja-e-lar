import "./global.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import { CartProvider } from '@/app/context/cart-context'; // Corrija o caminho se necessário

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[url('/images/background.png')] bg-cover bg-center h-full">
        <CartProvider>
          <div className="shadow-lg">
            <Header />
            <div className="bg-white m-6 min-h-[1000px]">
              {children}
            </div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
