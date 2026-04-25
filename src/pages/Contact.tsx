import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';

const contactItems = [
  { icon: Phone, label: 'Llamanos', val: '+593 99 879 9981' },
  { icon: Mail, label: 'Email', val: 'comercial@rmfmotors.com' },
  { icon: MapPin, label: 'Ubicacion', val: 'Ecuador' },
];

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const rawBody = await response.text();
      const contentType = response.headers.get('content-type') || '';
      const result =
        rawBody && contentType.includes('application/json')
          ? (JSON.parse(rawBody) as { message?: string })
          : {};

      if (!response.ok) {
        throw new Error(
          result.message ||
            (rawBody && !contentType.includes('application/json')
              ? 'El servidor devolvio una respuesta invalida.'
              : 'No se pudo enviar el mensaje.')
        );
      }

      setSubmitState('success');
      setFeedback(result.message || 'Tu mensaje fue enviado correctamente.');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Ocurrio un error al enviar el mensaje.';
      setSubmitState('error');
      setFeedback(message);
    }
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
              <h2 className="mb-8 font-display text-5xl font-bold">
                Hablemos de tu <br />
                <span className="text-brand-secondary">Proximo Proyecto</span>
              </h2>
              <p className="mb-12 text-xl leading-relaxed text-slate-300">
                Nuestro equipo tecnico esta listo para analizar tus necesidades y proponer la mejor
                solucion tecnica y economica.
              </p>

              <div className="space-y-8">
                {contactItems.map((item, i) => (
                  <div key={i} className="group flex items-start gap-6">
                    <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/20 p-4 transition-colors group-hover:bg-brand-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-bold uppercase tracking-widest text-brand-secondary">
                        {item.label}
                      </div>
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
                      value={formData.nombre}
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
                      value={formData.email}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                      required
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-bold text-slate-700">Telefono</label>
                  <input
                    type="tel"
                    placeholder="+593..."
                    value={formData.telefono}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-sm font-bold text-slate-700">Mensaje</label>
                  <textarea
                    placeholder="En que podemos ayudarte?"
                    rows={4}
                    value={formData.mensaje}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    required
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  />
                </div>

                {feedback ? (
                  <div
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      submitState === 'success'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {feedback}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-brand-primary py-5 font-bold text-white shadow-lg shadow-brand-primary/20 transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitState === 'loading' ? 'Enviando...' : 'Enviar correo'}
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
