"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Link from "next/link";


const HeroSlider = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.play().catch(() => {
        // Autoplay may be blocked by browser policy without user interaction
        console.warn("Video autoplay was blocked or failed to start.");
      });

      // Safety check: If video is already loaded/ready (e.g., from cache)
      if (vid.readyState >= 3) {
        setVideoLoaded(true);
      }
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#0a0a0a]">
      {/* ── Background Video ── */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          onLoadedMetadata={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-[2s] ${videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          poster="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80"
        >

          <source
            src="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/download.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* ── Cinematic Overlays ── */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* ── Subtle grain texture ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">


        {/* Tagline pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/60 font-light">
            <span className="w-8 h-[1px] bg-white/30" />
            Travel · Explore · Capture
            <span className="w-8 h-[1px] bg-white/30" />
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold text-white leading-[0.95] tracking-tight"
          >
            Discover India
          </motion.h1>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.65, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2rem,6vw,4.5rem)] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/60 to-white/40 leading-[0.95] tracking-tight"
          >
            Like Never Before
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-sm md:text-base text-white/50 font-light max-w-md mb-10 leading-relaxed tracking-wide"
        >
          Luxury journeys crafted with passion, curated for the extraordinary traveler since 2007.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/#destinations"
            className="group relative bg-white text-black font-body text-sm font-medium rounded-full px-10 py-4 flex items-center gap-3 transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Explore Tours
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <button className="group font-body text-sm font-light text-white/70 rounded-full px-10 py-4 flex items-center gap-3 border border-white/[0.12] transition-all duration-500 hover:border-white/30 hover:text-white backdrop-blur-sm">
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300">
              <Play size={10} fill="white" className="ml-0.5" />
            </span>
            Watch Our Story
          </button>
        </motion.div>
      </div>

      {/* ── Bottom Fade Line ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-40 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/30 font-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* ── Side accent lines (desktop) ── */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-12 z-10">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
      </div>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-12 z-10">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 80 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
      </div>
    </section>
  );
};

export default HeroSlider;