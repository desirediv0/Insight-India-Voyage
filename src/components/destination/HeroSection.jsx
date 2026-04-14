"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = ({ title, subtitle, imageSrc }) => {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-black">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority
          className="object-cover object-center scale-105 animate-[pulse_30s_ease-in-out_infinite]"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] tracking-tighter text-white font-bold mb-8 drop-shadow-2xl leading-[0.9]">
            {title}
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-xl md:text-3xl text-white/90 font-light tracking-wide max-w-3xl mx-auto drop-shadow-lg mb-12 leading-relaxed"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black font-body text-[15px] font-medium px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_20px_40px_-15px_rgba(255,255,255,0.2)] group"
          >
            Explore Packages
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
