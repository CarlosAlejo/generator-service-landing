import { motion } from 'framer-motion';
import heroImage from '../assets/hero.png';
import Button from './ui/Button';

export default function Hero() {
  const handleSolicitarEvaluacion = () => {
    const message = encodeURIComponent(
      'Hola, me gustaría solicitar una evaluación técnica para mis motores y generadores. ¿Podrían proporcionarme más información sobre el proceso y costos?'
    );
    window.open(`https://wa.me/593998799981?text=${message}`, '_blank');
  };

  const handleNuestrosServicios = () => {
    const serviciosSection = document.getElementById('servicios');
    if (serviciosSection) {
      serviciosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          className="w-full h-full object-cover opacity-30"
          alt="Ingeniería de motores"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-semibold rounded-full mb-6 uppercase tracking-widest">
              Expertos en Energía Industrial
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Innovación y Tecnología en <span className="text-blue-500">Proyectos Eléctricos</span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Soluciones integrales en mantenimiento, reparación y repotenciación de motores y generadores. Maximizamos la vida útil de su maquinaria con precisión técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="text-lg px-10 py-4" onClick={handleSolicitarEvaluacion}>
                SOLICITAR EVALUACIÓN TÉCNICA
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-slate-900"
                onClick={handleNuestrosServicios}
              >
                NUESTROS SERVICIOS
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
