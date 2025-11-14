"use client";

import { categories } from "@/lib/data/products";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (range: [number, number]) => void;
}

export default function ProductFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
}: ProductFiltersProps) {
  return (
    <div className="bg-card rounded-lg p-4 sm:p-6 border border-border h-fit">
      <h3 className="font-bold text-lg text-foreground mb-6">Filtros</h3>

      <div className="mb-8">
        <h4 className="font-semibold text-foreground mb-3">Categoría</h4>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange("")}
            className={`w-full text-left px-3 py-2 rounded-lg transition-smooth ${
              selectedCategory === ""
                ? "bg-primary text-primary-foreground"
                : "text-foreground hover:bg-muted"
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-smooth ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-foreground mb-3">Rango de Precio</h4>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange[1]}
            onChange={(e) => onPriceChange([0, parseInt(e.target.value)])}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
