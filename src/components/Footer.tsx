import { ExternalLink, Globe, MessageCircle, Settings } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-brand-primary p-2 rounded-lg">
                <Settings className="text-white w-6 h-6" />
              </div>
              <h1 className="text-2xl font-bold text-white font-display">RMF MOTOR'S</h1>
            </div>
            <p className="max-w-md mb-8 leading-relaxed">
              Soluciones de ingenieria industrial de clase mundial. Comprometidos con la excelencia tecnica y la satisfaccion de nuestros clientes en todo el pais.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageCircle, ExternalLink].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-all hover:bg-brand-primary hover:text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Enlaces</h4>
            <ul className="space-y-4">
              <li><a href="/" className="transition-colors hover:text-brand-secondary">Inicio</a></li>
              <li><a href="/servicios" className="transition-colors hover:text-brand-secondary">Servicios</a></li>
              <li><a href="/productos" className="transition-colors hover:text-brand-secondary">Productos</a></li>
              <li><a href="/nosotros" className="transition-colors hover:text-brand-secondary">Nosotros</a></li>
              <li><a href="/historia" className="transition-colors hover:text-brand-secondary">Historia</a></li>
              <li><a href="/contacto" className="transition-colors hover:text-brand-secondary">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">Horarios</h4>
            <ul className="space-y-4">
              <li>Lunes a Viernes: 08:00 - 18:00</li>
              <li>Sabados: 09:00 - 13:00</li>
              <li className="font-bold text-brand-secondary">Emergencias 24/7</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 text-sm md:flex-row">
          <p>&copy; 2024 RMF MOTOR'S INGENIERIA. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="/privacidad" className="transition-colors hover:text-white">Privacidad</a>
            <a href="/terminos" className="transition-colors hover:text-white">Terminos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
