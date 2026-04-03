"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const FloatingControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const audioRef = useRef(null);
  const hasStarted = useRef(false);

  /* ── Scroll to top ── */
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Fade in helper ── */
  const fadeIn = (audio, targetVol = 0.35) => {
    audio.volume = 0;
    const interval = setInterval(() => {
      if (audio.volume >= targetVol - 0.01) {
        audio.volume = targetVol;
        clearInterval(interval);
      } else {
        audio.volume = Math.min(audio.volume + 0.05, targetVol);
      }
    }, 80);
  };

  /* ── Core play function ── */
  const startAudio = async () => {
    if (hasStarted.current) return;
    const audio = audioRef.current;
    if (!audio) return;

    try {
      audio.muted = true;
      audio.volume = 0;
      await audio.play();
      hasStarted.current = true;
      audio.muted = false;
      fadeIn(audio);
      setIsPlaying(true);
    } catch {
      // blocked by browser — gesture fallback will handle
    }
  };

  /* ── AUTO PLAY after 1.2s delay on mount ── */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;
    audio.preload = "auto";

    // Try after 1.2s — gives browser time to settle + audio to buffer
    const timer = setTimeout(() => {
      startAudio();
    }, 1200);

    // Also try when audio is loaded (whichever comes first)
    audio.addEventListener("canplaythrough", startAudio, { once: true });

    return () => {
      clearTimeout(timer);
      audio.removeEventListener("canplaythrough", startAudio);
    };
  }, []);

  /* ── Gesture fallback (no "click" to avoid toggle conflict) ── */
  useEffect(() => {
    const handleGesture = () => {
      if (!hasStarted.current) startAudio();
    };

    const events = ["scroll", "touchstart", "keydown", "mousemove", "pointerdown"];
    events.forEach((e) =>
      window.addEventListener(e, handleGesture, { once: true, passive: true })
    );
    return () => {
      events.forEach((e) => window.removeEventListener(e, handleGesture));
    };
  }, []);

  /* ── Toggle play / pause ── */
  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // First ever click — start music
    if (!hasStarted.current) {
      try {
        audio.muted = false;
        audio.volume = 0;
        await audio.play();
        hasStarted.current = true;
        fadeIn(audio);
        setIsPlaying(true);
      } catch {}
      return;
    }

    // Normal pause / resume
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {}
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <audio ref={audioRef} loop preload="auto" muted playsInline>
        <source
          src="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/nik-astro/music.mp3"
          type="audio/mpeg"
        />
      </audio>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

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

        <button
          onClick={toggleMusic}
          className="group relative w-11 h-11 rounded-full bg-black flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-500 hover:scale-105"
        >
          {isPlaying && (
            <>
              <span
                className="absolute rounded-full border border-white/10"
                style={{ inset: "-6px", animation: "pulse-ring 2s ease-out infinite" }}
              />
              <span
                className="absolute rounded-full border border-white/5"
                style={{ inset: "-12px", animation: "pulse-ring 2s ease-out infinite 0.5s" }}
              />
            </>
          )}

          <div className="relative z-10 flex items-end gap-[3px] h-[14px]">
            {isPlaying ? (
              <>
                <span className="w-[2.5px] bg-white rounded-full animate-[eq-bar_0.8s_ease-in-out_infinite_alternate]"      style={{ height: "6px" }} />
                <span className="w-[2.5px] bg-white rounded-full animate-[eq-bar_0.8s_ease-in-out_infinite_alternate_0.2s]" style={{ height: "12px" }} />
                <span className="w-[2.5px] bg-white rounded-full animate-[eq-bar_0.8s_ease-in-out_infinite_alternate_0.4s]" style={{ height: "8px" }} />
                <span className="w-[2.5px] bg-white rounded-full animate-[eq-bar_0.8s_ease-in-out_infinite_alternate_0.1s]" style={{ height: "14px" }} />
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

      <style jsx global>{`
        @keyframes eq-bar {
          0%   { height: 4px; }
          100% { height: 14px; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0;   }
        }
      `}</style>
    </>
  );
};

export default FloatingControls;