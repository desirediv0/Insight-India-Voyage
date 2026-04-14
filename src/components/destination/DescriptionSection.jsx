"use client";

import { motion } from "framer-motion";

const DescriptionSection = ({ content, quickFacts }) => {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-[2] lg:pr-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-black/20" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-black/50 font-semibold">
                Overview
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-black font-semibold tracking-tight leading-tight mb-10">
              Experience the Magic
            </h2>
            
            <div className="font-body text-[17px] text-black/60 leading-relaxed font-light space-y-7">
              {content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Quick Facts Sidebar */}
          {quickFacts && quickFacts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1"
            >
              <div className="bg-neutral-50 rounded-[32px] p-8 lg:p-10 border border-black/[0.04]">
                <h3 className="font-display text-2xl font-medium text-black mb-8 border-b border-black/5 pb-6">
                  At a Glance
                </h3>
                
                <div className="space-y-8">
                  {quickFacts.map((fact, idx) => (
                    <div key={idx} className="group">
                      <p className="font-body text-[11px] uppercase tracking-[0.25em] text-black/40 font-semibold mb-2">
                        {fact.label}
                      </p>
                      <p className="font-body text-lg text-black/80 font-medium group-hover:text-black transition-colors">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
