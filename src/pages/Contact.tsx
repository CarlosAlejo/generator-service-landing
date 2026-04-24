import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = '5491122334455';

const contactItems = [
  { icon: Phone, label: 'Llamanos', val: '+54 9 11 2233 4455' },
  { icon: Mail, label: 'Email', val: 'contacto@rmfmotors.com' },
  { icon: MapPin, label: 'Ubicacion', val: 'Parque Industrial, Buenos Aires, Argentina' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleWhatsAppAction = (message: string) => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hola RMF Motor's! Mi nombre es ${formData.nombre}. Mi correo es ${formData.email}. Consulta: ${formData.mensaje}`;
    handleWhatsAppAction(text);
  };

  return (
    <div className="pt-20">
      <section className="relative flex min-h-[80vh] items-center overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
            className="h-full w-full object-cover brightness-[0.15]"
            alt="Contacto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <h2 className="mb-8 text-5xl font-bold font-display">
                Hablemos de tu <br />
                <span className="text-brand-secondary">Proximo Proyecto</span>
              </h2>
              <p className="mb-12 text-xl leading-relaxed text-slate-300">
                Nuestro equipo tecnico esta listo para analizar tus necesidades y proponer la mejor solucion tecnica y economica.
              </p>

              <div className="space-y-8">
                {contactItems.map((item, i) => (
                  <div key={i} className="group flex items-start gap-6">
                    <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/20 p-4 transition-colors group-hover:bg-brand-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-secondary">{item.label}</div>
                      <div className="text-lg font-medium">{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white p-10 shadow-2xl"
            >
              <h3 className="mb-8 text-2xl font-bold text-slate-900">Envia un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold text-slate-700">Nombre</label>
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      required
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-bold text-slate-700">Email</label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-bold text-slate-700">Mensaje</label>
                  <textarea
                    placeholder="En que podemos ayudarte?"
                    rows={4}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    required
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-primary py-5 font-bold text-white shadow-lg shadow-brand-primary/20 transition-all hover:opacity-90"
                >
                  Enviar por WhatsApp
                  <ChevronRight size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
