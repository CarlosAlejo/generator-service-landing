import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/preventivo.avif?auto=format,compress&fit=crop&q=60&w=1000",
    title: "Mantenimiento Preventivo",
    desc: "Evita paradas innecesarias con nuestros planes de mantenimiento."
  },
  {
    image: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/scanner.webp?auto=format,compress&fit=crop&q=60&w=1000",
    title: "Ingeniería de Precisión",
    desc: "Diseños optimizados para la máxima eficiencia industrial."
  },
  {
    image: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/brakers.webp?auto=format,compress&fit=crop&q=60&w=1000",
    title: "Soluciones a Medida",
    desc: "Adaptamos nuestra tecnología a las necesidades de tu planta."
  }
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev: number) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev: number) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev: number) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img 
            src={slides[current].image} 
            loading={current === 0 ? "eager" : "lazy"}
            className="w-full h-full object-cover brightness-50"
            alt={slides[current].title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4 font-display"
            >
              {slides[current].title}
            </motion.h3>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-200 max-w-xl"
            >
              {slides[current].desc}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button 
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
        aria-label="Ver diapositiva anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all"
        aria-label="Ver siguiente diapositiva"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${current === i ? 'bg-brand-primary w-8' : 'bg-white/50'}`}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-pressed={current === i}
          />
        ))}
      </div>
    </div>
  );
}
