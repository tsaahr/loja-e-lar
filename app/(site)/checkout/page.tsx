'use client'

import { useCart } from '@/app/context/cart-context'
import { useState } from 'react'

export default function CheckoutPage() {
  const { cart, totalItems } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    paymentMethod: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Dados do pedido:', { ...form, cart })
    // Futuro: enviar dados pra Supabase ou API + iniciar pagamento
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Finalizar Compra</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Endereço"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Cidade"
            value={form.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="">Selecione o método de pagamento</option>
            <option value="stripe">Cartão (Stripe)</option>
            <option value="mercado_pago">Mercado Pago</option>
          </select>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Confirmar Pedido
          </button>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md h-fit">
          <h2 className="text-lg font-bold mb-4">Resumo da Compra</h2>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between text-sm mb-2">
              <span>{item.name} x{item.quantity}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr className="my-4" />
          <p className="text-base font-semibold">
            Total ({totalItems} {totalItems === 1 ? 'item' : 'itens'}): R$ {total.toFixed(2)}
          </p>
        </div>
      </form>
    </div>
  )
}
