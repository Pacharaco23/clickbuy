"use client";

import { Product } from "@/lib/data/products";
import Link from "next/link";
import { useCart } from "@/lib/store/cart-store";
import { useState } from "react";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <Link href={`/product/${product.id}`}>
      <div 
        className="bg-card rounded-xl overflow-hidden card-hover border border-border group relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image Container */}
        <div className="relative h-56 sm:h-72 bg-gradient-to-br from-muted to-background overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
          
          {product.featured && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Destacado
            </div>
          )}
          
          {/* Floating Label on Hover */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-all duration-300">
              <span className="text-white font-bold text-lg">Ver Detalles</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-5 sm:p-6 relative bg-gradient-to-b from-card to-card/95">
          <div className="absolute inset-0 bg-gradient-overlay pointer-events-none" />
          
          <div className="relative z-10">
            {/* Category */}
            <p className="text-xs font-semibold text-secondary mb-2 uppercase tracking-wider">
              {product.category}
            </p>
            
            {/* Product Name */}
            <h3 className="font-bold text-foreground text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
              {product.name}
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
              {product.description}
            </p>
            
            {/* Price and Button Container */}
            <div className="flex justify-between items-center gap-3">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  ${product.price}
                </span>
              </div>
              
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddToCart();
                }}
                className={`flex-shrink-0 px-4 py-3 rounded-lg font-bold transition-all duration-300 ease-out text-sm shadow-md ${
                  isAdded
                    ? "bg-green-600 text-white shadow-green-600/50"
                    : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:from-primary/90 hover:to-accent/90"
                }`}
              >
                {isAdded ? "✓ Añadido" : "Añadir"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
