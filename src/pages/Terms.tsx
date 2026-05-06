import { motion } from 'motion/react';
import { FileText, ShieldCheck, Scale, AlertCircle } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <div className="flex items-center gap-6 mb-12">
            <div className="bg-brand-primary/10 p-5 rounded-2xl text-brand-primary">
              <Scale size={40} />
            </div>
            <div>
              <h1 className="text-4xl font-black text-slate-900 font-display tracking-tight uppercase">Términos y Condiciones</h1>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-1">Última actualización: Abril 2024</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4 text-brand-primary">
                <FileText size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">1. Aceptación de los Términos</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Al acceder y utilizar el sitio web de RMF MOTOR'S INGENIERÍA, usted acepta estar sujeto a estos términos y condiciones de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, tiene prohibido utilizar o acceder a este sitio.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-brand-primary">
                <ShieldCheck size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">2. Licencia de Uso</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de RMF MOTOR'S INGENIERÍA para visualización transitoria personal y no comercial solamente. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 font-medium mt-4">
                <li>Modificar o copiar los materiales.</li>
                <li>Utilizar los materiales para cualquier propósito comercial o para cualquier exhibición pública (comercial o no comercial).</li>
                <li>Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web.</li>
                <li>Eliminar cualquier derecho de autor u otras notaciones de propiedad de los materiales.</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-brand-primary">
                <Scale size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">3. Descargo de Responsabilidad</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                Los materiales en el sitio web de RMF MOTOR'S INGENIERÍA se proporcionan "tal cual". RMF MOTOR'S INGENIERÍA no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, las garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4 text-brand-primary">
                <AlertCircle size={20} />
                <h2 className="text-2xl font-black font-display m-0 uppercase">4. Limitaciones</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                En ningún caso RMF MOTOR'S INGENIERÍA o sus proveedores serán responsables de cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de utilizar los materiales en el sitio web, incluso si RMF MOTOR'S INGENIERIA ha sido notificado oralmente o por escrito de la posibilidad de tales daños.
              </p>
            </section>

            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-black text-slate-900 mb-4 font-display uppercase tracking-tight">¿Tiene alguna duda?</h3>
              <p className="text-slate-600 text-sm font-medium mb-6">Si requiere más información sobre nuestros términos legales, no dude en contactar a nuestro equipo legal.</p>
              <a 
                href="/contacto" 
                className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-brand-primary/20"
              >
                Ir a Contacto
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
