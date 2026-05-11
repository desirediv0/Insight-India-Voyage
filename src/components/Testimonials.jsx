"use client";
import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "We did the Golden Triangle with Insight India Voyage and honestly it was one of our best trips. The guide Vikram was incredibly knowledgeable—he didn't just show us the Taj Mahal, he told us stories that made it come alive.",
    name: "Sarah Mitchell",
    role: "London, UK",
  },
  {
    text: "Booked the Rajasthan tour for our anniversary. Every hotel was hand-picked and stunning—the lake palace in Udaipur was a dream. Priya from the team was always a WhatsApp message away.",
    name: "Rajesh Sharma",
    role: "Mumbai, India",
  },
  {
    text: "Kerala backwaters were magical. The houseboat they arranged was private and the food onboard was incredible—fresh fish curry I still think about. They really listen to what you want.",
    name: "David & Emma Thompson",
    role: "New York, USA",
  },
  {
    text: "Traveled solo to Varanasi and was a bit nervous but the team made everything seamless. The morning boat ride on the Ganges at sunrise was life-changing. Really well organized trip.",
    name: "Tanaka Yuki",
    role: "Tokyo, Japan",
  },
  {
    text: "Third time booking with Insight India Voyage and they keep getting better. This time we did Nepal—Kathmandu, Pokhara, the works. The flight to see Everest was a highlight.",
    name: "Amit Verma",
    role: "Delhi, India",
  },
  {
    text: "The Spiti Valley expedition was rugged but rewarding. Insight India Voyage handled the logistics perfectly—oxygen cylinders, local mechanics, and the best homestays in Kaza.",
    name: "Aarav Mehta",
    role: "Bangalore, India",
  },
  {
    text: "Seeing the tigers in Ranthambore was the highlight of our year. Our driver was an expert tracker. Everything from the permits to the safari timings was handled flawlessly.",
    name: "James & Chloe",
    role: "Sydney, Australia",
  },
  {
    text: "Varanasi during Dev Deepawali is a sight to behold. Insight India Voyage secured us a private boat away from the crowds, allowing us to soak in the spirituality safely.",
    name: "Sophie Lefebvre",
    role: "Paris, France",
  },
  {
    text: "The food tour in Old Delhi was a sensory explosion! I felt completely safe and guided through the narrowest lanes. Every street food recommendation was a winner.",
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
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-slate-600 font-medium">4.9/5 Rating on Google Travel</span>
          </div>
          <p className="text-center mt-6 text-slate-600 text-lg leading-relaxed">
            Real experiences from travelers who explored India with Insight India Voyage. Read our verified reviews from around the globe.
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