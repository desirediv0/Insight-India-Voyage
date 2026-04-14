"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ImageCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (!images || images.length === 0) return null;

  return (
    <section className="py-8 md:py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  paginate(1);
                } else if (swipe > 10000) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
            >
              <Image
                src={images[index]}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10 opacity-0 md:opacity-100"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors z-10 opacity-0 md:opacity-100"
            onClick={() => paginate(1)}
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > index ? 1 : -1);
                  setIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === idx ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
