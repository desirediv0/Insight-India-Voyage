"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTABanner = () => (
  <section className="relative bg-black py-14 md:py-16 overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />

    {/* Grain */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />

    <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
      {/* Label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-white/50 mb-8"
      >
        Start Your Journey
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-semibold text-white tracking-tight leading-[1.1] mb-6"
      >
        Ready to Begin Your
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/50 to-white/30">
          Extraordinary Journey?
        </span>
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-body text-[15px] md:text-base text-white/35 font-light max-w-md mx-auto mb-12 leading-relaxed"
      >
        Let us craft your perfect Indian adventure. Your story starts with a single conversation.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 bg-white text-black font-body text-sm font-medium rounded-full px-10 py-4 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
        >
          Start Planning Today
          <ArrowRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>

      {/* Trust points */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex items-center justify-center gap-6 mt-10"
      >
        {["Free consultation", "No commitments", "Expert guidance"].map(
          (item, i) => (
            <span
              key={item}
              className="font-body text-[11px] text-white/40 font-light tracking-wide flex items-center gap-2"
            >
              {i > 0 && (
                <span className="w-[3px] h-[3px] rounded-full bg-white/15" />
              )}
              {item}
            </span>
          )
        )}
      </motion.div>
    </div>

    {/* Top and bottom subtle borders */}
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
  </section>
);

export default CTABanner;