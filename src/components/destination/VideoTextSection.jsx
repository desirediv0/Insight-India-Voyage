"use client";

import { motion } from "framer-motion";

const VideoTextSection = ({ title, features, videoId }) => {
  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black mb-10">
            {title}
          </h2>
          
          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-black/[0.04]">
                  <span className="font-display text-lg text-black font-medium">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-black font-medium mb-2">
                    {feature.heading}
                  </h3>
                  <p className="font-body text-[15px] text-black/60 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Video */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 w-full"
        >
          <div className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="absolute inset-0 w-full h-full object-cover"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=0&controls=1&showinfo=0&rel=0&loop=1&playlist=${videoId}`}
              title="Destination Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTextSection;
