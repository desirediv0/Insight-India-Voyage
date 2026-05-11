"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certs = [
  {
    name: "MOT",
    sub: "Ministry of Tourism, Govt. of India",
    logo: "/MOT.png",
  },
  {
    name: "IATO ACTIVE",
    sub: "Indian Association of Tour Operators",
    logo: "/IATO ACTIVE.png",
  },
  {
    name: "Incredible India",
    sub: "Official Tourism Logo of India",
    logo: "/Incredible India.webp",
  },
];

const TrustBar = () => (
  <section className="bg-[#fafafa] py-14 md:py-16 border-y border-black/[0.03]">
    <div className="max-w-6xl mx-auto px-6">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center uppercase tracking-[0.3em] text-[11px] font-medium text-black/40 mb-12"
      >
        Recognized & Certified By
      </motion.p>

      {/* Logos row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`flex flex-col items-center text-center px-8 ${
              i < certs.length - 1 ? "md:border-r md:border-black/[0.05]" : ""
            }`}
          >
            <div className="relative w-32 h-16 mb-6 transition-all duration-500 flex items-center justify-center">
              <Image
                src={c.logo}
                alt={c.name}
                width={120}
                height={60}
                className="object-contain max-h-full"
              />
            </div>
            <span className="font-body text-[13px] font-semibold text-black/80 tracking-tight">
              {c.name}
            </span>
            <span className="font-body text-[11px] text-black/40 font-light mt-1 max-w-[180px] leading-relaxed uppercase tracking-wider">
              {c.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;