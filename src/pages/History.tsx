import { motion } from 'motion/react';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';

export default function History() {
  const milestones = [
    {
      year: '2009',
      title: 'Fundación',
      desc: 'RMF Motor\'s nace como un pequeño taller especializado en motores eléctricos en Buenos Aires.',
      icon: <Users className="text-brand-primary" />
    },
    {
      year: '2014',
      title: 'Expansión Industrial',
      desc: 'Iniciamos la prestación de servicios de ingeniería y mantenimiento preventivo para grandes plantas industriales.',
      icon: <TrendingUp className="text-brand-primary" />
    },
    {
      year: '2019',
      title: 'Certificación de Calidad',
      desc: 'Obtenemos certificaciones internacionales que avalan nuestros procesos de diagnóstico y reparación.',
      icon: <Award className="text-brand-primary" />
    },
    {
      year: '2024',
      title: 'Liderazgo Regional',
      desc: 'Nos consolidamos como referentes en soluciones de automatización e ingeniería de precisión en todo el país.',
      icon: <Calendar className="text-brand-primary" />
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Fondo Historia"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-display"
          >
            Nuestra Historia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Más de 15 años transformando la industria argentina a través del compromiso, la innovación y la excelencia técnica.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative space-y-16">
            <div className="absolute left-[21px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block"></div>
            
            {milestones.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-[21px] md:left-1/2 top-4 w-10 h-10 rounded-full bg-white border-4 border-brand-primary z-10 -translate-x-1/2 flex items-center justify-center">
                   {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 w-full pl-16 md:pl-0">
                   <div className={`bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-4xl font-bold text-brand-primary font-display block mb-2">{item.year}</span>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Details */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-4xl font-bold text-slate-900 mb-8 font-display">Un legado de ingeniería</h2>
                 <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Lo que comenzó como una visión compartida en un pequeño taller se ha convertido hoy en una empresa líder en el sector industrial. Nuestra historia no se trata solo de máquinas y motores, sino de las personas que han confiado en nosotros y del equipo que trabaja incansablemente para superar cada desafío.
                 </p>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    A lo largo de los años, hemos enfrentado cambios tecnológicos significativos, pero nuestros valores fundamentales de integridad y calidad se han mantenido intactos. Hoy, miramos hacia el futuro con la misma pasión que el primer día.
                 </p>
                 <div className="grid grid-cols-2 gap-8 py-8 border-t border-slate-200">
                    <div>
                        <div className="text-3xl font-bold text-brand-primary mb-1 font-display">15+</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Años de Trayectoria</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-brand-primary mb-1 font-display">500+</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">Proyectos Exitosos</div>
                    </div>
                 </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                 <img 
                    src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80" 
                    className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                    alt="Trabajo en equipo"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute -bottom-8 -right-8 bg-brand-primary p-12 rounded-full hidden lg:block border-8 border-white">
                    <Award className="text-white w-12 h-12" />
                 </div>
              </motion.div>
           </div>
        </div>
      </section>
    </div>
  );
}
