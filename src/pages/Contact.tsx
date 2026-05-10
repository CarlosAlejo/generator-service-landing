import React, { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "meenpayy"; // Placeholder ID, replace with your actual ID

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          phone: formData.telefono,
          message: formData.mensaje,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setStatus("error");
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title="Contacto - Solicite su Presupuesto"
        description="Póngase en contacto con RMF Motor's Ingeniería. Solicite asesoramiento técnico y presupuestos personalizados para sus proyectos de energía y mantenimiento industrial."
        canonical="/contacto"
      />
      <section className="relative py-24 overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=60&w=1200"
            srcSet="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format,compress&fit=crop&q=60&w=640 640w, https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format,compress&fit=crop&q=60&w=1200 1200w"
            sizes="100vw"
            className="w-full h-full object-cover brightness-[0.15]"
            alt="Oficinas de ingeniería y tecnología de vanguardia en RMF Motor's"
            referrerPolicy="no-referrer"
            width={1200}
            height={800}
            loading="eager"
          />
          <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-white"
            >
              <h1 className="text-5xl font-bold mb-8 font-display">
                Hablemos de tu <br />
                <span className="text-brand-secondary">Próximo Proyecto</span>
              </h1>
              <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                Nuestro equipo técnico experto está listo para analizar sus
                necesidades y proponer la mejor solución técnica y económica
                para su infraestructura.
              </p>

              <div className="space-y-8">
                {[
                  {
                    Icon: Phone,
                    label: "Llámanos",
                    val: "ECU · +593 99 879 9981",
                    href: "tel:+593998799981",
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    val: "contacto@rmfmotors.com",
                    href: "mailto:contacto@rmfmotors.com",
                  },
                  {
                    Icon: MapPin,
                    label: "Ubicación",
                    val: "Quito - Ecuador",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="
        group relative overflow-hidden
        flex items-start gap-6
        rounded-3xl
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-6
        transition-all duration-500
        hover:border-brand-secondary/40
        hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]
        hover:-translate-y-1
      "
                  >
                    {/* Glow animado tipo Tesla */}
                    <div
                      className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        "
                    >
                      <div
                        className="
            absolute -inset-[100%]
            animate-[spin_8s_linear_infinite]
            bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,#ffffff20_120deg,transparent_240deg)]
          "
                      />
                    </div>

                    {/* Línea superior premium */}
                    <div
                      className="
          absolute top-0 left-0 h-[2px] w-0
          bg-gradient-to-r from-transparent via-brand-secondary to-transparent
          transition-all duration-700
          group-hover:w-full
        "
                    />

                    {/* Icono */}
                    <div
                      className="
          relative z-10
          bg-white/5
          border border-white/10
          p-4
          rounded-2xl
          transition-all duration-500
          group-hover:scale-110
          group-hover:bg-brand-primary
          group-hover:border-brand-secondary/40
        "
                    >
                      <item.Icon
                        size={24}
                        className="transition-transform duration-500 group-hover:rotate-6"
                      />
                    </div>

                    {/* Texto */}
                    <div className="relative z-10">
                      <div
                        className="
            text-xs uppercase tracking-[0.35em]
            text-brand-secondary font-bold mb-2
          "
                      >
                        {item.label}
                      </div>

                      <div className="text-lg md:text-xl font-light tracking-[0.08em]">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="
                inline-block
                transition-all duration-300
                hover:text-brand-secondary
              "
                          >
                            {item.val}
                          </a>
                        ) : (
                          item.val
                        )}
                      </div>
                    </div>

                    {/* Reflejo elegante */}
                    <div
                      className="
          absolute inset-0 opacity-0 group-hover:opacity-100
          transition-opacity duration-700
          bg-gradient-to-br
          from-white/[0.08]
          via-transparent
          to-transparent
          pointer-events-none
        "
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-10 rounded-3xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Envíanos un mensaje
              </h3>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center"
                >
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <ChevronRight
                      style={{ transform: "rotate(-90deg)" }}
                      size={32}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-2">
                    ¡Mensaje Enviado!
                  </h4>
                  <p className="text-emerald-700 mb-6">
                    Gracias por contactarnos. Nos comunicaremos con usted a la
                    brevedad.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        placeholder="Tu nombre"
                        className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                        required
                        value={formData.nombre}
                        onChange={(e) =>
                          setFormData({ ...formData, nombre: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">
                        Email{" "}
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                          <Mail size={16} />
                        </div>
                        <input
                          type="email"
                          placeholder="tu@email.com"
                          className="w-full pl-11 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Teléfono{" "}
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                        <Phone size={16} />
                      </div>
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="+593 ..."
                        className="w-full pl-11 p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                        value={formData.telefono}
                        onChange={(e) => {
                          const value = e.target.value.replace(
                            /[^\d+\-\s()]/g,
                            "",
                          );
                          setFormData({ ...formData, telefono: value });
                        }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">
                      Mensaje
                    </label>
                    <textarea
                      placeholder="¿En qué podemos ayudarte?"
                      rows={4}
                      className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
                      required
                      value={formData.mensaje}
                      onChange={(e) =>
                        setFormData({ ...formData, mensaje: e.target.value })
                      }
                    ></textarea>
                  </div>
                  {status === "error" && (
                    <p className="text-red-500 text-sm font-bold ml-1">
                      Hubo un error al enviar el mensaje. Por favor, intente
                      nuevamente.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-brand-primary hover:opacity-90 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-brand-primary/20 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                    <ChevronRight size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
