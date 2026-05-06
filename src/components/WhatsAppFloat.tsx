import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_NUMBER = '593998799981';
const WHATSAPP_MESSAGE =
  'Hola, me gustaría recibir información sobre sus servicios.';

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-2xl shadow-[#25D366]/30 transition-transform hover:scale-105"
      aria-label="Abrir WhatsApp"
    >
      <motion.span
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.span>
      <span className="hidden text-sm font-bold sm:inline">WhatsApp</span>
    </motion.a>
  );
}
