"use client";
import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "We did the Golden Triangle with Insight India Voyage and honestly it was one of our best trips. The guide Vikram was incredibly knowledgeable—he didn't just show us the Taj Mahal, he told us stories that made it come alive.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    name: "Sarah Mitchell",
    role: "London, UK",
  },
  {
    text: "Booked the Rajasthan tour for our anniversary. Every hotel was hand-picked and stunning—the lake palace in Udaipur was a dream. Priya from the team was always a WhatsApp message away.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    name: "Rajesh Sharma",
    role: "Mumbai, India",
  },
  {
    text: "Kerala backwaters were magical. The houseboat they arranged was private and the food onboard was incredible—fresh fish curry I still think about. They really listen to what you want.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    name: "David & Emma Thompson",
    role: "New York, USA",
  },
  {
    text: "Traveled solo to Varanasi and was a bit nervous but the team made everything seamless. The morning boat ride on the Ganges at sunrise was life-changing. Really well organized trip.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    name: "Tanaka Yuki",
    role: "Tokyo, Japan",
  },
  {
    text: "Third time booking with Insight India Voyage and they keep getting better. This time we did Nepal—Kathmandu, Pokhara, the works. The flight to see Everest was a highlight.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
    name: "Amit Verma",
    role: "Delhi, India",
  },
  {
    text: "The Spiti Valley expedition was rugged but rewarding. Insight India Voyage handled the logistics perfectly—oxygen cylinders, local mechanics, and the best homestays in Kaza.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    name: "Aarav Mehta",
    role: "Bangalore, India",
  },
  {
    text: "Seeing the tigers in Ranthambore was the highlight of our year. Our driver was an expert tracker. Everything from the permits to the safari timings was handled flawlessly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    name: "James & Chloe",
    role: "Sydney, Australia",
  },
  {
    text: "Varanasi during Dev Deepawali is a sight to behold. Insight India Voyage secured us a private boat away from the crowds, allowing us to soak in the spirituality safely.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    name: "Sophie Lefebvre",
    role: "Paris, France",
  },
  {
    text: "The food tour in Old Delhi was a sensory explosion! I felt completely safe and guided through the narrowest lanes. Every street food recommendation was a winner.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop",
    name: "Lucas Müller",
    role: "Berlin, Germany",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[640px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <span className="bg-primary/10 text-primary border border-primary/20 py-1.5 px-4 rounded-full text-sm font-medium tracking-wide uppercase">
              Traveler Stories
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-slate-900 leading-[1.1]">
            What Our Travelers Say
          </h2>
          <p className="text-center mt-6 text-slate-600 text-lg leading-relaxed">
            Real experiences from adventurers who explored India and beyond with Insight India Voyage.
          </p>
        </motion.div>

        <div className="flex justify-center gap-8 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[840px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={20} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={25} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={22} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;