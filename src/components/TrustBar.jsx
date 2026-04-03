"use client";

import { motion } from "framer-motion";

const certs = [
  {
    name: "Ministry of Tourism",
    sub: "Govt. of India",
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />
        <path d="M16 6l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" fill="currentColor" opacity="0.4" />
        <rect x="11" y="17" width="10" height="1" rx="0.5" fill="currentColor" opacity="0.2" />
        <rect x="13" y="20" width="6" height="1" rx="0.5" fill="currentColor" opacity="0.15" />
        <rect x="12" y="23" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.1" />
      </svg>
    ),
  },
  {
    name: "IATO",
    sub: "Indian Association of Tour Operators",
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
        <rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />
        <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="600" fill="currentColor" opacity="0.35" fontFamily="system-ui">
          IATO
        </text>
      </svg>
    ),
  },
  {
    name: "TAAI",
    sub: "Travel Agents Association of India",
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />
        <text x="16" y="20" textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor" opacity="0.35" fontFamily="system-ui">
          TAAI
        </text>
      </svg>
    ),
  },
  {
    name: "Delhi Tourism",
    sub: "Delhi Tourism & Transport Dev. Corp.",
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="flex-shrink-0">
        <rect x="2" y="2" width="28" height="28" rx="6" stroke="currentColor" strokeWidth="0.75" opacity="0.25" />
        <path d="M16 8c-4 0-7 3.5-7 7 0 5 7 11 7 11s7-6 7-11c0-3.5-3-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" opacity="0.2" />
      </svg>
    ),
  },
];

const TrustBar = () => (
  <section className="bg-[#fafafa] py-16 md:py-20">
    <div className="max-w-5xl mx-auto px-6">
      {/* Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center uppercase tracking-[0.3em] text-[11px] font-medium text-black/80 mb-10"
      >
        Recognized & Certified By
      </motion.p>

      {/* Logos row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {certs.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`flex flex-col items-center text-center py-6 md:py-8 text-black/90 ${
              i < certs.length - 1 ? "md:border-r md:border-black/[0.01]" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-black/[0.01]" : ""}`}
          >
            <div className="mb-3 text-black">{c.logo}</div>
            <span className="font-body text-[13px] font-medium text-black/70">
              {c.name}
            </span>
            <span className="font-body text-[10px] text-black/50 font-light mt-0.5 max-w-[140px] leading-snug">
              {c.sub}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;