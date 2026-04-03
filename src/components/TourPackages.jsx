"use client";

import {  useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, ArrowRight, Clock, MapPin } from "lucide-react";

const tours = [
  { name: "Golden Triangle Tour", route: "Delhi → Agra → Jaipur", days: "5 Days", nights: "4 Nights", rating: 4.9, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&q=80" },
  { name: "Royal Rajasthan", route: "Jaipur → Jodhpur → Udaipur → Jaisalmer", days: "9 Days", nights: "8 Nights", rating: 4.8, image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80" },
  { name: "Kerala Bliss", route: "Cochin → Munnar → Alleppey", days: "6 Days", nights: "5 Nights", rating: 4.9, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80" },
  { name: "Spiritual Varanasi", route: "Delhi → Varanasi → Bodhgaya", days: "5 Days", nights: "4 Nights", rating: 4.7, image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&q=80" },
  { name: "Himalayan Escape", route: "Delhi → Manali → Shimla", days: "7 Days", nights: "6 Nights", rating: 4.8, image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" },
  { name: "Nepal Adventure", route: "Kathmandu → Pokhara → Chitwan", days: "8 Days", nights: "7 Nights", rating: 4.9, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80" },
];

const TourPackages = () => {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setActive((p) => (p + 1) % tours.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setActive((p) => (p - 1 + tours.length) % tours.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const getVisibleTours = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (active + i) % tours.length;
      items.push({ ...tours[idx], idx });
    }
    return items;
  };

  const visible = getVisibleTours();

  return (
    <section className="bg-[#f8f8f8] py-12 md:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/30 mb-5">
              Curated Experiences
            </span>
            <h2 className="font-display text-3xl md:text-[2.75rem] lg:text-5xl font-semibold text-black tracking-tight leading-[1.1]">
              Signature Tour Packages
            </h2>
            <p className="mt-5 font-body text-[15px] text-black/40 font-light max-w-md">
              Handcrafted itineraries designed for the discerning traveler
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <span className="font-body text-[13px] text-black/50 font-light mr-3 tabular-nums">
              {String(active + 1).padStart(2, "0")} / {String(tours.length).padStart(2, "0")}
            </span>
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:border-black/30 hover:text-black hover:bg-black/[0.02] transition-all duration-300 active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-black/10 flex items-center justify-center text-black/40 hover:border-black/30 hover:text-black hover:bg-black/[0.02] transition-all duration-300 active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((tour, i) => (
            <motion.div
              key={`${tour.idx}-${active}`}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                {/* View Tour — center on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-white text-black font-body text-[12px] font-medium rounded-full px-5 py-2.5 flex items-center gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 shadow-lg">
                    View Tour <ArrowRight size={12} />
                  </span>
                </div>

                {/* Rating */}
                <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-medium text-black/60 flex items-center gap-1">
                  <Star size={10} fill="currentColor" className="text-amber-400" />
                  {tour.rating}
                </span>
              </div>

              {/* Info */}
              <div className="pt-5 px-0.5">
                <h3 className="font-display text-[1.1rem] font-semibold text-black tracking-tight">
                  {tour.name}
                </h3>

                <div className="flex items-center gap-1.5 mt-3">
                  <MapPin size={12} strokeWidth={1.5} className="text-black/50 flex-shrink-0" />
                  <span className="font-body text-[12px] text-black/50 font-light">
                    {tour.route}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mt-2">
                  <Clock size={12} strokeWidth={1.5} className="text-black/50 flex-shrink-0" />
                  <span className="font-body text-[12px] text-black/50 font-light">
                    {tour.days} · {tour.nights}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="flex md:hidden items-center justify-center gap-3 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 active:scale-95 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="font-body text-[13px] text-black/25 font-light tabular-nums min-w-[50px] text-center">
            {String(active + 1).padStart(2, "0")} / {String(tours.length).padStart(2, "0")}
          </span>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/40 active:scale-95 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-10 max-w-xs mx-auto h-[1px] bg-black/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black/20 rounded-full"
            animate={{ width: `${((active + 1) / tours.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default TourPackages;