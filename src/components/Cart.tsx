import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Trash2, Plus, Minus, Send, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = "5491122334455";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart, isCartOpen, setIsCartOpen } = useCart();

  const handleWhatsAppCheckout = () => {
    let message = "📦 *Nuevo Pedido RMF Motor's*\n\n";
    message += "Me gustaría solicitar los siguientes productos:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Cant: ${item.quantity} | SKU: ${item.sku}\n`;
      message += `   Subtotal: $${(item.price * item.quantity).toLocaleString()}\n\n`;
    });

    message += `━━━━━━━━━━━━━━\n`;
    message += `*Total Estimado: $${totalPrice.toLocaleString()}*\n\n`;
    message += "Por favor, confírmenme disponibilidad y proceso de pago.";

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] bg-white z-[110] shadow-2xl flex flex-col h-screen overflow-hidden"
          >
            <div className="p-8 border-b border-slate-100 flex items-center justify-between bg-brand-primary text-white shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  <ShoppingCart size={28} />
                </div>
                <div>
                  <h2 className="text-2xl font-black font-display tracking-tight">Tu Carrito</h2>
                  <p className="text-[10px] text-brand-secondary/80 font-bold uppercase tracking-[0.2em]">{totalItems} articulos seleccionados</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Cerrar carrito"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-8 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-slate-50 p-12 rounded-full mb-8">
                    <Package size={64} className="text-slate-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">El carrito está vacío</h3>
                  <p className="text-slate-500 max-w-[280px] leading-relaxed">No has seleccionado ningún repuesto o equipo todavía.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-10 px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-lg"
                  >
                    Explorar Catálogo
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 group transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-100">
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-900 text-lg leading-snug font-display">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-300 hover:text-red-500 transition-colors p-2 -mr-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-bold text-brand-primary uppercase tracking-[0.1em] bg-brand-primary/10 px-2 py-1 rounded">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.sku}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-slate-50 rounded-xl transition-colors text-brand-primary"
                          >
                            <Minus size={18} />
                          </button>
                          <span className="text-lg font-black w-8 text-center text-slate-900 leading-none">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-slate-50 rounded-xl transition-colors text-brand-primary"
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mb-1">Subtotal</span>
                          <span className="text-xl font-black text-slate-900">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-slate-100 bg-white shrink-0">
                <div className="bg-slate-50 p-6 rounded-3xl mb-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Total de Pedido</h4>
                      <p className="text-[10px] text-slate-400 font-medium">Sujeto a confirmación de stock</p>
                    </div>
                    <span className="text-4xl font-black text-brand-primary font-display tracking-tight">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-4 hover:bg-brand-primary transition-all shadow-2xl hover:shadow-brand-primary/40 active:scale-[0.98]"
                >
                  <Send size={24} />
                  Consultar por WhatsApp
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Atención inmediata disponible</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
