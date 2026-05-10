import { motion } from "motion/react";

const brands = [
  {
    name: "Cummins",
    logo: "https://generadorescummins.com/wp-content/uploads/2021/07/power-gen-logotipo.png",
    width: 200,
    height: 80,
  },
  {
    name: "Perkins",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Perkins-Logo.svg/960px-Perkins-Logo.svg.png",
    width: 200,
    height: 80,
  },
  {
    name: "FG Wilson",
    logo: "https://i0.wp.com/unicompex.com/wp-content/uploads/2020/10/fg_wilson_logo_large-1.jpg?resize=6000%2C2392&ssl=1",
    width: 200,
    height: 80,
  },
  {
    name: "Doosan",
    logo: "https://www.donaldson.com/content/dam/donaldson/shared-assets/brands-logos/Donaldson-Logo-Horizontal-Reversed.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
    width: 200,
    height: 80,
  },
  {
    name: "CAT",
    logo: "https://tse2.mm.bing.net/th/id/OIP.plo7HezPbUEhBysmvTEGfwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    width: 200,
    height: 80,
  },
  {
    name: "John Deere",
    logo: "https://cdn-ux.deere.com/brand-foundations/2.0.0/logos/jd-logo.svg#green",
    width: 200,
    height: 80,
  },
  {
    name: "Stamford",
    logo: "https://stamford-generator.com/wp-content/uploads/logo-default_result.webp",
    width: 200,
    height: 80,
  },
  {
    name: "Hotstart",
    logo: "https://www.hotstart.com/images/hotstart-logo.svg",
    width: 200,
    height: 80,
  },
  {
    name: "Leroy Somer",
    logo: "https://images.seeklogo.com/logo-png/8/1/leroy-somer-logo-png_seeklogo-83421.png",
    width: 200,
    height: 80,
  },
  {
    name: "DSE",
    logo: "https://powersystemsplusinc.com/wp-content/uploads/2022/09/dse-logo.jpg",
    width: 200,
    height: 80,
  },
  {
    name: "ComAp",
    logo: "https://seeklogo.com/images/C/comap-logo-33C8196AF9-seeklogo.com.png",
    width: 200,
    height: 80,
  },
  {
    name: "SmartGen",
    logo: "https://www.genking.co.za/wp-content/uploads/2021/08/SmartGen-logo-300x63.jpeg",
    width: 200,
    height: 80,
  },
  {
    name: "Mebay",
    logo: "https://www.mebay.cn/static/img/mebay-logo.8790d92.png",
    width: 200,
    height: 80,
  },
  {
    name: "Donaldson",
    logo: "https://static.wixstatic.com/media/ac8dc4_0dd1d5320ecd4e23a8d0d22fea32d6a4~mv2.png/v1/fill/w_276,h_160,al_c,lg_1,q_85,enc_avif,quality_auto/Image-empty-state.png",
    width: 200,
    height: 80,
  },
  {
    name: "Fleetguard",
    logo: "https://tse3.mm.bing.net/th/id/OIP.6OBio9gIucC-0XCXms1j4AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    width: 200,
    height: 80,
  },
  {
    name: "TotalEnergies",
    logo: "https://tse4.mm.bing.net/th/id/OIP.bI6VGZySjHR2yH9zSdwv-AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    width: 200,
    height: 80,
  },
];

export default function BrandCarousel() {
  // Double the list for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center text-slate-800">
        <p className="text-xs font-bold text-slate-600 uppercase tracking-[0.4em] mb-4">
          Equipamiento y Repuestos Originales
        </p>
        <h2 className="text-3xl font-bold font-display">
          Trabajamos con Lideres Mundiales
        </h2>
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
              className="flex items-center justify-center mx-6 px-5 py-3 min-w-50 h-28 bg-slate-50/50 rounded-2xl border border-slate-100 cursor-default overflow-hidden"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={brand.width} 
                height={brand.height}
                className="max-h-20 max-w-full w-auto object-contain opacity-100"
                referrerPolicy="no-referrer"
                loading="lazy"
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
