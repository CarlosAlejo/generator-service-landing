import { motion } from "motion/react";
import { ShieldCheck, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div className="pt-20">
      <SEO
        title="Sobre Nosotros - Trayectoria y Confianza"
        description="Conozca a RMF Motor's Ingeniería. 10 años de experiencia brindando soluciones de ingeniería de alta precisión, automatización y mantenimiento industrial en Ecuador."
        canonical="/nosotros"
      />
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="absolute -top-3 -left-3 h-16 w-16 rounded-full bg-brand-primary/10 -z-10 sm:-top-4 sm:-left-4 sm:h-24 sm:w-24"></div>
              <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-full bg-slate-50 -z-10 sm:-bottom-4 sm:-right-4 sm:h-32 sm:w-32"></div>
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
                <img
                  src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/equipo.webp?auto=format,compress&fit=crop&q=60&w=800"
                  srcSet="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/equipo.webp?auto=format,compress&fit=crop&q=60&w=400 400w, https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/equipo.webp?auto=format,compress&fit=crop&q=60&w=800 800w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Ingeniero trabajando"
                  className="h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[380px] md:h-[460px] lg:h-[500px]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
              <div className="absolute bottom-4 left-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:bottom-6 sm:left-6 sm:p-5 md:bottom-8 md:-left-8 md:p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <ShieldCheck className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Mano de Obra</div>
                    <div className="text-sm text-slate-500">Calificada</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-brand-primary font-bold tracking-[0.2em] text-sm mb-4 uppercase">
                Trayectoria y Confianza
              </h3>
              <h2 className="mb-6 text-3xl font-bold leading-tight text-slate-900 font-display sm:text-4xl md:mb-8 md:text-5xl">
                Expertos en Soluciones de Ingeniería de Alta Precisión
              </h2>
              <p className="mb-8 text-base leading-relaxed text-slate-600 sm:text-lg">
                En RMF Motor's, una década de experiencia técnica con las
                últimas innovaciones tecnológicas. Nos especializamos en el
                diagnóstico, reparación y optimización de sistemas industriales
                complejos.
              </p>
              <div className="mb-8 space-y-3 sm:mb-10 sm:space-y-4">
                {[
                  "Ingenieros altamente calificados",
                  "Atención personalizada 24/7",
                  "Tecnología de diagnóstico de vanguardia",
                  "Compromiso con la eficiencia energética",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-slate-700 font-medium sm:items-center"
                  >
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 sm:mt-0">
                      <div className="h-2 w-2 rounded-full bg-brand-primary"></div>
                    </div>
                    <span className="text-sm leading-6 sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/historia"
                className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-brand-primary sm:px-8 sm:py-4 sm:text-base"
              >
                Conoce nuestra historia
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
            {/* Misión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100 sm:p-8 lg:p-12"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 sm:p-6 lg:p-8">
                <Target size={140} className="sm:h-40 sm:w-40 lg:h-[180px] lg:w-[180px]" />
              </div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 sm:mb-8 sm:h-16 sm:w-16">
                <Target className="text-brand-primary w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 font-display sm:mb-6 sm:text-3xl">
                Nuestra Misión
              </h3>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Brindar soluciones integrales en ingeniería para grupos
                electrógenos y sistemas asociados, confiabilidad
                operativa, respaldo técnico especializado y un servicio oportuno
                que contribuya a la continuidad y eficiencia de los procesos de
                nuestros clientes en diversos sectores productivos.{" "}
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-100 sm:p-8 lg:p-12"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] transition-transform duration-500 group-hover:scale-110 sm:p-6 lg:p-8">
                <Eye size={140} className="sm:h-40 sm:w-40 lg:h-[180px] lg:w-[180px]" />
              </div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-secondary/10 sm:mb-8 sm:h-16 sm:w-16">
                <Eye className="text-brand-secondary w-8 h-8" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900 font-display sm:mb-6 sm:text-3xl">
                Nuestra Visión
              </h3>
              <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                Ser una empresa líder a nivel nacional en soluciones de
                ingeniería para sistemas de respaldo de energía, reconocida por
                su excelencia técnica, confiabilidad en el servicio y capacidad
                de respuesta, consolidando relaciones sólidas con nuestros
                clientes en todos los sectores donde operamos.{" "}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-10 text-3xl font-bold text-slate-900 font-display sm:mb-12 sm:text-4xl lg:mb-16">
            Nuestros Valores
          </h2>
          <div className="grid justify-center gap-5 sm:gap-6 md:grid-cols-3 md:gap-8">
            {[
              {
                title: "Calidad",
                desc: "Con altos estándares en cada servicio, respaldados por procesos técnicos y mejora continua.",
              },
              {
                title: "Compromiso",
                desc: "Cumplimos con responsabilidad cada proyecto, asegurando resultados que superen las expectativas de nuestros clientes.",
              },
              {
                title: "Responsabilidad",
                desc: "Actuamos con ética y profesionalismo en todas nuestras operaciones, cuidando los intereses de nuestros clientes y el entorno.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="max-w-sm rounded-2xl border border-slate-100 bg-slate-50 p-5 sm:p-6"
              >
                <div className="mb-2 text-lg font-bold text-brand-primary sm:text-xl">
                  {value.title}
                </div>
                <div className="text-sm leading-6 text-slate-500">{value.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
