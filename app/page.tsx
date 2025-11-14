"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import FeaturedBanner from "@/components/featured-banner";
import ProductCard from "@/components/product-card";
import Footer from "@/components/footer";
import { products } from "@/lib/data/products";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  const benefits = [
    { icon: "🚚", title: "Envío Gratis", desc: "En compras mayores a $100" },
    { icon: "🛡️", title: "100% Seguro", desc: "Compras protegidas y garantizadas" },
    { icon: "💰", title: "Mejor Precio", desc: "Garantía de mejor precio del mercado" },
    { icon: "⚡", title: "Entrega Rápida", desc: "24-48 horas en zonas disponibles" },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
          <FeaturedBanner />

          {/* Featured Products Section */}
          <section className="mb-16">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-2">
                  Productos Destacados
                </h2>
                <p className="text-muted-foreground">Nuestras selecciones premium para ti</p>
              </div>
              <Link href="/products?featured=true" className="text-primary hover:text-primary/80 font-semibold transition-smooth">
                Ver todos →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          {/* Categories Section */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-foreground mb-8">
              Categorías Populares
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Laptops", "Audio", "Periféricos", "Accesorios"].map((cat) => (
                <Link key={cat} href={`/products?category=${cat.toLowerCase()}`}>
                  <div className="bg-gradient-to-br from-card to-card/80 border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-500 ease-out cursor-pointer group relative overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-smooth" />
                    <p className="font-bold text-foreground group-hover:text-primary transition-smooth relative z-10 text-lg">{cat}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-xl p-6 hover:border-primary/30 transition-smooth">
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5 border border-border p-8 sm:p-12">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  Suscríbete para ofertas exclusivas
                </h2>
                <p className="text-muted-foreground mb-6">
                  Recibe 10% de descuento en tu primer pedido y entérate de los últimos productos.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Tu email..."
                    className="flex-1 px-4 py-3 rounded-lg bg-card border border-border focus:outline-none focus:border-primary transition-colors"
                  />
                  <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-smooth">
                    Suscribir
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
