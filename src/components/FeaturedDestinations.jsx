"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

const destinations = [
  {
    title: "India",
    path: "/india",
    tours: "12 Curated Journeys",
    desc: "From royal palaces to sacred rivers, experience the timeless magic of incredible India",
    image: "/north-india.jpg",
  },
  {
    title: "Nepal, Bhutan & Sri Lanka",
    path: "/subcontinent",
    tours: "8 Exclusive Routes",
    desc: "Explore the spiritual heights of the Himalayas and the serene beauty of tropical island shores",
    image: "/nepal.jpg",
  },
];

const FeaturedDestinations = () => (
  <section id="destinations" className="bg-white py-12 md:py-16">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeader
        label="Destinations"
        heading="Where Will Your Journey Begin?"
        subtitle="Discover the most extraordinary destinations across India and its neighboring gems"
        dark={false}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {destinations.map((dest, i) => (
          <Link key={dest.title} href={dest.path}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/5">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Arrow icon — top right */}
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={14} className="text-white" />
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {/* Tour count */}
                  <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-white/80 font-light mb-2">
                    {dest.tours}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-2xl md:text-[1.65rem] font-semibold text-white tracking-tight leading-tight">
                    {dest.title}
                  </h3>

                  {/* Description — reveal on hover */}
                  <p className="font-body text-[13px] text-white/70 font-light leading-relaxed mt-3 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                    {dest.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturedDestinations;