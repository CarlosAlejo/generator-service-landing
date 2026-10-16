import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, UserRound } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import Cart from './Cart';

const WHATSAPP_NUMBER = '593998799981';
const LOGO_SRC = '/LogoVectorRMF1.avif';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsCartOpen } = useCart();

  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Productos', href: '/productos' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className="fixed z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center">
              <img
                src={LOGO_SRC}
                alt="RMF Motor's Ingenieria"
                width={400}
                height={100}
                className="h-12 w-auto sm:h-14"
                loading="eager"
                fetchPriority="high"
              />
            </Link>
          </motion.div>

          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`group relative text-sm font-semibold transition-colors ${
                  location.pathname === link.href
                    ? 'text-brand-primary'
                    : 'text-slate-600 hover:text-brand-primary'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-brand-primary transition-all ${
                    location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
            <button
              type="button"
              onClick={() => handleWhatsAppAction('Hola, me gustaria solicitar un presupuesto.')}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-primary hover:shadow-brand-primary/20"
            >
              Presupuesto
            </button>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-600 transition-colors hover:text-brand-primary"
              aria-label={`Abrir carrito${totalItems > 0 ? ` con ${totalItems} articulos` : ''}`}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-brand-primary text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <a
              href="https://sistema.rmfmotors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-4 py-2.5 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-primary/90"
            >
              <UserRound size={18} aria-hidden="true" />
              Portal RMF MOTORS
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-slate-600"
              aria-label={`Abrir carrito${totalItems > 0 ? ` con ${totalItems} articulos` : ''}`}
            >
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-brand-primary text-[10px] font-bold text-white">
                  {totalItems}
                </span>
              )}
            </button>
            <a
              href="https://sistema.rmfmotors.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portal RMF MOTORS"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-3 py-2 text-xs font-bold text-white"
            >
              <UserRound size={18} aria-hidden="true" />
              Portal RMF MOTORS
            </a>
            <button
              type="button"
              className="p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Cerrar menu de navegacion' : 'Abrir menu de navegacion'}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <Cart />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-100 bg-white md:hidden"
          >
            <div className="space-y-2 px-4 pt-2 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-3 py-4 text-base font-semibold ${
                    location.pathname === link.href
                      ? 'bg-brand-primary/10 text-brand-primary'
                      : 'text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => handleWhatsAppAction('Hola, me gustaria solicitar un presupuesto.')}
                className="w-full rounded-xl bg-brand-primary py-4 font-bold text-white shadow-lg"
              >
                Solicitar Presupuesto
              </button>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
