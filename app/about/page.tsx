import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Acerca de Click Buy</h1>

        <div className="bg-card rounded-lg border border-border p-8 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Nuestra Misión</h2>
          <p className="text-foreground text-lg leading-relaxed mb-6">
            En Click Buy, nos dedicamos a proporcionar los mejores productos de tecnología con un servicio excepcional. 
            Creemos que la tecnología debe ser accesible, confiable y de calidad superior.
          </p>
          <p className="text-foreground text-lg leading-relaxed">
            Nuestro objetivo es ser tu destino definitivo para todas tus necesidades de tecnología, ofreciendo productos 
            cuidadosamente seleccionados, precios competitivos y un servicio al cliente sin igual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <p>Productos Disponibles</p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <div className="text-4xl font-bold mb-2">50K+</div>
            <p>Clientes Satisfechos</p>
          </div>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <p>Soporte al Cliente</p>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">¿Por qué elegirnos?</h2>
          <ul className="space-y-4 text-foreground">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Productos de última generación y calidad garantizada</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Precios competitivos y ofertas especiales</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Envío rápido y seguro a todo el país</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Atención al cliente profesional y responsable</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <span>Garantía de satisfacción o devolución del dinero</span>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </div>
  );
}
