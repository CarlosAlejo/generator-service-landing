import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from './ui/Button';

interface NavbarProps {
  useDarkText?: boolean;
  onNavigate?: (href: string) => void;
}

const navLinks = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Productos', href: '#productos' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar({ useDarkText = false, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCotizarClick = () => {
    const message = encodeURIComponent(
      'Hola, me gustaría solicitar una cotización para servicios de mantenimiento y reparación de motores y generadores. ¿Podrían proporcionarme más información sobre sus precios y disponibilidad?'
    );
    window.open(`https://wa.me/593998799981?text=${message}`, '_blank');
  };

  const isDarkText = isScrolled || useDarkText;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <img src="/logo_rfm.png" alt="Logo RMF" className="h-15 w-auto" decoding="async" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => {
                if (onNavigate) {
                  event.preventDefault();
                  onNavigate(link.href);
                }
              }}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${isDarkText ? 'text-slate-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <Button variant="accent" className="text-xs py-2 px-4" onClick={handleCotizarClick}>
            COTIZAR AHORA
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenu(true)} aria-label="Abrir menú">
          <Menu className={isDarkText ? 'text-slate-900' : 'text-white'} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            className="fixed inset-0 bg-slate-900 z-60 flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenu(false)} aria-label="Cerrar menú">
                <X className="text-white w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => {
                    if (onNavigate) {
                      event.preventDefault();
                      onNavigate(link.href);
                    }
                    setMobileMenu(false);
                  }}
                  className="text-2xl text-white font-bold"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="accent"
                onClick={() => {
                  handleCotizarClick();
                  setMobileMenu(false);
                }}
              >
                COTIZAR AHORA
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
