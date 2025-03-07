import { NextResponse } from 'next/server';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  // Cria o cliente do Supabase com base na requisição
  const supabase = createPagesServerClient({ req });

  // Verifica a sessão do usuário
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Se não houver sessão (usuário não autenticado), redireciona para o login
  if (!session) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Verificar se o usuário tem o role 'admin' (pode ser feito de várias maneiras)
  const { data: user, error } = await supabase
    .from('users') // Supondo que você tem uma tabela de 'users' no Supabase
    .select('role') // Selecionando o campo 'role' para verificar se é admin
    .eq('id', session.user.id)
    .single();

  // Se houver erro ou o usuário não for admin, redireciona para a página de erro ou outra página
  if (error || user?.role !== 'admin') {
    return NextResponse.redirect(new URL('/404', req.url)); // Ou uma página personalizada
  }

  // Se tudo estiver ok, permite o acesso à página
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/*'], // As páginas que devem ser protegidas pelo middleware (somente admin)
};
