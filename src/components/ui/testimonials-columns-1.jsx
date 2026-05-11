"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export const TestimonialsColumn = (props) => {
  const { className, testimonials, duration = 10 } = props;
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-10 rounded-3xl border border-black/5 bg-white shadow-lg shadow-black/5 max-w-xs w-full" 
                  key={i}
                >
                  <div className="text-sm leading-relaxed text-black/70 italic">&quot;{text}&quot;</div>
                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      width={44}
                      height={44}
                      src={image}
                      alt={name}
                      className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/10"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold tracking-tight leading-tight text-black">{name}</div>
                      <div className="text-xs leading-tight opacity-50 tracking-tight text-black">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
