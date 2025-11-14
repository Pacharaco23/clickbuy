"use client";

import Link from "next/link";

export default function FeaturedBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl mb-12 sm:mb-16">
      {/* Background Gradient with Blur Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/80 to-secondary opacity-90" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative px-6 sm:px-12 py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-white">Nuevos Productos Disponibles</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 text-balance leading-tight">
            Tecnología Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
              Al Alcance
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-white/80 mb-8 text-balance max-w-xl leading-relaxed">
            Descubre nuestra colección curada de productos tech de última generación. 
            Calidad, innovación y las mejores marcas en un solo lugar.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products">
              <button className="group flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-white/30 transition-all duration-500 ease-out w-full sm:w-auto">
                Explorar Tienda
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
            <Link href="/about">
              <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-500 ease-out w-full sm:w-auto">
                Más Información
              </button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/20">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">500+</p>
              <p className="text-sm text-white/70">Productos</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">10k+</p>
              <p className="text-sm text-white/70">Clientes</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-sm text-white/70">Garantía</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
