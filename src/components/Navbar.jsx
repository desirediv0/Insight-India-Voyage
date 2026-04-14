"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Destinations", type: "dropdown" },
  { name: "Who We Are", path: "/about" },
  { name: "Contact", path: "/contact" },
];

import { destinationCategories as destinationsData } from "@/data/destinations";

const MobileDropdown = ({ link, index, onClickLink }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1 + index * 0.06,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`py-4 ${
        index < navLinks.length - 1 ? "border-b border-black/[0.04]" : ""
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between font-display text-2xl tracking-tight text-black/80 hover:text-black transition-colors text-left"
      >
        {link.name}
        <ChevronDown
          size={22}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 pb-2 space-y-8 pl-4 border-l-2 border-black/5 ml-2 mt-2">
              {destinationsData.map((section) => (
                <div key={section.category}>
                  <h3 className="font-body text-[12px] uppercase tracking-widest text-black/30 font-semibold mb-4">
                    {section.category}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          onClick={onClickLink}
                          className="font-body text-lg text-black/70 hover:text-black transition-colors block"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownHovered, setDropdownHovered] = useState(false);
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

  // Check if current route is among destination paths to highlight navlink
  const isDestinationsActive = destinationsData.some((section) =>
    section.items.some((item) => pathname.startsWith(item.path))
  );

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || (dropdownHovered && !mobileOpen)
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
              className={`object-contain transition-all duration-500`}
            />
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                const isActive = isDestinationsActive;
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setDropdownHovered(true)}
                    onMouseLeave={() => setDropdownHovered(false)}
                  >
                    <button
                      className={`relative py-6 font-body text-base tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                        scrolled || dropdownHovered
                          ? isActive
                            ? "text-black"
                            : "text-black/80 hover:text-black"
                          : isActive
                            ? "text-white"
                            : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          dropdownHovered ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {dropdownHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                        >
                          <div className="bg-white rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-black/5 p-10 flex gap-16 w-max">
                            {destinationsData.map((section) => (
                              <div key={section.category} className="min-w-[140px]">
                                <h3 className="font-body text-[13px] uppercase tracking-[0.15em] text-black/40 font-semibold mb-6 flex items-center gap-2">
                                  {section.category}
                                  <div className="flex-1 h-px bg-black/5"></div>
                                </h3>
                                <ul className="space-y-4">
                                  {section.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.path}
                                        className="font-body text-[15px] font-medium text-black/60 hover:text-black hover:translate-x-1 transition-all duration-300 inline-block"
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`relative font-body text-base tracking-wide transition-colors duration-300 ${
                    scrolled || dropdownHovered
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
                        scrolled || dropdownHovered ? "bg-black" : "bg-white"
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
              className={`font-body text-[13px] font-medium rounded-full px-7 py-2.5 transition-all duration-500 shadow-sm ${
                scrolled || dropdownHovered
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
              scrolled || dropdownHovered ? "text-black" : "text-white"
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
              className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-sm bg-white shadow-2xl h-[100dvh] overflow-y-auto"
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
              <div className="px-6 pt-6 pb-20">
                {navLinks.map((link, i) => {
                  if (link.type === "dropdown") {
                    return (
                      <MobileDropdown
                        key={link.name}
                        link={link}
                        index={i}
                        onClickLink={() => setMobileOpen(false)}
                      />
                    );
                  }

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
                        onClick={() => setMobileOpen(false)}
                        className={`block py-4 font-display text-2xl tracking-tight transition-colors ${
                          isActive ? "text-black" : "text-black/40"
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
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center bg-black text-white font-body text-sm font-medium rounded-full px-8 py-4 hover:bg-black/85 transition-colors shadow-lg shadow-black/10"
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
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-black/30 font-semibold mb-3">
                    Get in touch
                  </p>
                  <a
                    href="mailto:info@insightindiavoyage.com"
                    className="font-body text-[14px] text-black/60 hover:text-black transition-colors"
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