import { motion } from 'motion/react';
import { ShieldCheck, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-slate-50 rounded-full -z-10"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80" 
                  alt="Ingeniero trabajando"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Calidad Certificada</div>
                    <div className="text-sm text-slate-500">Normas ISO 9001</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-brand-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">Trayectoria y Confianza</h3>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 font-display leading-tight">Expertos en Soluciones de Ingeniería de Alta Precisión</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En RMF Motor's, combinamos décadas de experiencia técnica con las últimas innovaciones tecnológicas. Nos especializamos en el diagnóstico, reparación y optimización de sistemas industriales complejos.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  'Ingenieros altamente calificados',
                  'Atención personalizada 24/7',
                  'Tecnología de diagnóstico de vanguardia',
                  'Compromiso con la eficiencia energética'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/historia" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary transition-all shadow-lg">
                Conoce nuestra historia
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Misión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                <Target size={180} />
              </div>
              <div className="bg-brand-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-brand-primary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">Nuestra Misión</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Brindar soluciones integrales de ingeniería y mantenimiento industrial con la más alta precisión técnica, optimizando los recursos de nuestros clientes y garantizando la excelencia en cada proyecto mediante un equipo humano comprometido y tecnología de vanguardia.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
                <Eye size={180} />
              </div>
              <div className="bg-brand-secondary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-brand-secondary w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 font-display">Nuestra Visión</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Ser la empresa referente a nivel nacional en ingeniería industrial y automatización, reconocida por nuestra capacidad de innovación, integridad y liderazgo tecnológico, impulsando el desarrollo industrial sostenible y productivo del país.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-4xl font-bold text-slate-900 mb-16 font-display">Nuestros Valores</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: 'Excelencia', desc: 'Buscamos superar expectativas' },
                { title: 'Innovación', desc: 'Tecnología de punta' },
                { title: 'Integridad', desc: 'Transparencia y honestidad' },
                { title: 'Compromiso', desc: 'Dedicación total al cliente' }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
                >
                   <div className="font-bold text-brand-primary mb-2 text-xl">{value.title}</div>
                   <div className="text-slate-500 text-sm">{value.desc}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}
