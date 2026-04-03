"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Who We Are", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-[72px] px-6">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/logo.png"
              alt="Insight India Voyage"
              width={90}
              height={90}
              className={`object-contain transition-all duration-500 `}
            />
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative font-body text-base tracking-wide transition-colors duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-black"
                        : "text-black/80 hover:text-black"
                      : isActive
                        ? "text-white"
                        : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className={`absolute -bottom-1.5 left-0 right-0 h-[1.5px] rounded-full ${
                        scrolled ? "bg-black" : "bg-white"
                      }`}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className={`font-body text-[13px] font-medium rounded-full px-7 py-2.5 transition-all duration-500 ${
                scrolled
                  ? "bg-black text-white hover:bg-black/85"
                  : "bg-white text-black hover:bg-white/90"
              }`}
            >
              Plan Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl"
            >
              {/* Close */}
              <div className="flex items-center justify-between h-[72px] px-6 border-b border-black/[0.04]">
                <Image
                  src="/logo.png"
                  alt="Insight India Voyage"
                  width={80}
                  height={80}
                  className="object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-black/40 p-2 hover:text-black transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links */}
              <div className="px-6 pt-8">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + i * 0.06,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.path}
                        className={`block py-4 font-display text-2xl tracking-tight transition-colors ${
                          isActive ? "text-black" : "text-black/30"
                        } ${
                          i < navLinks.length - 1
                            ? "border-b border-black/[0.04]"
                            : ""
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                  className="mt-10"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-black text-white font-body text-sm font-medium rounded-full px-8 py-4 hover:bg-black/85 transition-colors"
                  >
                    Plan Your Journey
                  </Link>
                </motion.div>

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="mt-12 pt-8 border-t border-black/[0.04]"
                >
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-black/25 mb-3">
                    Get in touch
                  </p>
                  <a
                    href="mailto:info@insightindiavoyage.com"
                    className="font-body text-[14px] text-black/50 hover:text-black transition-colors"
                  >
                    info@insightindiavoyage.com
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;