import { useState } from 'react';
import {

  X,

  CheckCircle2,
  Filter,
  Search,
  Star,
  ShoppingCart,
  Eye,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'accent';
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const variants: Record<string, string> = {
    primary: 'bg-blue-700 hover:bg-blue-800 text-white shadow-lg shadow-blue-900/20',
    outline: 'border-2 border-blue-700 text-blue-700 hover:bg-blue-50',
    accent: 'bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold',
  };
  return (
    <button
      className={`px-8 py-3 rounded-md transition-all duration-300 font-medium active:scale-95 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// --- COMPONENTES DE PRODUCTOS ---

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({ product, onViewDetails }: { product: Product; onViewDetails: (product: Product) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            NUEVO
          </div>
        )}
        {product.isFeatured && (
          <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            DESTACADO
          </div>
        )}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-white/90 hover:bg-white p-3 rounded-full transition-colors">
            <Heart size={20} className="text-slate-700" />
          </button>
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white/90 hover:bg-white p-3 rounded-full transition-colors"
          >
            <Eye size={20} className="text-slate-700" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm text-slate-600">{product.rating}</span>
            <span className="text-sm text-slate-400">({product.reviews})</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-700">${product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">${product.originalPrice.toLocaleString()}</span>
            )}
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-bold ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.inStock ? 'En Stock' : 'Agotado'}
          </div>
        </div>

        <Button
          className="w-full mt-4"
          disabled={!product.inStock}
          onClick={() => onViewDetails(product)}
        >
          <ShoppingCart size={18} />
          {product.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
        </Button>
      </div>
    </motion.div>
  );
};

const ProductModal = ({ product, isOpen, onClose }: { product: Product | null; isOpen: boolean; onClose: () => void }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">{product.category}</span>
                  <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                    <X size={24} />
                  </button>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h2>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-slate-400">({product.reviews} reseñas)</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-blue-700">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-slate-400 line-through">${product.originalPrice.toLocaleString()}</span>
                  )}
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {product.inStock ? 'En Stock' : 'Agotado'}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{product.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">Características:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-slate-600">
                        <CheckCircle2 size={16} className="text-green-600 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1" disabled={!product.inStock}>
                    <ShoppingCart size={18} />
                    {product.inStock ? 'Agregar al Carrito' : 'Sin Stock'}
                  </Button>
                  <Button variant="outline" className="px-6">
                    <Heart size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- PÁGINA PRINCIPAL DE PRODUCTOS ---

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: 'todos', name: 'Todos los Productos', count: 0 },
    { id: 'motores', name: 'Motores Eléctricos', count: 0 },
    { id: 'generadores', name: 'Generadores', count: 0 },
    { id: 'transformadores', name: 'Transformadores', count: 0 },
    { id: 'componentes', name: 'Componentes', count: 0 },
    { id: 'herramientas', name: 'Herramientas', count: 0 },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Motor Trifásico 10HP 220/380V",
      category: "motores",
      price: 2500,
      originalPrice: 2800,
      rating: 4.8,
      reviews: 24,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
      description: "Motor trifásico de alto rendimiento para aplicaciones industriales. Excelente eficiencia energética y durabilidad.",
      features: [
        "Potencia: 10HP",
        "Voltaje: 220/380V",
        "Eficiencia: 92%",
        "Garantía: 2 años",
        "Certificación IEC"
      ],
      inStock: true,
      isFeatured: true
    },
    {
      id: 2,
      name: "Generador Diesel 50KVA",
      category: "generadores",
      price: 8500,
      rating: 4.9,
      reviews: 18,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80",
      description: "Generador diésel silencioso con control automático. Ideal para respaldo eléctrico en industrias.",
      features: [
        "Potencia: 50KVA",
        "Motor: Cummins",
        "Autonomía: 8 horas",
        "Ruido: <65dB",
        "Panel de control digital"
      ],
      inStock: true,
      isNew: true
    },
    {
      id: 3,
      name: "Transformador 75KVA 13.2KV/480V",
      category: "transformadores",
      price: 4200,
      rating: 4.7,
      reviews: 12,
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&q=80",
      description: "Transformador de distribución trifásico con aislamiento en aceite mineral.",
      features: [
        "Potencia: 75KVA",
        "Tensión: 13.2KV/480V",
        "Eficiencia: 98%",
        "Clase de aislamiento: H",
        "Cumple normas IEEE"
      ],
      inStock: false
    },
    {
      id: 4,
      name: "Kit de Reparación de Bobinas",
      category: "componentes",
      price: 180,
      rating: 4.5,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80",
      description: "Kit completo para reparación y rebobinado de motores eléctricos.",
      features: [
        "Alambre de cobre esmaltado",
        "Herramientas especializadas",
        "Instrucciones detalladas",
        "Garantía de calidad",
        "Para motores hasta 20HP"
      ],
      inStock: true
    },
    {
      id: 5,
      name: "Analizador de Vibraciones Digital",
      category: "herramientas",
      price: 1200,
      originalPrice: 1400,
      rating: 4.6,
      reviews: 31,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80",
      description: "Analizador profesional para diagnóstico de vibraciones en maquinaria rotativa.",
      features: [
        "Rango: 0.1 - 1000 Hz",
        "Pantalla LCD táctil",
        "Memoria interna",
        "Software incluido",
        "Certificación ISO 10816"
      ],
      inStock: true,
      isFeatured: true
    },
    {
      id: 6,
      name: "Motor Monofásico 3HP 220V",
      category: "motores",
      price: 450,
      rating: 4.4,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
      description: "Motor monofásico versátil para aplicaciones residenciales e industriales ligeras.",
      features: [
        "Potencia: 3HP",
        "Voltaje: 220V",
        "Factor de servicio: 1.15",
        "Protección térmica",
        "Fácil instalación"
      ],
      inStock: true
    }
  ];

  // Calcular conteos por categoría
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  categories.forEach(cat => {
    cat.count = cat.id === 'todos' ? products.length : (categoryCounts[cat.id] || 0);
  });

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/logo_rfm.png" alt="Logo RMF" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Catálogo de Productos</h1>
                <p className="text-sm text-slate-600">Equipos y componentes industriales de calidad</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filtros de Categoría */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-slate-600" />
            <span className="font-semibold text-slate-900">Categorías</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Nuestros Productos"
            subtitle="Descubre nuestra amplia gama de equipos y componentes industriales de la más alta calidad"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-slate-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No se encontraron productos</h3>
              <p className="text-slate-600">Intenta con otros términos de búsqueda o categorías.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal de Producto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img src="/logo_rfm.png" alt="Logo RMF" className="h-10 w-auto mb-4" />
              <p className="text-slate-400 text-sm">
                Líderes en soluciones de ingeniería industrial desde hace más de 15 años.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Motores Eléctricos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Generadores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transformadores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Componentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Mantenimiento</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reparaciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instalaciones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📞 +593 99 879 9981</p>
                <p>📧 contacto@rmfmotors.com</p>
                <p>📍 Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>© {new Date().getFullYear()} RMF MOTOR'S INGENIERÍA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}