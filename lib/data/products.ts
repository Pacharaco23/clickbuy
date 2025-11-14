export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Portátil Pro 16\"",
    price: 1999,
    category: "Portátiles",
    description: "Portátil potente con los últimos procesadores y 16GB de RAM.",
    image: "/laptop-pro-16-inch.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Auriculares Inalámbricos",
    price: 299,
    category: "Audio",
    description:
      "Auriculares inalámbricos con cancelación de ruido y batería de 30 horas.",
    image: "/wireless-headphones-noise-cancel.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Webcam 4K",
    price: 199,
    category: "Cámaras",
    description: "Cámara para streaming con video 4K de alta claridad.",
    image: "/4k-webcam-streaming.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Teclado Mecánico RGB",
    price: 159,
    category: "Periféricos",
    description:
      "Teclado mecánico para gaming con iluminación RGB personalizable.",
    image: "/mechanical-keyboard-rgb-gaming.jpg",
  },
  {
    id: "5",
    name: "Mouse Gamer",
    price: 79,
    category: "Periféricos",
    description: "Mouse de gaming de alta precisión con DPI ajustable.",
    image: "/gaming-mouse-high-precision.jpg",
  },
  {
    id: "6",
    name: "Hub USB-C",
    price: 89,
    category: "Accesorios",
    description: "Hub USB-C 7 en 1 con múltiples puertos.",
    image: "/usb-c-hub-7in1.jpg",
  },
  {
    id: "7",
    name: "Monitor 27\" 4K",
    price: 599,
    category: "Monitores",
    description:
      "Monitor Ultra HD de 27 pulgadas con tasa de refresco de 144Hz.",
    image: "/monitor-27-4k-144hz.jpg",
    featured: true,
  },
  {
    id: "8",
    name: "SSD Portátil 1TB",
    price: 149,
    category: "Almacenamiento",
    description: "SSD portátil de alta velocidad con capacidad de 1TB.",
    image: "/portable-ssd-1tb-fast.jpg",
  },
  {
    id: "9",
    name: "Soporte para Webcam",
    price: 29,
    category: "Accesorios",
    description: "Soporte ajustable para webcam.",
    image: "/webcam-stand-adjustable.jpg",
  },
  {
    id: "10",
    name: "Power Bank 20000mAh",
    price: 59,
    category: "Accesorios",
    description: "Power bank de alta capacidad con carga rápida.",
    image: "/power-bank-20000mah-fast-charge.jpg",
  },
  {
    id: "11",
    name: "Tablet Pro 12.9\"",
    price: 1099,
    category: "Tablets",
    description: "Tablet premium con soporte para stylus.",
    image: "/tablet-pro-12-inch-stylus.jpg",
  },
  {
    id: "12",
    name: "Reloj Inteligente",
    price: 399,
    category: "Wearables",
    description: "Reloj inteligente avanzado con monitoreo de actividad física.",
    image: "/smartwatch-advanced-fitness.jpg",
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));

