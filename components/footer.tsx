export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">CB</span>
              </div>
              <span className="font-bold text-lg">Click Buy</span>
            </div>
            <p className="text-primary-foreground/80">Tu destino definitivo para tecnología</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="/" className="hover:text-primary-foreground transition-smooth">Inicio</a></li>
              <li><a href="/products" className="hover:text-primary-foreground transition-smooth">Productos</a></li>
              <li><a href="/about" className="hover:text-primary-foreground transition-smooth">Acerca de</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Compañía</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Términos de Uso</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Envíos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-smooth">Devoluciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-primary-foreground/80 text-sm">
              <li>Richard Jesús Berrios Picado</li>
              <li>Ricardo José Gómez González</li>
              <li>Lorenzo Antonio Meléndez Osorio</li>
              <li>Dorian Agustín González Quiroz</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Click Buy. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="https://facebook.com" className="hover:text-primary-foreground transition-smooth" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://X.com" className="hover:text-primary-foreground transition-smooth" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://instagram.com" className="hover:text-primary-foreground transition-smooth" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
