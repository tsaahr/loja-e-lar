// components/admin/DashboardOverview.tsx
"use client";

import { Card } from "@/app/components/ui/card";

export default function DashboardOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <h2 className="text-xl font-semibold text-emerald-800">Produtos</h2>
        <p className="text-2xl font-bold mt-2">42</p>
        <p className="text-sm text-gray-500">Total de produtos</p>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-emerald-800">Pedidos</h2>
        <p className="text-2xl font-bold mt-2">12</p>
        <p className="text-sm text-gray-500">Pendentes</p>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-emerald-800">Clientes</h2>
        <p className="text-2xl font-bold mt-2">89</p>
        <p className="text-sm text-gray-500">Cadastrados</p>
      </Card>

      <Card>
        <h2 className="text-xl font-semibold text-emerald-800">Faturamento</h2>
        <p className="text-2xl font-bold mt-2">R$ 5.200</p>
        <p className="text-sm text-gray-500">Últimos 30 dias</p>
      </Card>
    </div>
  );
}
