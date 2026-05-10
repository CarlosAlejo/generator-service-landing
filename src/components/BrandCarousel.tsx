import { motion } from "motion/react";

const brands = [
  {
    name: "Cummins",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/power-gen-logotipo.png",
    width: 200,
    height: 80,
  },
  {
    name: "Perkins",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/Perkins-Logo.svg.png",
    width: 200,
    height: 80,
  },
  {
    name: "FG Wilson",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/fg_wilson_logo_large-1.png",
    width: 200,
    height: 80,
  },
  {
    name: "Doosan",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/Image-empty-state.avif",
    width: 200,
    height: 80,
  },
  {
    name: "CAT",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/OIP.png",
    width: 200,
    height: 80,
  },
  {
    name: "John Deere",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/John-Deere-Logo-500x281.jpg",
    width: 200,
    height: 80,
  },
  {
    name: "Stamford",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/logo-default_result.png",
    width: 200,
    height: 80,
  },
  {
    name: "Hotstart",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/hotstart-logo.svg",
    width: 200,
    height: 80,
  },
  {
    name: "Leroy Somer",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/leroy-somer-logo-png_seeklogo-83421.png",
    width: 200,
    height: 80,
  },
  {
    name: "DSE",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/dse-logo.jpg",
    width: 200,
    height: 80,
  },
  {
    name: "ComAp",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/comap-logo-png_seeklogo-291278.png",
    width: 200,
    height: 80,
  },
  {
    name: "SmartGen",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/SmartGen-logo-300x63.jpeg",
    width: 200,
    height: 80,
  },
  {
    name: "Mebay",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/mebay-logo.8790d92.png",
    width: 200,
    height: 80,
  },
  {
    name: "Donaldson",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/cq5dam.web.1280.1280.jpeg",
    width: 200,
    height: 80,
  },
  {
    name: "Fleetguard",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/fleet.png",
    width: 200,
    height: 80,
  },
  {
    name: "TotalEnergies",
    logo: "https://pub-5ad9781a36b548ceb25cb8ae48abd358.r2.dev/logos/total.png",
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
