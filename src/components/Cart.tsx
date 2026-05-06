import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Trash2, Plus, Minus, Send, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '593998799981';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalItems, clearCart, isCartOpen, setIsCartOpen } =
    useCart();

  const handleWhatsAppCheckout = () => {
    let message = "Nuevo Pedido RMF Motor's\n\n";
    message += 'Me gustaría solicitar los siguientes productos:\n\n';

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Cant: ${item.quantity} | SKU: ${item.sku}\n`;
      message += `   Categoría: ${item.category}\n\n`;
    });

    message += '--------------\n';
    message += `Cantidad total de artículos: ${totalItems}\n\n`;
    message += 'Por favor, confirmen disponibilidad y proceso de pago.';

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
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-[110] flex h-screen w-full flex-col overflow-hidden bg-white shadow-2xl sm:w-[500px]"
          >
            <div className="flex items-center justify-between border-b border-slate-100 bg-brand-primary p-8 text-white shrink-0">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white/20 p-3">
                  <ShoppingCart size={28} />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-black tracking-tight">Tu Carrito</h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-100">
                    {totalItems} artículos seleccionados
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 transition-colors hover:bg-white/10"
                aria-label="Cerrar carrito"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-grow space-y-6 overflow-y-auto p-8">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-8 rounded-full bg-slate-50 p-12">
                    <Package size={64} className="text-slate-200" />
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold text-slate-900">
                    El carrito esta vacío
                  </h3>
                  <p className="max-w-[280px] leading-relaxed text-slate-500">
                    No has seleccionado ningún repuesto o equipo todavía.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-10 rounded-xl bg-brand-primary px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-brand-primary/90"
                  >
                    Explorar Catlogo
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="group flex gap-6 rounded-3xl border border-slate-100 bg-slate-50 p-6 transition-all hover:bg-white hover:shadow-lg hover:shadow-slate-100"
                  >
                    <div className="flex-grow">
                      <div className="mb-2 flex items-start justify-between">
                        <h4 className="font-display text-lg font-bold leading-snug text-slate-900">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="-mr-2 p-2 text-slate-500 transition-colors hover:text-red-500"
                          aria-label={`Eliminar ${item.name} del carrito`}
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <div className="mb-6 flex items-center gap-3">
                        <span className="rounded bg-brand-primary/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-primary">
                          {item.category}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">
                          {item.sku}
                        </span>
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="rounded-xl p-1.5 text-brand-primary transition-colors hover:bg-slate-50"
                            aria-label={`Reducir cantidad de ${item.name}`}
                          >
                            <Minus size={18} />
                          </button>
                          <span className="w-8 text-center text-lg font-black leading-none text-slate-900">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="rounded-xl p-1.5 text-brand-primary transition-colors hover:bg-slate-50"
                            aria-label={`Aumentar cantidad de ${item.name}`}
                          >
                            <Plus size={18} />
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-slate-600">
                            Cantidad
                          </span>
                          <span className="text-xl font-black text-slate-900">{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="shrink-0 border-t border-slate-100 bg-white p-8">
                <div className="mb-8 rounded-3xl bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="mb-1 text-sm font-bold uppercase tracking-widest text-slate-500">
                        Resumen de Pedido
                      </h4>
                      <p className="text-[10px] font-medium text-slate-600">
                        Productos listos para confirmar por WhatsApp
                      </p>
                    </div>
                    <span className="font-display text-4xl font-black tracking-tight text-brand-primary">
                      {totalItems}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="flex w-full items-center justify-center gap-4 rounded-2xl bg-slate-900 py-6 text-lg font-bold text-white shadow-2xl transition-all hover:bg-brand-primary hover:shadow-brand-primary/40 active:scale-[0.98]"
                >
                  <Send size={24} />
                  Consultar por WhatsApp
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-slate-600">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Atención inmediata disponible
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
