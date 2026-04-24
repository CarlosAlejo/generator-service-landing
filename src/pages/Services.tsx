import React from 'react';
import { motion } from 'motion/react';
import { Settings, Zap, ShieldCheck, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = "5491122334455";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-20">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-brand-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">Nuestras Capacidades</h3>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-display">Servicios Especializados</h2>
              <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                Ofrecemos un catálogo completo de servicios diseñados para mantener tu infraestructura industrial operando al máximo rendimiento.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-3 gap-8"
          >
            <ServiceCard 
              icon={<Settings className="w-8 h-8 text-white"/>}
              title="Desarrollo de Proyectos"
              desc="Diseño y ejecución de proyectos de ingeniería desde la conceptualización hasta la puesta en marcha final."
              onAction={() => handleWhatsAppAction("Hola, quiero consultar sobre Desarrollo de Proyectos.")}
            />
            <ServiceCard 
              icon={<Zap className="w-8 h-8 text-white"/>}
              title="Automatización Industrial"
              desc="Implementación de sistemas de control inteligente y mantenimiento especializado de motores eléctricos."
              onAction={() => handleWhatsAppAction("Hola, necesito asesoría sobre Motores y Automatización.")}
            />
            <ServiceCard 
              icon={<ShieldCheck className="w-8 h-8 text-white"/>}
              title="Mantenimiento Preventivo"
              desc="Planes estratégicos de mantenimiento para asegurar la continuidad operativa y reducir costos por paradas."
              onAction={() => handleWhatsAppAction("Hola, solicito información sobre Mantenimiento Industrial.")}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, desc, onAction }: { icon: React.ReactNode, title: string, desc: string, onAction: () => void }) {
  return (
    <motion.div 
      variants={fadeIn}
      className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-100 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all group flex flex-col items-start border border-slate-100"
    >
      <div className="bg-slate-900 p-5 rounded-2xl mb-8 group-hover:bg-brand-primary transition-all group-hover:scale-110 duration-500 shadow-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-slate-900 leading-tight font-display">{title}</h3>
      <p className="text-slate-500 mb-8 text-base flex-grow leading-relaxed">
        {desc}
      </p>
      <button 
        onClick={onAction}
        className="text-brand-primary font-bold flex items-center gap-2 group/btn hover:opacity-80 transition-colors"
      >
        Consultar ahora
        <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}
