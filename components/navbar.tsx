"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/store/cart-store";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { getTotalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-smooth">
              <span className="text-primary-foreground font-black text-lg">CB</span>
            </div>
            <span className="font-black text-xl hidden sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Click Buy</span>
          </Link>

          {/* Search form */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full group">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </form>

          {/* Navigation links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/products" className="font-medium text-foreground hover:text-primary transition-smooth relative group">
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/about" className="font-medium text-foreground hover:text-primary transition-smooth relative group">
              Acerca de
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
            </Link>
          </div>

          <Link
            href="/cart"
            className="relative flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-primary-foreground px-4 py-2.5 rounded-xl font-bold transition-all duration-500 ease-out flex-shrink-0 group shadow-md"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
            <span className="hidden sm:inline">Carrito</span>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
