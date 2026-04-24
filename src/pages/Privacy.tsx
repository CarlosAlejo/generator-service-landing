import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, Mail } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="bg-emerald-500/10 p-5 rounded-2xl text-emerald-600">
              <Shield size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 font-display tracking-tight uppercase">Política de Privacidad</h1>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Última actualización: Abril 2024</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4 text-emerald-600">
                <Eye size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">1. Información que Recopilamos</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Recopilamos información que usted nos proporciona directamente cuando utiliza nuestro sitio web, como cuando se pone en contacto con nosotros, se registra para recibir boletines o solicita un presupuesto. Esta información puede incluir su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que elija proporcionar.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-emerald-600">
                <Lock size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">2. Uso de la Información</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Utilizamos la información que recopilamos para diversos propósitos, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium mt-4">
                <li>Proporcionar, mantener y mejorar nuestros servicios.</li>
                <li>Responder a sus comentarios, preguntas y peticiones.</li>
                <li>Comunicarnos con usted sobre productos, servicios, ofertas y eventos.</li>
                <li>Monitorear y analizar tendencias, uso y actividades relacionadas con nuestros servicios.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-emerald-600">
                <Database size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">3. Seguridad</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Tomamos medidas razonables para ayudar a proteger la información sobre usted de pérdida, robo, uso indebido y acceso no autorizado, divulgación, alteración y destrucción. Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-emerald-600">
                <Mail size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">4. Sus Derechos</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Dependiendo de su ubicación, puede tener ciertos derechos sobre sus datos personales, incluyendo el derecho a acceder, corregir o eliminar la información que tenemos sobre usted. Para ejercer estos derechos, por favor contáctenos a través de los medios proporcionados en este sitio.
              </p>
            </section>

            <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100/50">
              <h3 className="text-xl font-black text-slate-900 mb-2 font-display uppercase tracking-tight">Protección de Datos</h3>
              <p className="text-slate-600 text-sm font-medium">En RMF MOTOR'S nos tomamos muy en serio su privacidad. Utilizamos protocolos de encriptación estándar para asegurar que su navegación sea segura.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
