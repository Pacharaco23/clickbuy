"use client";

import { use } from "react";
import { products } from "@/lib/data/products";
import { useCart } from "@/lib/store/cart-store";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";
import Link from "next/link";

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // 🔥 Resolver params (Next.js 16 requirement)
  const { id } = use(params);

  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <p className="text-muted-foreground">Producto no encontrado</p>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <Link href="/products" className="text-primary hover:text-primary/80 mb-6 inline-block transition-smooth">
          ← Volver a Productos
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover"
            />
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <p className="text-muted-foreground mb-6">{product.category}</p>

            <div className="mb-8">
              <p className="text-lg text-foreground mb-4">{product.description}</p>
              <p className="text-muted-foreground">
                Producto de alta calidad diseñado para profesionales y entusiastas de la tecnología.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 mb-6">
              <p className="text-muted-foreground mb-2">Precio</p>
              <p className="text-4xl font-bold text-primary mb-6">${product.price}</p>

              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-lg font-semibold transition-smooth text-lg ${
                  isAdded
                    ? "bg-green-600 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {isAdded ? "✓ Añadido al Carrito" : "Agregar al Carrito"}
              </button>
            </div>

            <div className="flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.16 2.75a.75.75 0 0 0-1.32 0l-1.37 3.75H1.13a.75.75 0 0 0-.44 1.36l3.04 2.21-1.17 3.75a.75.75 0 0 0 1.15.84l3.04-2.21 3.04 2.21a.75.75 0 0 0 1.15-.84l-1.17-3.75 3.04-2.21a.75.75 0 0 0-.44-1.36H10.53L8.16 2.75Z" />
                </svg>
                <span>Muy bien valorado</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 1.5H5.75A2.25 2.25 0 0 0 3.5 3.75v12.5A2.25 2.25 0 0 0 5.75 18.5h8.5a2.25 2.25 0 0 0 2.25-2.25V6.5m-12 0h10" />
                </svg>
                <span>En Stock</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              Productos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} href={`/product/${p.id}`} className="group">
                  <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-smooth">
                    <div className="h-48 bg-muted overflow-hidden">
                      <img
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground truncate">{p.name}</h3>
                      <p className="text-primary font-bold mt-2">${p.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
