// utils/check-admin.ts
"use client";

import { supabase } from "@/lib/supabase";

export async function checkIfUserIsAdmin() {
  const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !sessionData.session) {
    console.error("⚠️ Erro ao obter sessão ou usuário não autenticado:", sessionError?.message);
    return { isAdmin: false, redirect: "/auth/login" };
  }

  const user = sessionData.session.user;

  const { data: userData, error: roleError } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (roleError || !userData?.role) {
    console.error("⚠️ Erro ao buscar role:", roleError?.message);
    return { isAdmin: false, redirect: "/conta" };
  }

  if (userData.role === "admin") {
    return { isAdmin: true };
  } else {
    return { isAdmin: false, redirect: "/conta" };
  }
}
