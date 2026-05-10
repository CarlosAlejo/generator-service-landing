import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Plus, Minus, Search, Tag, Package, X, ChevronRight } from 'lucide-react';
import { useCart, type Product } from '../context/CartContext';
import SEO from '../components/SEO';

const controlModules: Product[] = [
  // COMAP
  { id: 'cm1', name: 'ComAp AMF8', category: 'Módulos de Control', brand:'COMAP', price: 380, description: 'Módulo de control Grupo Electrógeno ECU + ATS Intelilite 4', sku: 'COMAP-AMF8' },
  { id: 'cm2', name: 'ComAp AMF20', category: 'Módulos de Control', brand:'COMAP', price: 420, description: 'Módulo de control Grupo Electrógeno + ATS', sku: 'COMAP-AMF20' },
  { id: 'cm3', name: 'ComAp AMF25', category: 'Módulos de Control', brand:'COMAP',price: 480, description: 'Módulo de control Grupo Electrógeno ECU + ATS', sku: 'COMAP-AMF25' },
  { id: 'cm4', name: 'ComAp ATS2-70', category: 'Módulos de Control', brand:'COMAP', price: 350, description: 'Módulo de control ATS Full control', sku: 'COMAP-ATS2-70' },
  // DEEPSEA
  { id: 'ds1', name: 'DSE7420MKII', category: 'Módulos de Control', brand:'DEEPSEA', price: 580, description: 'Módulo de control Grupo Electrógeno ECU + ATS Intelilite 4', sku: 'DSE-7420' },
  { id: 'ds2', name: 'DSE7310MKII', category: 'Módulos de Control', brand:'DEEPSEA', price: 520, description: 'Módulo de control Generador DSE 7310 MKII', sku: 'DSE-7310' },
  { id: 'ds3', name: 'DSE6120', category: 'Módulos de Control', brand:'DEEPSEA', price: 410, description: 'Módulo de control Generador + ATS DSE6120', sku: 'DSE-6120' },
  { id: 'ds4', name: 'DSE4520', category: 'Módulos de Control', brand:'DEEPSEA', price: 320, description: 'Módulo de control DSE4520 Generador + ATS', sku: 'DSE-4520' },
  // MEBAY
  { id: 'mb1', name: 'Mebay DC42C', category: 'Módulos de Control', brand:'MEBAY', price: 290, description: 'Módulo de control para grupo electrógeno + Red', sku: 'MEB-DC42C' },
  { id: 'mb2', name: 'Mebay DC52D', category: 'Módulos de Control', brand:'MEBAY', price: 310, description: 'Módulo de control para grupo electrógeno + AMF MEBAY DC52D', sku: 'MEB-DC52D' },
  { id: 'mb3', name: 'Mebay DC72D', category: 'Módulos de Control', brand:'MEBAY', price: 360, description: 'Módulo de control para grupo electrógeno + AMF MEBAY DC72D', sku: 'MEB-DC72D' },
  { id: 'mb4', name: 'Mebay ATS420', category: 'Módulos de Control', brand:'MEBAY', price: 280, description: 'Modulo control MEBAY ATS420 para transferencia automática', sku: 'MEB-ATS420' },
];

const chargerProducts: Product[] = [
  { id: 'ch1', name: 'DSE 12V - 6A', category: 'Cargadores', brand:'DEEPSEA', price: 145, description: 'Mantenedor electrónico de batería 12 V - 6 Amp', sku: 'DSE-12V6A' },
  { id: 'ch2', name: 'DSE 24V - 10A', category: 'Cargadores', brand:'DEEPSEA', price: 195, description: 'Mantenedor electrónico de batería 24 V - 10 Amp', sku: 'DSE-24V10A' },
  { id: 'ch3', name: 'Mebay BCC3A-12V', category: 'Cargadores', brand:'MEBAY', price: 65, description: 'Mantenedor electrónico de bateria 12 V / 3 Amp', sku: 'MEB-BCC3A' },
  { id: 'ch4', name: 'Mebay BCC10A-12V', category: 'Cargadores', brand:'MEBAY', price: 115, description: 'Mantenedor electrónico de batería 12 V / 10 Amp', sku: 'MEB-BCC10A' },
  { id: 'ch5', name: 'Mebay BCC6A-12V', category: 'Cargadores', brand:'MEBAY', price: 85, description: 'Mantenedor electrónico de batería 12 V / 6 Amp', sku: 'MEB-BCC6A' },
  { id: 'ch6', name: 'Mebay BCC10A-24V', category: 'Cargadores', brand:'MEBAY', price: 130, description: 'Mantenedor electrónico de batería 24 V / 10 Amp', sku: 'MEB-BCC10A24' },
  { id: 'ch7', name: 'Mebay BCC6A-24V', category: 'Cargadores', brand:'MEBAY', price: 95, description: 'Mantenedor electrónico de batería 24 V / 6 Amp', sku: 'MEB-BCC6A24' },
];

const preheaterProducts: Product[] = [
  { id: 'ph1', name: 'CB120200-000', category: 'Precalentadores', price: 280, brand:'HotStart', description: 'Precalentador Block motor HotStart Horizontal 2000 W / 240 V', sku: 'HS-CB120' },
  { id: 'ph2', name: 'SB125208-200', category: 'Precalentadores', price: 310, brand:'HotStart', description: 'Precalentador Block motor HotStart Horizontal 2500 W / 240 V', sku: 'HS-SB125' },
  { id: 'ph3', name: 'CL130200-100', category: 'Precalentadores', price: 340, brand:'HotStart', description: 'Precalentador Block motor HotStart Horizontal 3000 W / 240 V', sku: 'HS-CL130' },
  { id: 'ph4', name: 'CL140200-100', category: 'Precalentadores', price: 390, brand:'HotStart', description: 'Precalentador Block motor HotStart Horizontal 4000 W / 240 v', sku: 'HS-CL140' },
  { id: 'ph5', name: 'PH1000-120V', category: 'Precalentadores', price: 180, brand:'HotStart', description: 'Precalentador HotStart 1000 W/120 V', sku: 'HS-PH1000' },
  { id: 'ph6', name: 'PH1500-120V', category: 'Precalentadores', price: 210, brand:'HotStart', description: 'Precalentador HotStart 1500 W/120 V', sku: 'HS-PH1500' },
  { id: 'ph7', name: 'PH1500-240V', category: 'Precalentadores', price: 215, brand:'HotStart', description: 'Precalentador HotStart 1500 W/240 V', sku: 'HS-PH1500-2' },
  { id: 'ph8', name: 'TPS202GT12-000', category: 'Precalentadores', price: 250, brand:'HotStart', description: 'Precalentador HotStart 2000 W/240 V', sku: 'HS-TPS202' },
  { id: 'ph9', name: 'PH500-120V', category: 'Precalentadores', price: 150, brand:'HotStart', description: 'Precalentador HotStart 500 W/120 V', sku: 'HS-PH500' },
];

const avrProducts: Product[] = [
  { id: 'avr1', name: 'Tarjeta Reguladora Leroy Somer', category: 'Reguladores de Voltaje', price: 180, brand:'Leroy Somer', description: 'Tarjeta reguladora de voltaje de alta precisión', sku: 'AVR-LS' },
  { id: 'avr2', name: 'Tarjeta Reguladora Stamford', category: 'Reguladores de Voltaje', price: 195, brand:'Stamford', description: 'Tarjeta reguladora de voltaje original', sku: 'AVR-STM' },
  { id: 'avr3', name: 'Tarjeta Reguladora Caterpillar', category: 'Reguladores de Voltaje', price: 240, brand:'Caterpillar', description: 'Tarjeta reguladora de voltaje para motores CAT', sku: 'AVR-CAT' },
  { id: 'avr4', name: 'Tarjeta Reguladora Mecc Alte', category: 'Reguladores de Voltaje', price: 175, brand:'Mecc Alte', description: 'Tarjeta reguladora de voltaje regulada', sku: 'AVR-MA' },
  { id: 'avr5', name: 'Tarjeta Reguladora Mebay', category: 'Reguladores de Voltaje', price: 110, brand:'MEBAY', description: 'Tarjeta reguladora de voltaje económica', sku: 'AVR-MEB' },
  { id: 'avr6', name: 'Tarjeta Reguladora Marelli', category: 'Reguladores de Voltaje', price: 165, brand:'Marelli', description: 'Tarjeta reguladora de voltaje Marelli', sku: 'AVR-MAR' },
];

const speedProducts: Product[] = [
  { id: 'sc1', name: 'Tarjeta de Velocidad Cummins', category: 'Tarjetas de Velocidad', price: 230, brand:'Cummins', description: 'Controlador de velocidad electrónico para motores Cummins', sku: 'SPD-CUM' },
  { id: 'sc2', name: 'Tarjeta de Velocidad GAC', category: 'Tarjetas de Velocidad', price: 250, brand:'GAC', description: 'Unidad de control de velocidad GAC original de alta precisión', sku: 'SPD-GAC' },
  { id: 'sc3', name: 'Tarjeta de Velocidad Woodward', category: 'Tarjetas de Velocidad', price: 280, brand:'Woodward', description: 'Módulo de control de velocidad Woodward para aplicaciones industriales', sku: 'SPD-WW' },
];

const oilPressureSensors: Product[] = [
  { id: 'ops1', name: 'Sensor de Presión de Aceite 0 - 10 Bar', category: 'Sensores de Presión', price: 45, brand:'Bar', description: 'Sensor de presión de aceite de alta precisión para monitoreo industrial.', sku: 'OPS-10B' },
  { id: 'ops2', name: 'Sensor de Presión de Aceite 5 V', category: 'Sensores de Presión', price: 50, brand:'Bar', description: 'Sensor de presión con salida de señal de 5V para módulos electrónicos.', sku: 'OPS-5V' },
  { id: 'ops3', name: 'Sensor de Presión de Aceite Multimarca', category: 'Sensores de Presión', price: 40, brand:'Multimarca', description: 'Sensor de presión universal compatible con diversas marcas de motores.', sku: 'OPS-UNI' },
];

const temperatureSensors: Product[] = [
  { id: 'ts1', name: 'Sensor de Temperatura 40°C – 120°C', category: 'Sensores de Temperatura', price: 35, brand:'Bar', description: 'Sensor de temperatura de alta sensibilidad para sistemas de refrigeración.', sku: 'TEMP-120C' },
  { id: 'ts2', name: 'Sensor de Temperatura Multimarca Estándar', category: 'Sensores de Temperatura', price: 38, brand:'Multimarca', description: 'Sensor universal de temperatura para motores diesel industriales.', sku: 'TEMP-UNI' },
];

const speedSensors: Product[] = [
  { id: 'ss1', name: 'Sensor de Velocidad Cummins', category: 'Sensores de Velocidad', price: 55, brand:'Cummins', description: 'Pickup magnético de alta precisión para motores Cummins.', sku: 'SS-CUM' },
  { id: 'ss2', name: 'Sensor de Velocidad Perkins', category: 'Sensores de Velocidad', price: 60, brand:'Perkins', description: 'Sensor de revoluciones especializado para aplicaciones Perkins.', sku: 'SS-PERK' },
  { id: 'ss3', name: 'Sensor de Velocidad Caterpillar', category: 'Sensores de Velocidad', price: 70, brand:'Caterpillar', description: 'Sensor magnético reforzado para condiciones extremas CAT.', sku: 'SS-CAT' },
  { id: 'ss4', name: 'Sensor de Velocidad John Deere', category: 'Sensores de Velocidad', price: 65, brand:'John Deere', description: 'Pickup magnético original para motores John Deere.', sku: 'SS-JD' },
];

const totalProducts: Product[] = [
  { id: 'total1', name: 'Aceite Total Rubia TIR 7400 15W40 - API CI4', category: 'Lubricantes', price: 160, brand:'Total', description: 'Aceite lubricante de alto rendimiento para motores diesel pesados.', sku: 'TOT-RUB-7400' },
  { id: 'total2', name: 'Aceite Total Rubia Optima 1100 15W40 - API CK4', category: 'Lubricantes', price: 185, brand:'Total', description: 'Lubricante premium de última generación con tecnología Low-SAPS.', sku: 'TOT-RUB-1100' },
  { id: 'total3', name: 'Refrigerante Total Coolelf Organic -26°C', category: 'Refrigerantes', price: 45, brand:'Total', description: 'Líquido refrigerante orgánico de larga duración, protección hasta -26°C.', sku: 'TOT-COOL-26' },
  { id: 'total4', name: 'Refrigerante Total Coolelf Auto Supra -37°C', category: 'Refrigerantes', price: 55, brand:'Total', description: 'Refrigerante de alta gama con tecnología orgánica OAT, protección hasta -37°C.', sku: 'TOT-COOL-37' },
];

const allProducts = [
  ...controlModules,
  ...chargerProducts,
  ...preheaterProducts,
  ...avrProducts,
  ...speedProducts,
  ...oilPressureSensors,
  ...temperatureSensors,
  ...speedSensors,
  ...totalProducts
];

export default function Products() {
  const { addToCart, cart, updateQuantity } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [modalBrandFilter, setModalBrandFilter] = useState<string | null>(null);

  const handleOpenModal = (modalId: string) => {
    setActiveModal(modalId);
    setModalBrandFilter(null);
  };

  const filteredResults = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const isSearching = searchTerm.trim().length > 0;

  const getModalContent = () => {
    switch (activeModal) {
      case 'modules':
        return {
          title: 'Módulos de Control',
          description: 'Control preciso y monitoreo inteligente.',
          products: controlModules,
          brands: ['COMAP', 'DEEPSEA', 'MEBAY'],
          message: 'Control total y automático de tu generador con máxima seguridad y eficiencia.'
        };
      case 'chargers':
        return {
          title: 'Cargadores de Batería',
          description: 'Mantenedores electrónicos para vida útil prolongada.',
          products: chargerProducts,
          brands: ['DEEPSEA', 'MEBAY'],
          message: 'Energía siempre lista para un arranque inmediato y confiable.'
        };
      case 'preheaters':
        return {
          title: 'Precalentadores de Motor',
          description: 'Sistemas HotStart para arranque confiable en frío.',
          products: preheaterProducts,
          brands: ['HOTSTART'],
          message: 'Arranques rápidos incluso en frío, cuidando la vida del motor.'
        };
      case 'avr':
        return {
          title: 'TARJETAS REGULADORAS DE VOLTAJE',
          description: 'Regulación de voltaje para alternadores industriales.',
          products: avrProducts,
          brands: ['LEROY SOMER', 'STAMFORD', 'CATERPILLAR', 'MECC ALTE', 'MEBAY', 'MARELLI'],
          message: 'Voltaje estable para proteger tus equipos y asegurar continuidad.'
        };
      case 'speed':
        return {
          title: 'TARJETAS DE VELOCIDAD',
          description: 'Reguladores electrónicos de RPM con alta precisión.',
          products: speedProducts,
          brands: ['CUMMINS', 'GAC', 'WOODWARD'],
          message: 'Precisión en la velocidad para un rendimiento óptimo del generador.'
        };
      case 'sensors':
        return {
          title: 'SENSORES DE PRESIÓN DE ACEITE',
          description: 'Monitoreo crítico para la protección del motor.',
          products: oilPressureSensors,
          brands: ['MULTIMARCA'],
          message: 'Protección inteligente para evitar daños en el motor.'
        };
      case 'temperature':
        return {
          title: 'SENSORES DE TEMPERATURA',
          description: 'Monitoreo de temperatura crítica (40°C – 120°C).',
          products: temperatureSensors,
          brands: ['MULTIMARCA'],
          message: 'Control térmico eficiente que previene sobrecalentamientos.'
        };
      case 'speed-sensors':
        return {
          title: 'SENSORES DE VELOCIDAD',
          description: 'Pickups magnéticos para control preciso de RPM.',
          products: speedSensors,
          brands: ['CUMMINS', 'PERKINS', 'CATERPILLAR', 'JOHN DEERE'],
          message: 'Medición exacta para un control seguro y sincronizado.'
        };
      case 'total':
        return {
          title: 'PRODUCTOS TOTAL',
          description: 'Lubricantes y refrigerantes de alta especificación.',
          products: totalProducts,
          brands: ['TOTAL'],
          message: 'Máximo cuidado y rendimiento para prolongar la vida de tu equipo.'
        };
      default:
        return null;
    }
  };

  const modalData = getModalContent();

  return (
    <div className="pt-20 min-h-screen bg-slate-50 font-sans">
      <SEO 
        title="Catálogo de Repuestos y Componentes Industriales"
        description="Amplio catálogo de módulos de control, cargadores de batería, precalentadores HotStart y repuestos originales para grupos electrógenos y motores industriales."
        canonical="/productos"
      />
      <section className="py-12 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black font-display mb-4 tracking-tight"
          >
            Catálogo Industrial
          </motion.h1>
          <p className="text-slate-100 text-xl max-w-2xl font-medium">
            Equipamiento de potencia y componentes críticos para infraestructuras de alto rendimiento.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-brand-primary transition-colors" size={24} />
            <input 
              type="text" 
              placeholder="Buscar por nombre, SKU o marca..." 
              className="w-full pl-16 pr-6 py-5 rounded-2xl bg-slate-100 border-none focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all text-slate-900 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {!isSearching ? (
        <>
          {/* Featured Grid Categories */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Control Modules Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[520px]"
                  onClick={() => handleOpenModal('modules')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/modulosDeControl.png?auto=format,compress&fit=crop&q=60&w=1000" 
                    alt="Módulos de Control" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-slate-100 font-black uppercase tracking-[0.4em] text-xs mb-3 block">Sistemas de Gestión</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase">Módulos de Control</h2>
                    <div className="flex items-center gap-3 text-slate-100 font-bold">
                       Explorar marcas líderes <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Battery Chargers Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[520px]"
                  onClick={() => handleOpenModal('chargers')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/Cargadoresdebateria1.png?auto=format,compress&fit=crop&q=60&w=1000" 
                    alt="Cargadores de Batería" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-slate-100 font-black uppercase tracking-[0.4em] text-xs mb-3 block">Mantenimiento de Energía</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase">Cargadores de Batería</h2>
                    <div className="flex items-center gap-3 text-slate-100 font-bold">
                       Ver modelos especializados <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Preheaters Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[520px]"
                  onClick={() => handleOpenModal('preheaters')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/Precalentadores1.png?auto=format,compress&fit=crop&q=60&w=1000" 
                    alt="Precalentadores" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-slate-100 font-black uppercase tracking-[0.4em] text-xs mb-3 block">HotStart Systems</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase">Precalentadores de Block</h2>
                    <div className="flex items-center gap-3 text-slate-100 font-bold">
                       Consultar catálogo HotStart <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* AVR Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary group cursor-pointer h-[520px] flex flex-col justify-end p-8"
                  onClick={() => handleOpenModal('avr')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/Tarjetas-AVR1.png??auto=format,compress&fit=crop&q=75&w=600" 
                    alt="AVR" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="relative z-20">
                    <h3 className="text-2xl font-black font-display text-white mb-2 uppercase">TARJETAS REGULADORAS DE VOLTAJE</h3>
                    <p className="text-slate-100 text-sm font-bold tracking-widest uppercase">Voltaje Control</p>
                  </div>
                </motion.div>

                {/* Speed Controllers Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[2.5rem] bg-slate-800 group cursor-pointer h-[520px] flex flex-col justify-end p-8"
                  onClick={() => handleOpenModal('speed')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/velocidad1.png?auto=format,compress&fit=crop&q=75&w=600" 
                    alt="Speed Control" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="relative z-20">
                    <h3 className="text-2xl font-black font-display text-white mb-2 uppercase">TARJETAS DE VELOCIDAD</h3>
                    <p className="text-slate-100 text-sm font-bold tracking-widest uppercase">RPM Control</p>
                  </div>
                </motion.div>

                {/* Oil Pressure Sensors Banner (Full width or new row) */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[520px]"
                  onClick={() => handleOpenModal('sensors')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/Sensores1.png?auto=format,compress&fit=crop&q=60&w=1200" 
                    alt="Sensores de Presión" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-slate-100 font-black uppercase tracking-[0.4em] text-xs mb-3 block">Monitoreo de Precisión</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase leading-tight">Sensores de Presión de Aceite</h2>
                    <p className="text-white/90 font-medium mb-6">Protección activa y monitoreo en tiempo real para motores de alta potencia.</p>
                    <div className="flex items-center gap-3 text-slate-100 font-bold">
                       Explorar opciones multimarca <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Temperature Sensors Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[2.5rem] bg-brand-secondary group cursor-pointer flex h-[520px] flex-col justify-end p-8"
                  onClick={() => handleOpenModal('temperature')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent opacity-80" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/sensortemp.jpeg?auto=format,compress&fit=crop&q=75&w=600" 
                    alt="Sensores Temperatura" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="relative z-20">
                    <h3 className="text-2xl font-black font-display text-white mb-2 uppercase text-center md:text-left">SENSORES DE TEMPERATURA</h3>
                    <p className="text-slate-900 text-sm font-bold tracking-widest uppercase text-center md:text-left">40°C – 120°C</p>
                  </div>
                </motion.div>

                {/* Speed Sensors Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[2.5rem] bg-indigo-900 group cursor-pointer flex h-[520px] flex-col justify-end p-8"
                  onClick={() => handleOpenModal('speed-sensors')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent opacity-80" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/sensorvelo.jpeg?auto=format,compress&fit=crop&q=75&w=600" 
                    alt="Sensores Velocidad" 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="relative z-20">
                    <h3 className="text-2xl font-black font-display text-white mb-2 uppercase">SENSORES DE VELOCIDAD</h3>
                    <p className="text-slate-100 text-sm font-bold tracking-widest uppercase">Pickups Magnéticos</p>
                  </div>
                </motion.div>

                {/* Total Products Banner (Full width) */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  className="relative overflow-hidden rounded-[3rem] bg-brand-primary group cursor-pointer h-[520px]"
                  onClick={() => handleOpenModal('total')}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 via-brand-primary/40 to-transparent z-10" />
                  <img 
                    src="https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/TOTAL1.png?auto=format,compress&fit=crop&q=60&w=1200" 
                    alt="Aceites TOTAL" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-slate-100 font-black uppercase tracking-[0.4em] text-xs mb-3 block">Mantenimiento de Motor</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase leading-tight">TOTAL Lubricantes y Refrigerantes</h2>
                    <p className="text-white/80 font-medium mb-6 italic">Gama Rubia TIR, Optima y Coolelf para máxima protección térmica y mecánica.</p>
                    <div className="flex items-center gap-3 text-slate-100 font-bold">
                       Ver especificaciones técnicas <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Search Results View */
        <section className="py-20 bg-slate-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
               <div>
                  <h2 className="text-3xl font-black text-slate-900 font-display mb-2 uppercase tracking-tight">Resultados de búsqueda</h2>
                  <p className="text-slate-500 font-medium tracking-wide">Se encontraron {filteredResults.length} productos para "{searchTerm}"</p>
               </div>
               <button 
                onClick={() => setSearchTerm('')}
                className="text-brand-primary font-bold hover:underline mb-auto"
               >
                 Limpiar búsqueda
               </button>
            </div>

            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 auto-rows-fr">
                {filteredResults.map((product) => {
                  const cartItem = cart.find((item) => item.id === product.id);
                  
                  return (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all h-full flex flex-col group min-h-[360px]"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div className="bg-slate-50 p-5 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                           <Package size={28} />
                        </div>
                        <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                          {product.sku}
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-black text-brand-primary uppercase tracking-[0.3em] mb-2 block">
                          {product.category}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mt-2 mb-4 font-display leading-tight tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-brand-primary font-black uppercase tracking-widest block bg-brand-primary/10 px-3 py-1 rounded-lg border border-brand-primary/20">Original</span>
                          <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest block mt-2">Garantizado</span>
                        </div>

                        {cartItem ? (
                          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-inner">
                            <button 
                              type="button"
                              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-brand-primary"
                              aria-label={`Reducir cantidad de ${product.name}`}
                            >
                              <Minus size={20} />
                            </button>
                            <span className="font-black text-slate-900 w-8 text-center text-lg">{cartItem.quantity}</span>
                            <button 
                              type="button"
                              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-brand-primary"
                              aria-label={`Aumentar cantidad de ${product.name}`}
                            >
                              <Plus size={20} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            type="button"
                            onClick={() => addToCart(product)}
                            className="bg-slate-900 text-white w-16 h-16 rounded-2xl hover:bg-brand-primary transition-all flex items-center justify-center group/btn"
                            aria-label={`Agregar ${product.name} al carrito`}
                          >
                            <ShoppingCart size={24} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-32 bg-white rounded-[3rem] border border-slate-100">
                <Search size={64} className="mx-auto text-slate-200 mb-8" />
                <h3 className="text-3xl font-black text-slate-900 mb-4 font-display uppercase">Sin resultados</h3>
                <p className="text-slate-500 max-w-md mx-auto font-medium">No encontramos productos que coincidan con tu búsqueda. Intenta con términos más generales como "DeepSea", "Precalentador" o "Cargador".</p>
              </div>
            )}
          </div>
        </section>
      )}


      {/* Multi-Purpose Category Modal */}
      <AnimatePresence>
        {activeModal && modalData && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.4)] relative z-10 flex flex-col overflow-hidden"
            >
              <div className="p-10 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-900 text-white">
                <div className="flex items-center gap-6">
                  <div className="bg-brand-secondary p-4 rounded-2xl text-slate-900 rotate-3">
                    <Tag size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black font-display tracking-tight text-white uppercase">{modalData.title}</h3>
                    <p className="text-xs text-slate-300 font-bold uppercase tracking-[0.3em] mt-1">{modalData.description}</p>
                  </div>
                </div>
                <button 
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all group"
                  aria-label={`Cerrar modal de ${modalData.title}`}
                >
                  <X size={28} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-12 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                  {/* Left: Brand Filter or Summary */}
                  <div className="lg:col-span-1 space-y-10">
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] block border-b border-slate-100 pb-3">Marcas Partner</h4>
                       <div className="flex flex-wrap gap-2">
                         <button 
                           onClick={() => setModalBrandFilter(null)}
                           className={`px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${
                             modalBrandFilter === null 
                               ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20' 
                               : 'bg-slate-50 text-slate-600 border-slate-100 hover:border-brand-primary/30'
                           }`}
                         >
                           Todas
                         </button>
                         {modalData.brands.map(b => (
                           <button 
                             key={b} 
                             onClick={() => setModalBrandFilter(b)}
                             className={`px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest border transition-all ${
                               modalBrandFilter === b 
                                 ? 'bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20' 
                                 : 'bg-slate-50 text-slate-600 border-slate-100 hover:border-brand-primary/30'
                             }`}
                           >
                             {b}
                           </button>
                         ))}
                       </div>
                    </div>
                    <div className="bg-brand-primary/5 p-6 rounded-[2rem] border border-brand-primary/10">
                       <p className="text-sm font-bold text-slate-700 leading-relaxed italic">{modalData.message}</p>
                    </div>
                  </div>

                  {/* Right: Product Grid */}
                  <div className="lg:col-span-3 space-y-10">
                     <div className="grid sm:grid-cols-2 gap-6">
                        {modalData.products
                          .filter(item => !modalBrandFilter || item.brand.toLowerCase().includes(modalBrandFilter.toLowerCase()))
                          .map(item => {
                          const cartItem = cart.find(ci => ci.id === item.id);
                          const brand = item.brand || modalData.brands[0];
                          
                          return (
                            <div key={item.id} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all border-l-[6px] border-l-brand-primary group">
                              <div>
                                <div className="flex justify-between items-start mb-4">
                                  <span className="text-[9px] font-black text-brand-primary uppercase tracking-[0.2em]">{brand}</span>
                                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest bg-brand-primary/10 px-2 py-1 rounded">Stock Disponible</span>
                                </div>
                                <h5 className="font-black text-slate-900 text-xl leading-tight mb-3 font-display uppercase tracking-tight">{item.name}</h5>
                                <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium ">{item.description}</p>
                              </div>
                              
                              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/50">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">{item.sku}</span>
                                {cartItem ? (
                                  <div className="flex items-center gap-4 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
                                    <button type="button" onClick={() => updateQuantity(item.id, cartItem.quantity - 1)} className="text-brand-primary hover:text-red-500 transition-colors" aria-label={`Reducir cantidad de ${item.name}`}><Minus size={16} /></button>
                                    <span className="font-black text-sm min-w-[24px] text-center text-slate-900">{cartItem.quantity}</span>
                                    <button type="button" onClick={() => updateQuantity(item.id, cartItem.quantity + 1)} className="text-brand-primary hover:text-emerald-500 transition-colors" aria-label={`Aumentar cantidad de ${item.name}`}><Plus size={16} /></button>
                                  </div>
                                ) : (
                                  <button 
                                    type="button"
                                    onClick={() => addToCart(item)}
                                    className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-primary transition-all flex items-center gap-3 shadow-lg active:scale-95"
                                    aria-label={`Agregar ${item.name} al carrito`}
                                  >
                                    <ShoppingCart size={16} /> Comprar
                                  </button>
                                )}
                              </div>
                            </div>
                          );
                        })}
                     </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </div>
  );
}

