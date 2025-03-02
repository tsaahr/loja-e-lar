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
      <body className="bg-[url('/images/background.png')] bg-cover bg-center h-full">
        <div className="shadow-lg ">
          <Header />
          <div className="bg-white m-6 min-h-[1000px]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}