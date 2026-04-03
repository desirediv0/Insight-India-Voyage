"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Shield } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Compass,
    title: "Travel Experts",
    desc: "With 18+ years of experience, our seasoned travel experts craft journeys that go beyond the ordinary. Every detail is meticulously planned.",
    num: "01",
  },
  {
    icon: Heart,
    title: "Warm & Friendly Service",
    desc: "From your first inquiry to your return home, experience genuine warmth and personalized attention at every touchpoint.",
    num: "02",
  },
  {
    icon: Shield,
    title: "Exceptional Value",
    desc: "Luxury doesn't mean overpriced. We deliver five-star experiences with transparent pricing and unmatched value for your investment.",
    num: "03",
  },
];

const WhyChooseUs = () => (
  <section className="bg-white py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        label="Why Insight India Voyage"
        heading="The Art of Exceptional Travel"
        dark={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 border-t border-black/[0.06]">
        {features.map(({ icon: Icon, title, desc, num }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: i * 0.12,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`group relative py-12 md:py-14 md:px-10 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 border-black/[0.06] ${
              i < features.length - 1 ? "md:border-r md:border-black/[0.06]" : ""
            }`}
          >
            {/* Number + Icon row */}
            <div className="flex items-center gap-4 mb-8">
              <span className="font-display text-[20px] tracking-widest text-black/40 font-medium">
                {num}
              </span>
              <div className="w-[1px] h-4 bg-black/10" />
              <div className="w-12 h-12 rounded-full bg-black/[0.03] flex items-center justify-center group-hover:bg-black/[0.06] transition-colors duration-500">
                <Icon
                  size={25}
                  strokeWidth={1.5}
                  className="text-black/60 group-hover:text-black transition-colors duration-500"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-semibold text-black tracking-tight mb-4">
              {title}
            </h3>

            {/* Description */}
            <p className="font-body text-[14px] text-black/60 leading-[1.7] font-light">
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;