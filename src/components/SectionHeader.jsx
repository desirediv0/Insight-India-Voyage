"use client";

import { motion } from "framer-motion";

const SectionHeader = ({ label, heading, subtitle, dark = false, centered = true }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={`mb-16 md:mb-20 ${centered ? "text-center" : ""}`}
  >
    {/* Label */}
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className={`inline-block uppercase tracking-[0.3em] text-[11px] font-medium mb-5 ${
        dark ? "text-white/40" : "text-black/35"
      }`}
    >
      {label}
    </motion.span>

    {/* Heading */}
    <h2
      className={`font-display text-3xl md:text-[2.75rem] lg:text-5xl font-semibold tracking-tighter leading-[1.3] ${
        dark ? "text-white" : "text-black"
      }`}
    >
      {heading}
    </h2>

    {/* Subtitle */}
    {subtitle && (
      <p
        className={`mt-5 font-body text-[15px] md:text-base font-light leading-relaxed max-w-lg ${
          centered ? "mx-auto" : ""
        } ${dark ? "text-white/40" : "text-black/40"}`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeader;