const LOGO_SRC = "/LogoRMFW1.webp";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-12 md:grid-cols-4">
          <div className="col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <img
                src={LOGO_SRC}
                alt="RMF Motor's Ingeniería"
                width={400} height={100} className="h-14 w-auto sm:h-16" loading="lazy"
              />
            </div>
            <p className="mb-8 max-w-md leading-relaxed">
              Especialistas en Sistemas de Respaldo y Generación Eléctrica Industrial
            </p>
          </div>
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Enlaces
            </h4>
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
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Horarios
            </h4>
            <ul className="space-y-4">
              <li>Lunes a Viernes: 08:00 - 18:00</li>
              <li>Sábados: 09:00 - 13:00</li>
              <li className="font-bold text-brand-secondary">Emergencias 24/7</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-12 text-sm md:flex-row">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="https://penalarckservice.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              penalarckservice.com
            </a>
            . Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="/privacidad" className="transition-colors hover:text-white">Privacidad</a>
            <a href="/terminos" className="transition-colors hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
