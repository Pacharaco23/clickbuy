"use client";

import { useState } from "react";
import { useCart } from "@/lib/store/cart-store";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setOrderComplete(true);
    clearCart();
    setIsProcessing(false);

    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  if (!items.length && !orderComplete) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="text-center">
            <p className="text-muted-foreground text-lg mb-6">Tu carrito está vacío</p>
            <Link
              href="/products"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              Continuar Comprando
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">¡Pedido Completado!</h1>
            <p className="text-muted-foreground text-lg mb-6">Gracias por tu compra. Te redirigiremos al inicio en unos momentos.</p>
            <Link
              href="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-smooth"
            >
              Volver al Inicio
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const total = getTotalPrice() * 1.1;

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Información Personal</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Nombre"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none sm:col-span-2"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none sm:col-span-2"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Dirección de Envío</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Dirección"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="Estado/Provincia"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Código Postal"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-card rounded-lg border border-border p-6">
                <h2 className="text-xl font-bold text-foreground mb-6">Información de Pago</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número de Tarjeta"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    maxLength="16"
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      value={formData.cardExpiry}
                      onChange={handleChange}
                      maxLength="5"
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                    <input
                      type="text"
                      name="cardCVC"
                      placeholder="CVC"
                      value={formData.cardCVC}
                      onChange={handleChange}
                      maxLength="3"
                      required
                      className="px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-smooth"
              >
                {isProcessing ? "Procesando..." : "Completar Compra"}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-lg border border-border p-6 h-fit sticky top-20">
            <h2 className="text-xl font-bold text-foreground mb-6">Resumen del Pedido</h2>

            <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-foreground">{item.name} x{item.quantity}</span>
                  <span className="font-semibold text-foreground">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 pb-6 border-b border-border">
              <div className="flex justify-between text-foreground">
                <span>Subtotal:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Impuestos (10%):</span>
                <span>${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Envío:</span>
                <span className="text-green-600 font-semibold">Gratis</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-bold text-foreground">Total:</span>
              <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
