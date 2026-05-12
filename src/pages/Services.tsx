import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

const WHATSAPP_NUMBER = "593998799981";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    title: "MANTENIMIENTO PREDICTIVO DE GRUPOS ELECTRÓGENOS",
    desc: "Anticipamos fallas en grupos electrógenos mediante análisis técnicos y monitoreo de condiciones operativas, permitiendo detectar desgastes o anomalías antes de que se conviertan en fallas criticas. Este servicio optimiza el rendimiento, reduce costos imprevistos y garantiza la continuidad operativa de sus equipos.",
    imageSrc: "/services/ELECTROGENOS.webp",
    imageAlt: "Servicio de grupos electrógenos",
    message: "Hola, quiero consultar sobre Mantenimiento Predictivo.",
  },
  {
    title: "MANTENIMIENTO PREVENTIVO",
    desc: "Realizamos inspecciones periódicas y servicios programados en grupos electrógenos para asegurar su correcto funcionamiento, prolongar su vida util y evitar fallas inesperadas.",
    imageSrc: "/services/PREVENTIVO.webp",
    imageAlt: "Servicio de mantenimiento preventivo",
    message: "Hola, necesito asesoría sobre Mantenimiento Preventivo.",
  },
  {
    title: "MANTENIMIENTO CORRECTIVO",
    desc: "Atendemos y solucionamos fallas eléctricas y mecánicas en grupos electrógenos de manera rápida y eficiente, restableciendo su operatividad en el menor tiempo posible.",
    imageSrc: "/services/CORRECTIVO.webp",
    imageAlt: "Servicio de mantenimiento correctivo",
    message: "Hola, solicito información sobre Mantenimiento Correctivo.",
  },
  {
    title: "CONTROL Y AUTOMATIZACIÓN",
    desc: "Implementamos soluciones de automatización y sistemas de control para grupos electrógenos, optimizando su operación, monitoreo y respuesta ante fallas. Integramos tecnología que permite una gestión eficiente, segura y remota.",
    imageSrc: encodeURI("/services/AUTOMATIZACIÓN.webp"),
    imageAlt: "Servicio de control y automatización",
    message: "Hola, quiero consultar sobre Control y Automatización.",
  },
  {
    title: "DIAGNOSTICO DE MOTORES ELECTRÓNICO",
    desc: "Realizamos diagnostico avanzado en motores electrónicos de diferentes marcas, detectando fallas de manera precisa para optimizar su rendimiento y mantener una operación confiable.",
    imageSrc: encodeURI("/services/ELECTRÓNICO.webp"),
    imageAlt: "Servicio de diagnostico electrónico",
    message:
      "Hola, necesito asesoría sobre Diagnostico de Motores Electrónicos.",
  },
  {
    title: "ANÁLISIS DE ACEITE EN LABORATORIO",
    desc: "Evaluamos el estado del aceite y de los componentes internos del equipo mediante pruebas especializadas, permitiendo detectar desgaste, contaminación y posibles fallas.",
    imageSrc: "/services/LABORATORIO.webp",
    imageAlt: "Servicio de análisis de laboratorio",
    message:
      "Hola, solicito información sobre Análisis de Aceite en Laboratorio.",
  },
];

export default function Services() {
  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="pt-20">
      <SEO
        title="Servicios de Ingeniería y Mantenimiento"
        description="Servicios especializados en mantenimiento preventivo, automatización industrial y desarrollo de proyectos de ingeniería eléctrica y mecánica en E."
        canonical="/servicios"
      />
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-primary">
                Nuestras Capacidades
              </h3>
              <h2 className="mb-6 font-display text-4xl font-bold text-slate-900">
                Servicios Especializados
              </h2>
              <div className="mx-auto mb-8 h-1.5 w-20 rounded-full bg-brand-primary"></div>
              <p className="mx-auto max-w-2xl text-lg text-slate-500">
                Ofrecemos un catálogo completo de servicios diseñados para
                mantener tu infraestructura industrial operando al máximo
                rendimiento.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                title={service.title}
                desc={service.desc}
                onAction={() => handleWhatsAppAction(service.message)}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  desc,
  onAction,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
  desc: string;
  onAction: () => void;
}) {
  return (
    <motion.div
      variants={fadeIn}
      className="group flex flex-col items-start rounded-3xl border border-slate-100 bg-white p-10 shadow-xl shadow-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-primary/10"
    >
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="mb-8 flex h-28 w-28 items-center justify-center rounded-[1.7rem] bg-brand-primary p-5 shadow-xl shadow-brand-primary/30 transition-transform duration-500 group-hover:scale-110"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-contain filter grayscale opacity-80"
        />
      </motion.div>
      <h3 className="mb-4 font-display text-2xl font-bold leading-tight text-slate-900">
        {title}
      </h3>
      <p className="mb-8 flex-grow text-base leading-relaxed text-slate-500">
        {desc}
      </p>
      <button
        onClick={onAction}
        className="group/btn flex items-center gap-2 font-bold text-brand-primary transition-colors hover:opacity-80"
      >
        Consultar ahora
        <ChevronRight
          size={18}
          className="transition-transform group-hover/btn:translate-x-1"
        />
      </button>
    </motion.div>
  );
}
