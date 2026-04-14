const FacebookBadge = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M13.5 21v-8.1h2.7l.4-3.1h-3.1V7.8c0-.9.2-1.6 1.5-1.6h1.7V3.4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3v2.3H7.4v3.1H10V21h3.5Z" />
  </svg>
);

const InstagramBadge = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.45 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 1.8A3 3 0 1 0 15 12a3 3 0 0 0-3-3Z" />
  </svg>
);

export function ContactSocials() {
  return (
    <div className="mt-16 pt-8 border-t border-blue-600">
      <p className="text-blue-200 mb-4 uppercase tracking-widest text-xs font-bold">Síguenos</p>
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-blue-800 cursor-pointer transition-all">
          <FacebookBadge />
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center hover:bg-white hover:text-blue-800 cursor-pointer transition-all">
          <InstagramBadge />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo_rfm.png" alt="Logo RMF" className="h-15 w-auto" loading="lazy" decoding="async" />
          </div>
          <p className="text-sm max-w-xs text-center md:text-left">Líderes en mantenimiento industrial y soluciones energéticas desde hace más de 15 años.</p>
        </div>

        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Soporte</a>
        </div>

        <p className="text-xs">© {new Date().getFullYear()} RMF MOTOR'S INGENIERÍA. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
