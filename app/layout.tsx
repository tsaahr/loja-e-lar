import "./global.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[url('/images/background.png')] bg-cover bg-center flex items-center justify-center min-h-screen m-4">
        <div className="bg-white w-full max-w-5xl min-h-[500px] md:min-h-[600px] rounded-2xl shadow-lg">   
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}