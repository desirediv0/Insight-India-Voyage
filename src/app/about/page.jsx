"use client";

import { motion } from "framer-motion";
import { Compass, Heart, Lightbulb, Target, Globe, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  { icon: Target, title: "Excellence", desc: "We set the highest standards in everything we do, from planning to execution", num: "01" },
  { icon: Heart, title: "Integrity", desc: "Transparent dealings and honest relationships are the foundation of our business", num: "02" },
  { icon: Lightbulb, title: "Innovation", desc: "Constantly evolving our offerings to create fresh, unique travel experiences", num: "03" },
  { icon: Compass, title: "Passion", desc: "Our love for travel and India drives every journey we craft", num: "04" },
  { icon: Globe, title: "Sustainability", desc: "Committed to responsible tourism that preserves India's natural and cultural heritage", num: "05" },
  { icon: Users, title: "Community", desc: "Supporting local communities and artisans through meaningful travel connections", num: "06" },
];

const milestones = [
  { year: "2007", text: "Founded in New Delhi by Mr. Dinesh Baloni" },
  { year: "2012", text: "Recognized by the Government of India as official tour operator" },
  { year: "2016", text: "Expanded to international markets across 20+ countries" },
  { year: "2020", text: "Launched curated luxury experiences across the Indian Subcontinent" },
  { year: "2024", text: "Serving travelers from 40+ countries with 10,000+ happy journeys" },
];

const team = [
  {
    name: "Rahul Baloni",
    role: "Partner",
    bio: "Rahul Baloni brings a strong understanding of destination operations, itinerary planning, and travel logistics, with a focus on creating seamless and memorable journeys across India. With a passion for showcasing India’s diverse landscapes, heritage, and cultural richness, Rahul works closely on developing personalized travel experiences that reflect both quality and authenticity. His hands-on approach and commitment to service make him a trusted partner for travel professionals seeking reliable ground support in India.",
  },
  {
    name: "Anshul Baloni",
    role: "Partner",
    bio: "Anshul Baloni focuses on travel partnerships, client relationships, and curated itinerary development for international travel advisors and agencies. With a strong interest in luxury and tailor-made travel, Anshul is dedicated to building long-term collaborations and creating journeys that are thoughtful, well-paced, and aligned with each client’s expectations. His approach combines responsiveness, creativity, and a deep appreciation for meaningful travel experiences across India and the Indian Subcontinent.",
  }
];

const easeOut = [0.16, 1, 0.3, 1];

const About = () => (
  <>
    {/* ── Hero ── */}
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1920&q=80"
          alt="India landscape"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/50" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-white/40 font-light mb-6"
          >
            <span className="w-8 h-[1px] bg-white/20" />
            Our Story
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: easeOut }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.05]"
            >
              Crafting Journeys
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.35, duration: 1, ease: easeOut }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/50 to-white/25 tracking-tight leading-[1.05]"
            >
              Since 2007
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: easeOut }}
            className="font-body text-sm md:text-base text-white/40 font-light max-w-lg mt-8 leading-relaxed"
          >
            A legacy of luxury travel, built on passion, expertise, and an unwavering commitment to extraordinary experiences.
          </motion.p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>

    {/* ── Who We Are ── */}
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/30 mb-5">
              Who We Are
            </span>
            <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-black tracking-tight leading-[1.15] mb-8">
              A Passion for
              <br />
              Extraordinary Travel
            </h2>

            <div className="space-y-5 font-body text-[15px] text-black/50 font-light leading-[1.8]">
              <p>
                Founded in 2007 by{" "}
                <span className="text-black font-medium">Mr. Dinesh Baloni</span>,
                Insight India Voyage was born from a vision to showcase the beauty 
                of India through the lens of true luxury.
              </p>
              <p>
                From tailor-made cultural journeys to ultra-luxury escapes, we are a{" "}
                <span className="text-black font-medium">Government of India recognized DMC</span>{" "}
                trusted by travelers and travel advisors across more than 40 countries.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-10 pt-8 border-t border-black/[0.06] grid grid-cols-3 gap-6">
              {[
                { num: "18+", label: "Years" },
                { num: "40+", label: "Countries" },
                { num: "10K+", label: "Travelers" },
              ].map((s) => (
                <div key={s.label}>
                  <span className="font-display text-2xl md:text-3xl font-semibold text-black tracking-tight">
                    {s.num}
                  </span>
                  <p className="font-body text-[11px] text-black/30 mt-1 uppercase tracking-widest">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: easeOut }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black/5 relative">
              <Image
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
                alt="Taj Mahal"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── Leadership ── */}
    <section className="bg-white py-12 md:py-16 border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="mb-16"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/30 mb-5">
            Our Leadership
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-black tracking-tight leading-[1.1]">
            The Minds Behind the Magic
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.7, ease: easeOut }}
              className="flex flex-col"
            >
              <h3 className="font-display text-2xl font-semibold text-black mb-1">
                {member.name}
              </h3>
              <p className="font-body text-[13px] uppercase tracking-widest text-black/40 font-medium mb-6">
                {member.role}
              </p>
              <p className="font-body text-[15px] text-black/60 font-light leading-[1.8]">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Founder Quote ── */}
    <section className="bg-[#f8f8f8] py-12 md:py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/40 mb-8">
            From Our Founder
          </span>

          <p className="font-display text-xl md:text-3xl  text-black/70 leading-[1.7] font-normal tracking-tight">
            &quot;Travel is not just about destinations &mdash; it&apos;s about the stories you
            collect, the cultures you embrace, and the memories that stay
            forever.&quot;
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <div className="w-[1px] h-8 bg-black/10" />
            <div className="text-left">
              <p className="font-body text-[13px] font-medium text-black/70">
                Mr. Dinesh Baloni
              </p>
              <p className="font-body text-[11px] text-black/30 font-light">
                Founder & CEO
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Timeline ── */}
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/50 mb-5">
            Our Journey
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-black tracking-tight leading-[1.1]">
            Milestones Along the Way
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-black/[0.06]" />

          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: easeOut }}
              className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-1 w-[9px] h-[9px] rounded-full bg-black/50 border-2 border-white z-10" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <span className="font-display text-xl font-semibold text-black/40 tracking-wide">
                  {m.year}
                </span>
                <p className="font-body text-lg text-black/60 font-light leading-relaxed mt-1">
                  {m.text}
                </p>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Values ── */}
    <section className="bg-[#f8f8f8] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/30 mb-5">
            Our Values
          </span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-black tracking-tight leading-[1.1]">
            What Drives Us Forward
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-black/[0.06]">
          {values.map(({ icon: Icon, title, desc, num }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: easeOut }}
              className="group p-8 md:p-10 border-r border-b border-black/[0.06]"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-display text-lg tracking-widest text-black/30 font-medium">
                  {num}
                </span>
                <div className="w-[1px] h-3.5 bg-black/10" />
                <div className="w-10 h-10 rounded-full bg-black/[0.03] flex items-center justify-center group-hover:bg-black/[0.06] transition-colors duration-500">
                  <Icon size={17} strokeWidth={1.5} className="text-black/60" />
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-black tracking-tighter mb-3">
                {title}
              </h3>
              <p className="font-body text-base text-black/60 leading-[1.7] font-light">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="bg-black py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            Let&apos;s Plan Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-white/50 to-white/25">
              Next Adventure
            </span>
          </h2>
          <p className="font-body text-[15px] text-white/35 font-light max-w-md mx-auto mb-10">
            Get in touch with our travel experts and start crafting your perfect journey.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-black font-body text-sm font-medium rounded-full px-10 py-4 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            Get In Touch
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  </>
);

export default About;