export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Ops! Página não encontrada.</p>
        <p className="text-gray-500 mt-2">A página que você está procurando pode ter sido removida ou não existe.</p>
        <a 
          href="/" 
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Voltar para a página inicial
        </a>
      </div>
    );
  }