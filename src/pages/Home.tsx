import { motion } from 'motion/react';
import { ChevronDown, ChevronRight, Mouse } from 'lucide-react';
import Carousel from '../components/Carousel';
import BrandCarousel from '../components/BrandCarousel';

const WHATSAPP_NUMBER = "593998799981";

export default function Home() {
  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleScrollCueClick = () => {
    window.scrollTo({
      top: window.innerHeight * 0.82,
      behavior: 'smooth',
    });
  };

  return (
    <div className="pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden sm:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/motor.png?auto=format&fit=crop&q=80" 
            className="h-full w-full object-cover object-[62%_center] brightness-[0.35] sm:object-center"
            alt="Ingenieria Industrial"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-6">
              Especialistas en Sistemas de Respaldo y Generación Eléctrica Industrial
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] font-display">
              Innovación que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Impulsa tu Industria</span>
            </h2>
            <p className="text-xl mb-10 text-slate-300 max-w-xl leading-relaxed">
              RMF Motor's Ingeniería abarca diversos sectores clave como avícola, florícola, telecomunicaciones, hospitalario, financiero, industrial y construcción. Ofrecemos soluciones técnicas integrales y confiables, adaptadas específicamente a las necesidades de cada cliente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleWhatsAppAction("Hola, me gustaría solicitar información sobre sus servicios de ingeniería.")}
                className="group bg-brand-primary hover:opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20"
              >
                Comenzar Proyecto
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a 
                href="/servicios"
                className="px-8 py-4 rounded-xl font-bold border border-white/20 hover:bg-white/10 transition-all text-center"
              >
                Nuestros Servicios
              </a>
            </div>
          </motion.div>
        </div>
        <motion.button
          type="button"
          onClick={handleScrollCueClick}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/85 transition-colors hover:text-white"
          aria-label="Desplazarse hacia abajo"
        >
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-brand-secondary">
            Scroll
          </span>
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              className="relative flex items-center justify-center"
            >
              <Mouse size={22} />
              <motion.span
                animate={{ y: [-2, 6, -2], opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
                className="absolute text-brand-secondary"
              >
                <ChevronDown size={14} />
              </motion.span>
            </motion.div>
          </div>
        </motion.button>
      </section>

      {/* --- BRANDS SECTION --- */}
      <BrandCarousel />

      {/* --- CAROUSEL SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">Nuestra Visión en Acción</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Explora cómo transformamos la industria a través de tecnología de vanguardia y compromiso con la excelencia.
            </p>
          </div>
          <Carousel />
        </div>
      </section>
    </div>
  );
}
