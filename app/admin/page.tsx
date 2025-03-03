'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAdmin() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth/login');
        return;
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (error || !data || data.role !== 'admin') {
        router.push('/');
        return;
      }

      setLoading(false);
    }

    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <div className="p-6 text-center">
        <p>Verificando permissões...</p>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <p>Redirecionando para a gestão de produtos...</p>
    </div>
  );
}