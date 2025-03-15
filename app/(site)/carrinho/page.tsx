'use client'

import { useCart } from '@/app/context/cart-context'
import Image from 'next/image'
import Link from 'next/link'

export default function CarrinhoPage() {
  const { cart, removeFromCart, totalItems } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Meu Carrinho</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-center bg-gray-100 p-4 rounded-lg shadow-md"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div className="md:ml-6 w-full">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-sm mt-1">Preço: R$ {item.price.toFixed(2)}</p>
                  <p className="text-sm">Quantidade: {item.quantity}</p>
                  <p className="text-sm font-semibold mt-1">
                    Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-2 text-red-500 hover:underline text-sm"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <p className="text-xl font-bold">
              Total ({totalItems} {totalItems === 1 ? 'item' : 'itens'}): R$ {total.toFixed(2)}
            </p>
            <Link href="/checkout">
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Finalizar compra
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
