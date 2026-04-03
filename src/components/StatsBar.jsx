"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Globe, Users, MapPin, Headphones } from "lucide-react";

const stats = [
  { icon: Globe, value: 18, suffix: "+", label: "Years of Excellence" },
  { icon: Users, value: 10000, suffix: "+", label: "Happy Travelers" },
  { icon: MapPin, value: 50, suffix: "+", label: "Curated Destinations" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Concierge Support" },
];

const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const StatsBar = () => (
  <section className="relative z-20 bg-white">
    {/* Floating card that overlaps the hero */}
    <div className="max-w-5xl mx-auto px-6 mt-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white rounded-2xl shadow-[0_4px_60px_rgba(0,0,0,0.08)] border border-black/[0.04] px-6 py-10 md:px-10 md:py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.15 * i,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative text-center ${
                i < stats.length - 1
                  ? "md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:w-[1px] md:after:h-10 md:after:bg-black/[0.06]"
                  : ""
              }`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.03] mb-4">
                <Icon size={30} strokeWidth={1.5} className="text-black/70" />
              </div>

              {/* Number */}
              <div className="font-display text-3xl md:text-4xl font-semibold text-black tracking-tight leading-none">
                <CountUp target={value} suffix={suffix} />
              </div>

              {/* Label */}
              <p className="font-body text-[13px] text-black/40 mt-2 tracking-wide">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Bottom breathing room */}
    <div className="h-16 md:h-20" />
  </section>
);

export default StatsBar;