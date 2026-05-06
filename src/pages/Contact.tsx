import type { FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import SEO from '../components/SEO';

const contactItems = [
  { icon: Phone, label: 'Llámanos', val: '+593 99 879 9981', href: 'tel:+593998799981' },
  { icon: Mail, label: 'Email', val: 'comercial@rmfmotors.com' },
  { icon: MapPin, label: 'Ubicación', val: 'Ecuador' },
];

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL?.trim() || '/api/contact';
const CONTACT_EMAIL = 'comercial@rmfmotors.com';

function buildMailtoUrl(formData: {
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
}) {
  const subject = `Nuevo contacto RMF Motors - ${formData.nombre}`;
  const body = [
    `Nombre: ${formData.nombre}`,
    `Email: ${formData.email}`,
    `Teléfono: ${formData.telefono || 'No indicado'}`,
    '',
    'Mensaje:',
    formData.mensaje,
  ].join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  const fallbackToEmailClient = () => {
    window.location.href = buildMailtoUrl(formData);
    setSubmitState('success');
    setFeedback(
      'No pudimos conectar con el servidor de envío. Abrimos tu cliente de correo para completar el mensaje.'
    );
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setFeedback('');

    try {
      const response = await fetch(CONTACT_API_URL, {
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

      if (response.status === 404) {
        fallbackToEmailClient();
        return;
      }

      if (!response.ok) {
        throw new Error(
          result.message ||
            (rawBody && !contentType.includes('application/json')
              ? 'El servidor devolvió una respuesta invalida.'
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
      if (error instanceof TypeError) {
        fallbackToEmailClient();
        return;
      }

      const message =
        error instanceof Error ? error.message : 'Ocurrió un error al enviar el mensaje.';
      setSubmitState('error');
      setFeedback(message);
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contacto - Solicite su Presupuesto"
        description="Póngase en contacto con RMF Motor's Ingeniería. Solicite asesoramiento técnico y presupuestos personalizados para sus proyectos de energía y mantenimiento industrial."
        canonical="/contacto"
      />
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
                <span className="text-slate-100">Proximo Proyecto</span>
              </h2>
              <p className="mb-12 text-xl leading-relaxed text-slate-300">
                Nuestro equipo técnico esta listo para analizar tus necesidades y proponer la mejor
                solución técnica y economica.
              </p>

              <div className="space-y-8">
                {contactItems.map((item, i) => (
                  <div key={i} className="group flex items-start gap-6">
                    <div className="rounded-2xl border border-brand-primary/30 bg-brand-primary/20 p-4 transition-colors group-hover:bg-brand-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <div className="mb-1 text-sm font-bold uppercase tracking-widest text-slate-200">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="inline-flex items-center gap-2 text-lg font-semibold tracking-[0.18em] text-white transition-colors hover:text-brand-secondary"
                        >
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm tracking-[0.28em]">
                            +593
                          </span>
                          <span>99 879 9981</span>
                        </a>
                      ) : (
                        <div className="text-lg font-medium">{item.val}</div>
                      )}
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
              <h3 className="mb-8 text-2xl font-bold text-slate-900">Envía un mensaje</h3>
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
