"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    text: "We did the Golden Triangle with Insight India Voyage and honestly it was one of our best trips. The guide Vikram was incredibly knowledgeable — he didn't just show us the Taj Mahal, he told us stories that made it come alive. Hotels were top notch. Only small thing — the Delhi to Agra drive is long, but they made it comfortable.",
    name: "Sarah Mitchell",
    location: "London, United Kingdom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    rating: 5,
    date: "March 2025",
    platform: "google",
  },
  {
    text: "Booked the Rajasthan tour for our anniversary. Every hotel was hand-picked and stunning — the lake palace in Udaipur was a dream. Priya from the team was always a WhatsApp message away whenever we needed anything. The pricing was very fair for the level of luxury we got.",
    name: "Rajesh Sharma",
    location: "Mumbai, India",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    rating: 5,
    date: "February 2025",
    platform: "tripadvisor",
  },
  {
    text: "Kerala backwaters were magical. The houseboat they arranged was private and the food onboard was incredible — fresh fish curry I still think about. They also helped us extend our trip to Munnar last minute which I really appreciated. Would definitely use them again.",
    name: "David & Emma Thompson",
    location: "New York, USA",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    rating: 5,
    date: "January 2025",
    platform: "google",
  },
  {
    text: "Traveled solo to Varanasi and was a bit nervous but the team made everything seamless. The morning boat ride on the Ganges at sunrise was life-changing. My guide was respectful of the spiritual nature of the place. Really well organized trip overall.",
    name: "Tanaka Yuki",
    location: "Tokyo, Japan",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    rating: 4,
    date: "December 2024",
    platform: "tripadvisor",
  },
  {
    text: "Third time booking with Insight India Voyage and they keep getting better. This time we did Nepal — Kathmandu, Pokhara, the works. The flight to see Everest was a highlight. They really listen to what you want and don't push unnecessary add-ons.",
    name: "Amit Verma",
    location: "Delhi, India",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    rating: 5,
    date: "November 2024",
    platform: "google",
  },
];

const PlatformBadge = ({ platform }) => {
  if (platform === "google") {
    return (
      <div className="flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" className="flex-shrink-0">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <span className="text-[11px] text-black/30 font-light">Google</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 24 24" className="flex-shrink-0">
        <circle cx="12" cy="12" r="12" fill="#34E0A1" />
        <circle cx="12" cy="8" r="3.5" fill="white" />
        <path d="M12 13c-4 0-7 2-7 4.5V20h14v-2.5c0-2.5-3-4.5-7-4.5z" fill="white" />
      </svg>
      <span className="text-[11px] text-black/30 font-light">Tripadvisor</span>
    </div>
  );
};

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? "text-amber-400" : "text-black/10"}
        fill={i < rating ? "currentColor" : "none"}
        strokeWidth={i < rating ? 0 : 1.5}
      />
    ))}
  </div>
);

const Testimonials = () => (
  <section className="bg-white py-12 md:py-16">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader
        label="Reviews"
        heading="What Our Travelers Say"
        subtitle="Real reviews from real travelers across the world"
        dark={false}
      />

      {/* Aggregate score */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center gap-6 mb-14"
      >
        <div className="text-center">
          <span className="font-display text-4xl font-semibold text-black tracking-tight">
            4.9
          </span>
          <div className="flex items-center gap-1 mt-1 justify-center">
            <StarRating rating={5} />
          </div>
          <span className="text-[11px] text-black/30 font-light mt-1 block">
            Based on 200+ reviews
          </span>
        </div>
        <div className="h-12 w-[1px] bg-black/[0.06]" />
        <div className="flex items-center gap-4">
          <PlatformBadge platform="google" />
          <PlatformBadge platform="tripadvisor" />
        </div>
      </motion.div>

      {/* Review cards — masonry-ish 2-3 column */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.08,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="break-inside-avoid border border-black/[0.06] rounded-2xl p-6 md:p-7 hover:border-black/[0.1] transition-colors duration-300"
          >
            {/* Top row: rating + platform */}
            <div className="flex items-center justify-between mb-4">
              <StarRating rating={t.rating} />
              <PlatformBadge platform={t.platform} />
            </div>

            {/* Review text */}
            <p className="font-body text-[14px] text-black/60 leading-[1.75] font-light">
              {t.text}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 pt-5 border-t border-black/[0.04]">
              <Image
                src={t.avatar}
                alt={t.name}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-body text-[13px] font-medium text-black/80">
                  {t.name}
                </p>
                <p className="font-body text-[11px] text-black/30 font-light">
                  {t.location} · {t.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;