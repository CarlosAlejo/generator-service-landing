import { useState, useEffect } from 'react';
import { 
  Settings, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  X,
  MessageCircle,
  BarChart3,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { JSX } from 'react/jsx-runtime';
import Footer, { ContactSocials } from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Button from './components/ui/Button';

// --- COMPONENTES ATÓMICOS ---

const SectionTitle = ({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="text-center mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
    >
      {title}
    </motion.h2>
    <div className={`w-20 h-1.5 bg-blue-600 mx-auto mb-6`}></div>
    <p className={`max-w-2xl mx-auto text-lg ${light ? 'text-slate-300' : 'text-slate-600'}`}>
      {subtitle}
    </p>
  </div>
);

const Services = () => {
  interface ServiceItem {
    title: string;
    desc: string;
    icon: JSX.Element;
    image: string;
    details: string[];
  }

  const services: ServiceItem[] = [
    {
      title: "Reparación de Generadores",
      desc: "Diagnóstico avanzado y rebobinado de alta precisión para generadores industriales de cualquier capacidad.",
      icon: <Zap className="w-8 h-8" />,
      image: "/generador2.png",
      details: [
        "Revisión completa de bobinas y aislamiento",
        "Reemplazo de piezas desgastadas con repuestos originales",
        "Pruebas finales de carga y rendimiento",
      ],
    },
    {
      title: "Mantenimiento Preventivo",
      desc: "Planes programados para evitar paradas críticas. Pruebas de aislamiento, lubricación y limpieza técnica.",
      icon: <ShieldCheck className="w-8 h-8" />,
      image: "/generador3.png",
      details: [
        "Programación periódica según horas de operación",
        "Inspección de conexiones y temperatura",
        "Gestión de informes técnicos y recomendaciones",
      ],
    },
    {
      title: "Repotenciación Eléctrica",
      desc: "Optimización de equipos antiguos para cumplir con estándares modernos de eficiencia y rendimiento.",
      icon: <Cpu className="w-8 h-8" />,
      image: "/generador.png",
      details: [
        "Actualización de componentes para menor consumo energético",
        "Adaptación a nuevas capacidades de carga",
        "Certificación de rendimiento conforme a normativas",
      ],
    },
    {
      title: "Diagnóstico con Escáner",
      desc: "Análisis técnico profundo para detectar fallas invisibles antes de que se conviertan en siniestros.",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "/generador4.png",
      details: [
        "Detección temprana de sobrecalentamientos",
        "Análisis de vibraciones y desbalanceos",
        "Reportes claros con plan de acción inmediato",
      ],
    },
  ];

  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicios" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Nuestros Servicios Especializados" 
          subtitle="Ofrecemos soluciones de ingeniería con los más altos estándares de calidad para garantizar la continuidad de sus operaciones."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white overflow-hidden rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-white shadow-lg rounded-xl flex items-center justify-center mb-6 relative -mt-10 mx-auto text-blue-700 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{s.title}</h3>
                <p className="text-slate-600 mb-6 text-center">{s.desc}</p>
                <button
                  type="button"
                  onClick={() => setSelectedService(s)}
                  className="text-blue-700 font-bold flex items-center justify-center gap-2 text-sm hover:gap-3 transition-all uppercase tracking-wider mx-auto"
                >
                  Saber más <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 bg-slate-900/80 text-white rounded-full p-3 hover:bg-slate-900 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedService.title}</h3>
                <p className="text-slate-600 text-lg mb-6">{selectedService.desc}</p>
                <div className="space-y-3">
                  {selectedService.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-blue-600" />
                      <p className="text-slate-700">{detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
                  >
                    Cerrar
                  </button>
                  <a
                    href="#contacto"
                    onClick={() => setSelectedService(null)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-700 text-white hover:bg-blue-800 transition"
                  >
                    Solicitar Servicio
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const WhyChooseUs = () => {
  const stats = [
    { val: "15+", label: "Años de Experiencia" },
    { val: "500+", label: "Proyectos Exitosos" },
    { val: "24/7", label: "Soporte Técnico" },
    { val: "100%", label: "Garantía de Calidad" },
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/generador3.png" 
              alt="Taller de motores"
              className="w-full h-125 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-blue-700 p-8 rounded-2xl text-white hidden md:block z-20">
            <p className="text-4xl font-bold">Confianza</p>
            <p className="text-blue-200">Industrial Certificada</p>
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full -z-10 animate-pulse"></div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Expertos en Soluciones de Ingeniería y Motores Eléctricos</h2>
          <p className="text-slate-600 text-lg mb-8">
            En <strong>RMF MOTOR'S</strong>, entendemos que cada segundo de inactividad cuesta. Por eso, combinamos décadas de conocimiento técnico con tecnología de vanguardia para ofrecer el servicio más rápido y confiable del mercado.
          </p>
          
          <ul className="space-y-4 mb-10">
            {["Personal técnico altamente calificado", "Uso de repuestos originales y certificados", "Entrega inmediata en casos de emergencia", "Infraestructura propia de alta capacidad"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-blue-600 w-6 h-6" /> {item}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-blue-900">{s.val}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-slate-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-2/5 bg-blue-700 p-12">
            <h3 className="text-3xl font-bold mb-8">Información de Contacto</h3>
            <p className="text-blue-100 mb-12">¿Tienes una emergencia o necesitas una cotización? Nuestro equipo técnico está listo para atenderte.</p>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-800 p-3 rounded-lg"><Phone className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-blue-200">Llámanos</p>
                  <p className="text-xl font-bold">+593 99 879 9981</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-800 p-3 rounded-lg"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-blue-200">Correo</p>
                  <p className="text-lg font-medium">contacto@rmfmotors.com</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-blue-800 p-3 rounded-lg"><MapPin className="w-6 h-6" /></div>
                <div>
                  <p className="text-sm text-blue-200">Ubicación</p>
                  <p className="text-lg font-medium">La Ecuatoriana, Quito, Ecuador</p>
                </div>
              </div>
            </div>
            
            <ContactSocials />
          </div>

          {/* Form Side */}
          <div className="md:w-3/5 p-12">
            {status === 'success' ? (
              <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} className="h-full flex flex-col items-center justify-center text-center">
                <CheckCircle2 className="w-20 h-20 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-400">Nos pondremos en contacto contigo en menos de 24 horas.</p>
                <Button variant="outline" className="mt-8 text-white" onClick={() => setStatus('')}>Enviar otro mensaje</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Nombre Completo</label>
                    <input type="text" required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder="Juan Pérez" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Empresa</label>
                    <input type="text" className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder="Industrias S.A." />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Correo Electrónico</label>
                    <input type="email" required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder="juan@empresa.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Teléfono</label>
                    <input type="tel" required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all" placeholder="+51 999 999 999" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Mensaje / Requerimiento Técnico</label>
                  <textarea rows={4} required className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-all resize-none" placeholder="Describa el problema o servicio solicitado..."></textarea>
                </div>
                <Button className="w-full py-4 text-lg" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud Técnica'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/593998799981" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-100 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
  >
    <MessageCircle className="w-8 h-8" />
    <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap pointer-events-none">
      ¡Hablemos por WhatsApp!
    </span>
  </a>
);

// --- CATÁLOGO Y CARRITO ---

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  image: string;
  specs: string[];
};

type Category = {
  name: string;
  desc: string;
  icon: JSX.Element;
  items: string[];
  products: Product[];
};

type CartItem = Product & {
  quantity: number;
};

const catalogCategories: Category[] = [
  {
    name: "Motores Eléctricos",
    desc: "Motores trifásicos y monofásicos de alta eficiencia para aplicaciones industriales",
    icon: <Zap className="w-8 h-8" />,
    items: ["Hasta 100HP", "Certificación IE3", "Garantía extendida"],
    products: [
      {
        id: "motor-50hp",
        title: "Motor 50HP IE3",
        subtitle: "Alta eficiencia para líneas de producción",
        price: "$1,850",
        image: "https://images.unsplash.com/photo-1542444459-db82cd126e61?auto=format&fit=crop&q=80",
        specs: ["IE3 eficiencia premium", "Horas de trabajo continuo", "Bajo nivel de ruido"],
      },
      {
        id: "motor-75hp",
        title: "Motor 75HP Trifásico",
        subtitle: "Mayor potencia para aplicaciones pesadas",
        price: "$2,450",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
        specs: ["Diseño robusto", "Arranque suave", "Garantía extendida"],
      },
    ],
  },
  {
    name: "Generadores",
    desc: "Sistemas de respaldo eléctrico con tecnología de punta y bajo consumo",
    icon: <Settings className="w-8 h-8" />,
    items: ["Diésel y Gas", "Control automático", "Bajo ruido"],
    products: [
      {
        id: "generador-20kva",
        title: "Generador 20kVA",
        subtitle: "Respaldo confiable para instalación media",
        price: "$4,200",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
        specs: ["Control automático", "Eficiencia de combustible", "Instalación rápida"],
      },
      {
        id: "generador-50kva",
        title: "Generador 50kVA",
        subtitle: "Potencia ampliada para operaciones industriales",
        price: "$7,800",
        image: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80",
        specs: ["Alta capacidad de carga", "Bajo mantenimiento", "Soporte técnico 24/7"],
      },
    ],
  },
  {
    name: "Transformadores",
    desc: "Transformadores de distribución y potencia para redes eléctricas",
    icon: <Cpu className="w-8 h-8" />,
    items: ["Hasta 500KVA", "Aislamiento en aceite", "Normas IEEE"],
    products: [
      {
        id: "transformador-200kva",
        title: "Transformador 200kVA",
        subtitle: "Distribución segura para redes industriales",
        price: "$6,300",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80",
        specs: ["Aislamiento en aceite", "Cumple normativas IEEE", "Montaje en sitio"],
      },
    ],
  },
];

// --- COMPONENTE PRINCIPAL ---

export default function LandingPage() {
  const [catalogCategory, setCatalogCategory] = useState<string | 'all' | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Manejo de errores globales
    const handleError = (event: ErrorEvent) => {
      console.error('Error capturado:', event.error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Promesa rechazada:', event.reason);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const currentCategory = catalogCategory === 'all'
    ? null
    : catalogCategories.find(category => category.name === catalogCategory) ?? null;

  const selectedProducts = catalogCategory === 'all'
    ? catalogCategories.flatMap(category => category.products.map(product => ({ ...product, category: category.name } as Product & { category: string })))
    : currentCategory
      ? currentCategory.products.map(product => ({ ...product, category: currentCategory.name } as Product & { category: string }))
      : [];

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.price.replace(/[^0-9.-]+/g, '')) * item.quantity, 0);

  const sendWhatsApp = () => {
    if (cartItems.length === 0) {
      window.open('https://wa.me/593998799981?text=' + encodeURIComponent('Hola, quiero más información sobre sus servicios y productos.'), '_blank');
      return;
    }

    const lines = [
      'Hola, quiero comprar estos productos:',
      ...cartItems.map(item => `- ${item.title} x${item.quantity} (${item.price})`),
      `Total aproximado: $${cartTotal.toLocaleString('es-CL')}`,
      'Por favor, contáctenme para finalizar la compra.'
    ];

    const message = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/593998799981?text=${message}`, '_blank');
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const goBack = () => setCatalogCategory(null);

  const handleNavClick = (href: string) => {
    if (!catalogCategory) return;
    setCatalogCategory(null);
    window.requestAnimationFrame(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.hash = href;
      }
    });
  };

  if (hasError) {
    return (
      <div className="bg-white min-h-screen font-sans text-slate-900">
        <Navbar />
        <section className="flex min-h-screen items-center justify-center px-6 py-24">
          <div className="max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-red-600 font-bold mb-6">Error del servidor</p>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Ha ocurrido un error inesperado.</h1>
            <p className="text-lg text-slate-600 mb-10">Estamos trabajando para resolverlo. Por favor, intenta recargar la página o contáctanos.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
              >
                Recargar página
              </button>
              <a
                href="https://wa.me/593998799981?text=Hola,%20he%20tenido%20un%20error%20en%20el%20sitio.%20¿pueden%20ayudarme?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition"
              >
                Reportar error
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white font-sans text-slate-900">
      <Navbar useDarkText={!!catalogCategory} onNavigate={catalogCategory ? handleNavClick : undefined} />

      {catalogCategory ? (
        <section className="py-24 bg-slate-50 min-h-screen">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-8 mb-10 items-start">
              <div className="flex-1">
                <button
                  type="button"
                  onClick={goBack}
                  className="inline-flex items-center gap-2 text-blue-700 font-semibold mb-6"
                >
                  ← Volver al inicio
                </button>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Catálogo de {catalogCategory === 'all' ? 'Productos' : currentCategory?.name}</h1>
                <p className="text-slate-600 max-w-3xl">Selecciona el producto que necesitas y agrégalo al carrito. Cuando estés listo, continúa la compra por WhatsApp.</p>
              </div>
              <div className="w-full lg:w-96 bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Carrito de compras</h2>
                {cartItems.length === 0 ? (
                  <p className="text-slate-500">Aún no agregas productos. Haz clic en Comprar para añadirlos.</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map(item => (
                      <div key={item.id} className="rounded-2xl bg-slate-50 p-4">
                        <div className="flex justify-between gap-4">
                          <div>
                            <p className="font-semibold text-slate-900">{item.title}</p>
                            <p className="text-sm text-slate-600">{item.quantity} x {item.price}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-red-600 text-sm font-semibold"
                          >Eliminar</button>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-slate-200">
                      <p className="font-semibold text-slate-900">Total aproximado</p>
                      <p className="text-xl font-bold text-blue-700">${cartTotal.toLocaleString('es-CL')}</p>
                    </div>
                  </div>
                )}
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="mt-8 w-full bg-emerald-500 text-white rounded-xl py-3 font-semibold hover:bg-emerald-600 transition"
                >
                  Continuar en WhatsApp
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {selectedProducts.map(product => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200"
                >
                  <img src={product.image} alt={product.title} className="w-full h-56 object-cover" loading="lazy" decoding="async" />
                  <div className="p-8">
                    <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-3">{product.category}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.title}</h3>
                    <p className="text-slate-600 mb-4">{product.subtitle}</p>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl font-bold text-blue-700">{product.price}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(product)}
                        className="rounded-full bg-blue-700 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-800 transition"
                      >
                        Comprar
                      </button>
                    </div>
                    <div className="space-y-2 text-sm text-slate-600">
                      {product.specs.map((spec, idx) => (
                        <p key={idx}>• {spec}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
          <Hero />
          <Services />
          <WhyChooseUs />

          {/* Sección de Proceso (Extra) */}
          <section id="proceso" className="py-24 border-t border-slate-100">
            <div className="container mx-auto px-6">
              <SectionTitle 
                title="Cómo Trabajamos" 
                subtitle="Metodología rigurosa para garantizar resultados de ingeniería de precisión."
              />
              <div className="grid md:grid-cols-4 gap-4 relative">
                {[
                  { n: "01", t: "Inspección", d: "Evaluación visual y técnica inicial en sitio o taller." },
                  { n: "02", t: "Diagnóstico", d: "Pruebas eléctricas y mecánicas computarizadas." },
                  { n: "03", t: "Intervención", d: "Reparación o repotenciación con materiales de alta gama." },
                  { n: "04", t: "Pruebas de Carga", d: "Certificación de funcionamiento antes de entrega final." }
                ].map((step, i) => (
                  <div key={i} className="text-center p-6">
                    <span className="text-5xl font-black text-blue-50/50 absolute -z-10 -translate-y-4 left-1/2 -translate-x-1/2">{step.n}</span>
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-6 relative z-10">{step.n}</div>
                    <h4 className="font-bold text-xl mb-3">{step.t}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- SECCIÓN DE PRODUCTOS --- */}
          <section id="productos" className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <SectionTitle
                title="Nuestros Productos"
                subtitle="Equipos y componentes industriales de la más alta calidad para todas tus necesidades técnicas"
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {catalogCategories.map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors group"
                  >
                    <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{category.name}</h3>
                    <p className="text-slate-600 mb-6">{category.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {category.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full" onClick={() => setCatalogCategory(category.name)}>
                      Ver Catálogo
                    </Button>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <Button className="px-12 py-4 text-lg" onClick={() => setCatalogCategory('all')}>
                  <BarChart3 className="w-6 h-6" />
                  Explorar Todos los Productos
                </Button>
              </div>
            </div>
          </section>

          <ContactForm />
        </>
      )}

      <Footer />

      <WhatsAppButton />
    </div>
  );
}
