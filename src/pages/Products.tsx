import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Plus, Minus, Search, Tag, Package, X, ChevronRight, LayoutGrid } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';

const controlModules: Product[] = [
  // COMAP
  { id: 'cm1', name: 'ComAp AMF8', category: 'Módulos de Control', price: 380, description: 'Módulo de control Grupo Electrógeno ECU + ATS Intelilite 4', sku: 'COMAP-AMF8' },
  { id: 'cm2', name: 'ComAp AMF20', category: 'Módulos de Control', price: 420, description: 'Módulo de control Grupo Electrógeno + ATS', sku: 'COMAP-AMF20' },
  { id: 'cm3', name: 'ComAp AMF25', category: 'Módulos de Control', price: 480, description: 'Módulo de control Grupo Electrógeno ECU + ATS', sku: 'COMAP-AMF25' },
  { id: 'cm4', name: 'ComAp ATS2-70', category: 'Módulos de Control', price: 350, description: 'Módulo de control ATS Full control', sku: 'COMAP-ATS2-70' },
  // DEEPSEA
  { id: 'ds1', name: 'DSE7420MKII', category: 'Módulos de Control', price: 580, description: 'Módulo de control Grupo Electrógeno ECU + ATS Intelilite 4', sku: 'DSE-7420' },
  { id: 'ds2', name: 'DSE7310MKII', category: 'Módulos de Control', price: 520, description: 'Módulo de control Generador DSE 7310 MKII', sku: 'DSE-7310' },
  { id: 'ds3', name: 'DSE6120', category: 'Módulos de Control', price: 410, description: 'Módulo de control Generador + ATS DSE6120', sku: 'DSE-6120' },
  { id: 'ds4', name: 'DSE4520', category: 'Módulos de Control', price: 320, description: 'Módulo de control DSE4520 Generador + ATS', sku: 'DSE-4520' },
  // MEBAY
  { id: 'mb1', name: 'Mebay DC42C', category: 'Módulos de Control', price: 290, description: 'Módulo de control para grupo electrógeno + Red', sku: 'MEB-DC42C' },
  { id: 'mb2', name: 'Mebay DC52D', category: 'Módulos de Control', price: 310, description: 'Módulo de control para grupo electrógeno + AMF MEBAY DC52D', sku: 'MEB-DC52D' },
  { id: 'mb3', name: 'Mebay DC72D', category: 'Módulos de Control', price: 360, description: 'Módulo de control para grupo electrógeno + AMF MEBAY DC72D', sku: 'MEB-DC72D' },
  { id: 'mb4', name: 'Mebay ATS420', category: 'Módulos de Control', price: 280, description: 'Modulo control MEBAY ATS420 para transferencia automática', sku: 'MEB-ATS420' },
];

const chargerProducts: Product[] = [
  { id: 'ch1', name: 'DSE 12V - 6A', category: 'Cargadores', price: 145, description: 'Mantenedor electrónico de batería 12 V - 6 Amp', sku: 'DSE-12V6A' },
  { id: 'ch2', name: 'DSE 24V - 10A', category: 'Cargadores', price: 195, description: 'Mantenedor electrónico de batería 24 V - 10 Amp', sku: 'DSE-24V10A' },
  { id: 'ch3', name: 'Mebay BCC3A-12V', category: 'Cargadores', price: 65, description: 'Mantenedor electrónico de bateria 12 V / 3 Amp', sku: 'MEB-BCC3A' },
  { id: 'ch4', name: 'Mebay BCC10A-12V', category: 'Cargadores', price: 115, description: 'Mantenedor electrónico de batería 12 V / 10 Amp', sku: 'MEB-BCC10A' },
  { id: 'ch5', name: 'Mebay BCC6A-12V', category: 'Cargadores', price: 85, description: 'Mantenedor electrónico de batería 12 V / 6 Amp', sku: 'MEB-BCC6A' },
  { id: 'ch6', name: 'Mebay BCC10A-24V', category: 'Cargadores', price: 130, description: 'Mantenedor electrónico de batería 24 V / 10 Amp', sku: 'MEB-BCC10A24' },
  { id: 'ch7', name: 'Mebay BCC6A-24V', category: 'Cargadores', price: 95, description: 'Mantenedor electrónico de batería 24 V / 6 Amp', sku: 'MEB-BCC6A24' },
];

const preheaterProducts: Product[] = [
  { id: 'ph1', name: 'CB120200-000', category: 'Precalentadores', price: 280, description: 'Precalentador Block motor HotStart Horizontal 2000 W / 240 V', sku: 'HS-CB120' },
  { id: 'ph2', name: 'SB125208-200', category: 'Precalentadores', price: 310, description: 'Precalentador Block motor HotStart Horizontal 2500 W / 240 V', sku: 'HS-SB125' },
  { id: 'ph3', name: 'CL130200-100', category: 'Precalentadores', price: 340, description: 'Precalentador Block motor HotStart Horizontal 3000 W / 240 V', sku: 'HS-CL130' },
  { id: 'ph4', name: 'CL140200-100', category: 'Precalentadores', price: 390, description: 'Precalentador Block motor HotStart Horizontal 4000 W / 240 v', sku: 'HS-CL140' },
  { id: 'ph5', name: 'PH1000-120V', category: 'Precalentadores', price: 180, description: 'Precalentador HotStart 1000 W/120 V', sku: 'HS-PH1000' },
  { id: 'ph6', name: 'PH1500-120V', category: 'Precalentadores', price: 210, description: 'Precalentador HotStart 1500 W/120 V', sku: 'HS-PH1500' },
  { id: 'ph7', name: 'PH1500-240V', category: 'Precalentadores', price: 215, description: 'Precalentador HotStart 1500 W/240 V', sku: 'HS-PH1500-2' },
  { id: 'ph8', name: 'TPS202GT12-000', category: 'Precalentadores', price: 250, description: 'Precalentador HotStart 2000 W/240 V', sku: 'HS-TPS202' },
  { id: 'ph9', name: 'PH500-120V', category: 'Precalentadores', price: 150, description: 'Precalentador HotStart 500 W/120 V', sku: 'HS-PH500' },
];

const avrProducts: Product[] = [
  { id: 'avr1', name: 'AVR Leroy Somer', category: 'AVR', price: 180, description: 'Tarjeta reguladora de voltaje de alta precisión', sku: 'AVR-LS' },
  { id: 'avr2', name: 'AVR Stamford', category: 'AVR', price: 195, description: 'Tarjeta reguladora de voltaje original', sku: 'AVR-STM' },
  { id: 'avr3', name: 'AVR Caterpillar', category: 'AVR', price: 240, description: 'Tarjeta reguladora de voltaje para motores CAT', sku: 'AVR-CAT' },
  { id: 'avr4', name: 'AVR Mecc Alte', category: 'AVR', price: 175, description: 'Tarjeta reguladora de voltaje regulada', sku: 'AVR-MA' },
  { id: 'avr5', name: 'AVR Mebay', category: 'AVR', price: 110, description: 'Tarjeta reguladora de voltaje económica', sku: 'AVR-MEB' },
  { id: 'avr6', name: 'AVR Marelli', category: 'AVR', price: 165, description: 'Tarjeta reguladora de voltaje Marelli', sku: 'AVR-MAR' },
];

const speedProducts: Product[] = [
  { id: 'sc1', name: 'Regulador Leroy Somer', category: 'Velocidad', price: 220, description: 'Tarjeta reguladora de velocidad electrónica', sku: 'SPD-LS' },
  { id: 'sc2', name: 'Regulador Stamford', category: 'Velocidad', price: 210, description: 'Tarjeta de control de velocidad para alternador', sku: 'SPD-STM' },
  { id: 'sc3', name: 'Regulador Caterpillar', category: 'Velocidad', price: 310, description: 'Módulo de control de velocidad CAT', sku: 'SPD-CAT' },
  { id: 'sc4', name: 'Regulador Mecc Alte', category: 'Velocidad', price: 190, description: 'Tarjeta de velocidad Mecc Alte', sku: 'SPD-MA' },
  { id: 'sc5', name: 'Regulador Mebay', category: 'Velocidad', price: 140, description: 'Gobernador de velocidad electrónico Mebay', sku: 'SPD-MEB' },
  { id: 'sc6', name: 'Regulador Marelli', category: 'Velocidad', price: 185, description: 'Control de velocidad Marelli', sku: 'SPD-MAR' },
];

const generalProducts: Product[] = [
  {
    id: '1',
    name: 'Generador Diésel Cummins 50kVA',
    category: 'Generadores',
    price: 15400,
    description: 'Generador de alta eficiencia para uso industrial continuo.',
    sku: 'GEN-CUM-50',
  },
  {
    id: '2',
    name: 'Filtro de Aire Fleetguard AF25139',
    category: 'Repuestos',
    price: 85,
    description: 'Filtro de aire de alta capacidad para motores Cummins.',
    sku: 'FLT-AF25139',
  },
  {
    id: '3',
    name: 'Alternador Leroy Somer TAL-042-F',
    category: 'Alternadores',
    price: 2100,
    description: 'Alternador trifásico para grupos electrógenos.',
    sku: 'ALT-LS-042',
  },
  {
    id: '5',
    name: 'Bomba de Agua Perkins U5MW0194',
    category: 'Repuestos',
    price: 120,
    description: 'Bomba de agua original para motores serie 1100.',
    sku: 'WP-PERK-U5',
  },
  {
    id: '6',
    name: 'Aceite Motor Total 15W40 Ruby (20L)',
    category: 'Lubricantes',
    price: 180,
    description: 'Lubricante premium para motores diésel pesados.',
    sku: 'LUB-TOT-15W40',
  },
];

const allProducts = [
  ...controlModules,
  ...chargerProducts,
  ...preheaterProducts,
  ...avrProducts,
  ...speedProducts,
  ...generalProducts,
];

export default function Products() {
  const { addToCart, cart, updateQuantity } = useCart();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
          brands: ['COMAP', 'DEEPSEA', 'MEBAY']
        };
      case 'chargers':
        return {
          title: 'Cargadores de Batería',
          description: 'Mantenedores electrónicos para vida útil prolongada.',
          products: chargerProducts,
          brands: ['DEEPSEA', 'MEBAY']
        };
      case 'preheaters':
        return {
          title: 'Precalentadores de Motor',
          description: 'Sistemas HotStart para arranque confiable en frío.',
          products: preheaterProducts,
          brands: ['HOTSTART']
        };
      case 'avr':
        return {
          title: 'Tarjetas AVR',
          description: 'Regulación de voltaje para alternadores industriales.',
          products: avrProducts,
          brands: ['LEROY SOMER', 'STAMFORD', 'CATERPILLAR', 'MECC ALTE', 'MEBAY', 'MARELLI']
        };
      case 'speed':
        return {
          title: 'Control de Velocidad',
          description: 'Reguladores electrónicos de RPM con alta precisión.',
          products: speedProducts,
          brands: ['LEROY SOMER', 'STAMFORD', 'CATERPILLAR', 'MECC ALTE', 'MEBAY', 'MARELLI']
        };
      default:
        return null;
    }
  };

  const modalData = getModalContent();

  return (
    <div className="pt-20 min-h-screen bg-slate-50 font-sans">
      <section className="py-12 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black font-display mb-4 tracking-tight"
          >
            Catálogo Industrial
          </motion.h1>
          <p className="text-brand-secondary/90 text-xl max-w-2xl font-medium">
            Equipamiento de potencia y componentes críticos para infraestructuras de alto rendimiento.
          </p>
        </div>
      </section>

      <section className="py-12 border-b border-slate-200 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-brand-primary transition-colors" size={24} />
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
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[500px]"
                  onClick={() => setActiveModal('modules')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1581092334651-ddf26d9a1930?auto=format&fit=crop&q=80&w=2000" 
                    alt="Módulos de Control" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-brand-secondary font-black uppercase tracking-[0.4em] text-xs mb-3 block">Sistemas de Gestión</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase">Módulos de Control</h2>
                    <div className="flex items-center gap-3 text-brand-secondary font-bold">
                       Explorar marcas líderes <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Battery Chargers Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[500px]"
                  onClick={() => setActiveModal('chargers')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1590674899484-14264b2303fc?auto=format&fit=crop&q=80&w=2000" 
                    alt="Cargadores de Batería" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-brand-secondary font-black uppercase tracking-[0.4em] text-xs mb-3 block">Mantenimiento de Energía</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase">Cargadores de Batería</h2>
                    <div className="flex items-center gap-3 text-brand-secondary font-bold">
                       Ver modelos especializados <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* Preheaters Banner */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-[3rem] bg-slate-900 group cursor-pointer h-[500px]"
                  onClick={() => setActiveModal('preheaters')}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1517420704952-d9f39e95b4a7?auto=format&fit=crop&q=80&w=2000" 
                    alt="Precalentadores" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-x-0 bottom-0 z-20 p-12 text-white">
                    <span className="text-brand-secondary font-black uppercase tracking-[0.4em] text-xs mb-3 block">HotStart Systems</span>
                    <h2 className="text-4xl font-black font-display mb-4 tracking-tight uppercase">Precalentadores de Block</h2>
                    <div className="flex items-center gap-3 text-brand-secondary font-bold">
                       Consultar catálogo HotStart <ChevronRight size={24} />
                    </div>
                  </div>
                </motion.div>

                {/* AVR + Speed Controllers Grid (Stacked) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-[500px]">
                   <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-brand-primary group cursor-pointer flex flex-col justify-end p-8"
                    onClick={() => setActiveModal('avr')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-80" />
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                      alt="AVR" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="relative z-20">
                      <h3 className="text-2xl font-black font-display text-white mb-2 uppercase">Tarjetas AVR</h3>
                      <p className="text-brand-secondary text-sm font-bold tracking-widest uppercase">Voltaje Control</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="relative overflow-hidden rounded-[2.5rem] bg-slate-800 group cursor-pointer flex flex-col justify-end p-8"
                    onClick={() => setActiveModal('speed')}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <img 
                      src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" 
                      alt="Speed Control" 
                      className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="relative z-20">
                      <h3 className="text-2xl font-black font-display text-white mb-2 uppercase">Tarjetas de Velocidad</h3>
                      <p className="text-brand-secondary text-sm font-bold tracking-widest uppercase">RPM Control</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Other Products Section */}
          <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center mb-16 space-y-4">
                 <div className="bg-brand-primary/10 p-4 rounded-3xl text-brand-primary">
                    <LayoutGrid size={32} />
                 </div>
                 <h2 className="text-4xl font-black text-slate-900 font-display tracking-tight uppercase">Otros Repuestos y Equipos</h2>
                 <div className="h-1 w-24 bg-brand-primary rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {generalProducts.map((product) => {
                  const cartItem = cart.find((item) => item.id === product.id);
                  
                  return (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -10 }}
                      className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all h-full flex flex-col group"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div className="bg-slate-50 p-5 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500 shadow-inner">
                           <Package size={28} />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
                          {product.sku}
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-black text-brand-primary uppercase tracking-[0.3em] opacity-80 mb-2 block">
                          {product.category}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 mt-2 mb-4 font-display leading-tight tracking-tight">
                          {product.name}
                        </h3>
                        <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Precio sugerido</span>
                          <span className="text-3xl font-black text-slate-900 font-display">
                            ${product.price.toLocaleString()}
                          </span>
                        </div>

                        {cartItem ? (
                          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-inner">
                            <button 
                              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl hover:bg-red-50 hover:text-red-500 transition-all text-brand-primary shadow-sm active:scale-95"
                            >
                              <Minus size={20} />
                            </button>
                            <span className="font-black text-slate-900 w-8 text-center text-lg">{cartItem.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl hover:bg-emerald-50 hover:text-emerald-500 transition-all text-brand-primary shadow-sm active:scale-95"
                            >
                              <Plus size={20} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product)}
                            className="bg-slate-900 text-white w-16 h-16 rounded-2xl hover:bg-brand-primary transition-all shadow-xl hover:shadow-brand-primary/30 flex items-center justify-center group/btn active:scale-95"
                          >
                            <ShoppingCart size={24} className="group-hover/btn:scale-110 transition-transform" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredResults.map((product) => {
                  const cartItem = cart.find((item) => item.id === product.id);
                  
                  return (
                    <motion.div 
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all h-full flex flex-col group"
                    >
                      <div className="flex items-start justify-between mb-8">
                        <div className="bg-slate-50 p-5 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                           <Package size={28} />
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 shadow-sm">
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
                          <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Precio sugerido</span>
                          <span className="text-3xl font-black text-slate-900 font-display">
                            ${product.price.toLocaleString()}
                          </span>
                        </div>

                        {cartItem ? (
                          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100 shadow-inner">
                            <button 
                              onClick={() => updateQuantity(product.id, cartItem.quantity - 1)}
                              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-brand-primary"
                            >
                              <Minus size={20} />
                            </button>
                            <span className="font-black text-slate-900 w-8 text-center text-lg">{cartItem.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                              className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-brand-primary"
                            >
                              <Plus size={20} />
                            </button>
                          </div>
                        ) : (
                          <button 
                            onClick={() => addToCart(product)}
                            className="bg-slate-900 text-white w-16 h-16 rounded-2xl hover:bg-brand-primary transition-all flex items-center justify-center group/btn"
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
                    <h3 className="text-3xl font-black font-display tracking-tight text-brand-secondary uppercase">{modalData.title}</h3>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-[0.3em] mt-1">{modalData.description}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-14 h-14 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all group"
                >
                  <X size={28} className="group-hover:rotate-90 transition-transform" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-12 custom-scrollbar">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                  {/* Left: Brand Filter or Summary */}
                  <div className="lg:col-span-1 space-y-10">
                    <div className="space-y-6">
                       <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block border-b border-slate-100 pb-3">Marcas Partner</h4>
                       <div className="flex flex-wrap gap-2">
                         {modalData.brands.map(b => (
                           <span key={b} className="px-3 py-2 bg-slate-50 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest border border-slate-100">{b}</span>
                         ))}
                       </div>
                    </div>
                    <div className="bg-brand-primary/5 p-6 rounded-[2rem] border border-brand-primary/10">
                       <p className="text-sm font-bold text-slate-700 leading-relaxed italic">"Garantizamos repuestos 100% originales con garantía de fábrica para asegurar la continuidad de su operación."</p>
                    </div>
                  </div>

                  {/* Right: Product Grid */}
                  <div className="lg:col-span-3 space-y-10">
                     <div className="grid sm:grid-cols-2 gap-6">
                        {modalData.products.map(item => {
                          const cartItem = cart.find(ci => ci.id === item.id);
                          const brand = modalData.brands.find(b => item.sku.toLowerCase().includes(b.toLowerCase())) || modalData.brands[0];
                          
                          return (
                            <div key={item.id} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all border-l-[6px] border-l-brand-primary group">
                              <div>
                                <div className="flex justify-between items-start mb-4">
                                  <span className="text-[9px] font-black text-brand-primary/60 uppercase tracking-[0.2em]">{brand}</span>
                                  <span className="text-xl font-black text-slate-900 group-hover:text-brand-primary transition-colors">${item.price.toLocaleString()}</span>
                                </div>
                                <h5 className="font-black text-slate-900 text-xl leading-tight mb-3 font-display uppercase tracking-tight">{item.name}</h5>
                                <p className="text-slate-500 text-xs mb-8 leading-relaxed font-medium ">{item.description}</p>
                              </div>
                              
                              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200/50">
                                <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">{item.sku}</span>
                                {cartItem ? (
                                  <div className="flex items-center gap-4 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
                                    <button onClick={() => updateQuantity(item.id, cartItem.quantity - 1)} className="text-brand-primary hover:text-red-500 transition-colors"><Minus size={16} /></button>
                                    <span className="font-black text-sm min-w-[24px] text-center text-slate-900">{cartItem.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, cartItem.quantity + 1)} className="text-brand-primary hover:text-emerald-500 transition-colors"><Plus size={16} /></button>
                                  </div>
                                ) : (
                                  <button 
                                    onClick={() => addToCart(item)}
                                    className="bg-slate-900 text-white px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-brand-primary transition-all flex items-center gap-3 shadow-lg active:scale-95"
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
