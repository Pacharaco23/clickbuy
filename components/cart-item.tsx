"use client";

import { CartItem } from "@/lib/store/cart-store";
import { useCart } from "@/lib/store/cart-store";

export default function CartItemComponent({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      <img
        src={item.image || "/placeholder.svg"}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg bg-muted"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-foreground">{item.name}</h3>
        <p className="text-primary font-bold mt-2">${item.price}</p>
        <div className="flex items-center gap-2 mt-3">
          <button
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
            className="w-8 h-8 border border-border rounded hover:bg-muted transition-smooth"
          >
            -
          </button>
          <span className="w-8 text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 border border-border rounded hover:bg-muted transition-smooth"
          >
            +
          </button>
          <button
            onClick={() => removeItem(item.id)}
            className="ml-auto text-destructive hover:text-destructive/80 text-sm font-medium transition-smooth"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
