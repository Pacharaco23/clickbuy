"use client";

import { useCart } from "@/lib/store/cart-store";
import CartItemComponent from "@/components/cart-item";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    if (items.length > 0) {
      router.push("/checkout");
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Tu Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.length > 0 ? (
              <div className="bg-card rounded-lg border border-border p-6">
                <div className="space-y-2">
                  {items.map((item) => (
                    <CartItemComponent key={item.id} item={item} />
                  ))}
                </div>
                <button
                  onClick={clearCart}
                  className="mt-6 text-destructive hover:text-destructive/80 font-medium transition-smooth"
                >
                  Vaciar Carrito
                </button>
              </div>
            ) : (
              <div className="bg-card rounded-lg border border-border p-12 text-center">
                <p className="text-muted-foreground text-lg mb-6">Tu carrito está vacío</p>
                <Link
                  href="/products"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth"
                >
                  Continuar Comprando
                </Link>
              </div>
            )}
          </div>

          <div className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20">
            <h2 className="text-xl font-bold text-foreground mb-6">Resumen</h2>

            <div className="space-y-3 mb-6 pb-6 border-b border-border">
              <div className="flex justify-between text-foreground">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Envío:</span>
                <span>Gratis</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Impuestos:</span>
                <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-foreground">Total:</span>
              <span className="text-2xl font-bold text-primary">
                ${(getTotalPrice() * 1.1).toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              disabled={items.length === 0}
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
            >
              Proceder al Pago
            </button>

            <Link
              href="/products"
              className="block text-center mt-4 text-primary hover:text-primary/80 font-medium transition-smooth"
            >
              Continuar Comprando
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
