"use client";

import { motion } from "framer-motion";
import { Compass, Map, MessageCircle, MapPin, CheckCircle, Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Compass,
    title: "Experienced Travel experts",
    desc: "With years of experience, our seasoned travel experts craft journeys that go beyond the ordinary.",
    num: "01",
  },
  {
    icon: Map,
    title: "Tailor made itineraries",
    desc: "Thoughtfully designed itineraries tailored specifically to your unique preferences and style.",
    num: "02",
  },
  {
    icon: MessageCircle,
    title: "Fast, clear & reliable",
    desc: "Seamless communication at every step, providing you with clarity and peace of mind.",
    num: "03",
  },
  {
    icon: MapPin,
    title: "Strong local expertise",
    desc: "Unmatched knowledge across India and the subcontinent to offer authentic experiences.",
    num: "04",
  },
  {
    icon: CheckCircle,
    title: "Seamless on ground execution",
    desc: "Flawless logistics and execution, allowing you to simply enjoy your journey without worry.",
    num: "05",
  },
  {
    icon: Star,
    title: "Curated stays & experiences",
    desc: "Handpicked accommodations and exclusive activities that redefine exceptional travel.",
    num: "06",
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
            className={`group relative py-12 md:py-14 md:px-10 border-b border-black/[0.06] ${
              i % 3 !== 2 ? "md:border-r md:border-black/[0.06]" : ""
            } ${i % 3 === 0 ? "md:pl-0" : ""} ${
              i % 3 === 2 ? "md:pr-0" : ""
            } ${i >= 3 ? "md:border-b-0" : ""}`}
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