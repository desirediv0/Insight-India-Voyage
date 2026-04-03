"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const FloatingControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const audioRef = useRef(null);

  /* ── Scroll to top visibility ── */
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Auto-play on first user interaction ──
     Browsers block autoplay with sound until user interacts.
     We listen for first click/scroll/touch, then start music. */
  const startMusic = useCallback(() => {
    if (hasInteracted) return;
    setHasInteracted(true);

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35; /* Keep it subtle — background music */
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {
      /* Browser still blocked — user can click button manually */
      setIsPlaying(false);
    });
  }, [hasInteracted]);

  useEffect(() => {
    const events = ["click", "scroll", "touchstart", "keydown"];
    events.forEach((e) => window.addEventListener(e, startMusic, { once: true, passive: true }));
    return () => {
      events.forEach((e) => window.removeEventListener(e, startMusic));
    };
  }, [startMusic]);

  /* ── Toggle play/pause ── */
  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.35;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Audio — loop enabled, preloaded */}
      <audio ref={audioRef} loop preload="auto">
      
        <source src="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/music.mp3" type="audio/mpeg" />
      </audio>

      {/* ── Floating controls ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Scroll to top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.3 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white border border-black/[0.08] flex items-center justify-center text-black/40 hover:text-black hover:border-black/20 shadow-lg shadow-black/[0.04] transition-all duration-300"
            >
              <ArrowUp size={15} strokeWidth={1.5} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Music toggle */}
        <button
          onClick={toggleMusic}
          className="group relative w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-500 hover:scale-105"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {/* Pulsing rings when playing */}
          {isPlaying && (
            <>
              <span
                className="absolute rounded-full border border-white/10"
                style={{
                  inset: "-6px",
                  animation: "pulse-ring 2s ease-out infinite",
                }}
              />
              <span
                className="absolute rounded-full border border-white/5"
                style={{
                  inset: "-12px",
                  animation: "pulse-ring 2s ease-out infinite 0.5s",
                }}
              />
            </>
          )}

          {/* Equalizer / static bars */}
          <div className="relative z-10 flex items-end gap-[3px] h-[14px]">
            {isPlaying ? (
              <>
                <span className="w-[2.5px] bg-white rounded-full" style={{ animation: "eq-bar 0.8s ease-in-out infinite alternate", height: "6px" }} />
                <span className="w-[2.5px] bg-white rounded-full" style={{ animation: "eq-bar 0.8s ease-in-out infinite alternate 0.2s", height: "12px" }} />
                <span className="w-[2.5px] bg-white rounded-full" style={{ animation: "eq-bar 0.8s ease-in-out infinite alternate 0.4s", height: "8px" }} />
                <span className="w-[2.5px] bg-white rounded-full" style={{ animation: "eq-bar 0.8s ease-in-out infinite alternate 0.1s", height: "14px" }} />
              </>
            ) : (
              <>
                <span className="w-[2.5px] h-[4px] bg-white/50 rounded-full" />
                <span className="w-[2.5px] h-[4px] bg-white/50 rounded-full" />
                <span className="w-[2.5px] h-[4px] bg-white/50 rounded-full" />
                <span className="w-[2.5px] h-[4px] bg-white/50 rounded-full" />
              </>
            )}
          </div>
        </button>
      </div>

      {/* Keyframes */}
      <style jsx global>{`
        @keyframes eq-bar {
          0% { height: 4px; }
          100% { height: 14px; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default FloatingControls;