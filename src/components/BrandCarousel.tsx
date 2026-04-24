import { motion } from 'motion/react';

const brands = [
  { name: 'Cummins', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Cummins_logo.svg' },
  { name: 'Perkins', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Perkins-Logo.svg/960px-Perkins-Logo.svg.png' },
  { name: 'FG Wilson', logo: 'https://i0.wp.com/unicompex.com/wp-content/uploads/2020/10/fg_wilson_logo_large-1.jpg?resize=6000%2C2392&ssl=1' },
  { name: 'Doosan', logo: 'https://www.donaldson.com/content/dam/donaldson/shared-assets/brands-logos/Donaldson-Logo-Horizontal-Reversed.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg' },
  { name: 'CAT', logo: 'https://tse2.mm.bing.net/th/id/OIP.plo7HezPbUEhBysmvTEGfwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'John Deere', logo: 'https://cdn-ux.deere.com/brand-foundations/2.0.0/logos/jd-logo.svg#green' },
  { name: 'Stamford', logo: 'https://stamford-generator.com/wp-content/uploads/logo-default_result.webp' },
  { name: 'Hotstart', logo: 'https://www.hotstart.com/images/hotstart-logo.svg' },
  { name: 'Leroy Somer', logo: 'https://images.seeklogo.com/logo-png/8/1/leroy-somer-logo-png_seeklogo-83421.png' },
  { name: 'DSE', logo: 'https://powersystemsplusinc.com/wp-content/uploads/2022/09/dse-logo.jpg' },
  { name: 'ComAp', logo: 'https://seeklogo.com/images/C/comap-logo-33C8196AF9-seeklogo.com.png' },
  { name: 'SmartGen', logo: 'https://www.genking.co.za/wp-content/uploads/2021/08/SmartGen-logo-300x63.jpeg' },
  { name: 'Mebay', logo: 'https://www.mebay.cn/static/img/mebay-logo.8790d92.png' },
  { name: 'Donaldson', logo: 'https://static.wixstatic.com/media/ac8dc4_0dd1d5320ecd4e23a8d0d22fea32d6a4~mv2.png/v1/fill/w_276,h_160,al_c,lg_1,q_85,enc_avif,quality_auto/Image-empty-state.png' },
  { name: 'Fleetguard', logo: 'https://tse3.mm.bing.net/th/id/OIP.6OBio9gIucC-0XCXms1j4AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { name: 'TotalEnergies', logo: 'https://tse4.mm.bing.net/th/id/OIP.bI6VGZySjHR2yH9zSdwv-AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
];

export default function BrandCarousel() {
  // Double the list for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center text-slate-800">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em] mb-4">
          Equipamiento y Repuestos Originales
        </p>
        <h2 className="text-3xl font-bold font-display">Trabajamos con Lideres Mundiales</h2>
      </div>

      <div className="flex relative items-center">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -3200], // Corrected for smooth infinite loop
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 45,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center mx-6 px-8 py-6 min-w-50 h-24 bg-slate-50/50 rounded-2xl border border-slate-100 group hover:bg-white hover:border-brand-primary/30 transition-all cursor-default overflow-hidden"
            >
              <img 
                src={brand.logo} 
                alt={`${brand.name} logo`} 
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
      </div>
    </div>
  );
}
