import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </div>
  );
}
