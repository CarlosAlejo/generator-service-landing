import { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronRight, Mouse } from 'lucide-react';
import SEO from '../components/SEO';

const Carousel = lazy(() => import('../components/Carousel'));
const BrandCarousel = lazy(() => import('../components/BrandCarousel'));

const WHATSAPP_NUMBER = "593998799981";

export default function Home() {
  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Ingeniería Industrial y Respaldo Energético"
        description="Especialistas en sistemas de respaldo energético, mantenimiento industrial y automatización. Soluciones integrales para optimizar la producción industrial en Ecuador."
        canonical="/"
      />
      {/* --- HERO SECTION --- */}
      <section className="relative flex min-h-[72vh] items-center overflow-hidden sm:min-h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/motor.webp?auto=format,compress&fit=crop&q=60&w=1280" 
            srcSet="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/motor.webp?auto=format,compress&fit=crop&q=60&w=640 640w, https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/motor.webp?auto=format,compress&fit=crop&q=60&w=1280 1280w, https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/motor.webp?auto=format,compress&fit=crop&q=75&w=1920 1920w"
            sizes="100vw"
            className="w-full h-full object-cover brightness-[0.25]"
            alt="Ingeniería de precisión y mantenimiento industrial especializado de RMF Motor's"
            width={1920}
            height={1080}
            loading="eager"
            data-fetchpriority="high"
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
            <span className="inline-block py-1 px-3 rounded-full bg-white/12 border border-white/25 text-white text-xs font-bold tracking-widest uppercase mb-6">
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
        
      </section>

      {/* --- BRANDS SECTION --- */}
      <Suspense fallback={<section className="border-y border-slate-100 bg-white py-16" />}>
        <BrandCarousel />
      </Suspense>

      {/* --- CAROUSEL SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-display">Nuestra Visión en Acción</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Explora cómo transformamos la industria a través de tecnología de vanguardia y compromiso con la excelencia.
            </p>
          </div>
          <Suspense fallback={<div className="h-[420px] rounded-[2rem] bg-slate-50" />}>
            <Carousel />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
