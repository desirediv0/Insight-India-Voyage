"use client";

import { motion } from "framer-motion";
import { Map, Utensils, Camera, Train, Leaf, Heart, Sun, Coffee, Users, Landmark, Mountain, Shield } from "lucide-react";

// Helper to map string icon names from data to actual Lucide components
const IconMap = {
  Map, Utensils, Camera, Train, Leaf, Heart, Sun, Coffee, Users, Landmark, Mountain, Shield
};

const Highlights = ({ highlights }) => {
  if (!highlights || highlights.length === 0) return null;

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-black/20" />
            <span className="font-body text-[10px] uppercase tracking-[0.25em] text-black/40 font-semibold">
              The Experience
            </span>
            <div className="h-px w-8 bg-black/20" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-black font-semibold tracking-tight">
            Journey Highlights
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = IconMap[item.icon] || Map;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-8 border border-black/[0.04] shadow-sm hover:shadow-xl hover:border-black/10 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-14 h-14 rounded-2xl bg-black/[0.03] flex items-center justify-center text-black mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-500">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-black mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] text-black/60 leading-relaxed font-light">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
