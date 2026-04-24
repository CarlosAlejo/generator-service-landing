import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import Carousel from '../components/Carousel';
import BrandCarousel from '../components/BrandCarousel';

const WHATSAPP_NUMBER = "5491122334455";

export default function Home() {
  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20">
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover brightness-[0.25]"
            alt="Ingenieria Industrial"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/20 border border-brand-secondary/30 text-brand-secondary text-xs font-bold tracking-widest uppercase mb-6">
              Líderes en Ingeniería Industrial
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] font-display">
              Innovación que <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Impulsa tu Industria</span>
            </h2>
            <p className="text-xl mb-10 text-slate-300 max-w-xl leading-relaxed">
              Soluciones integrales en mantenimiento, automatización y proyectos de ingeniería a medida para optimizar tu producción.
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
