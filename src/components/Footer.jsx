import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Who We Are", href: "/about" },
  { name: "Contact", href: "/contact" },
];

import { destinationCategories } from "@/data/destinations";

/* Inline SVGs — no import errors */
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socials = [
  { icon: InstagramIcon, name: "Instagram", href: "#" },
  { icon: FacebookIcon, name: "Facebook", href: "#" },
  { icon: XIcon, name: "X", href: "#" },
];

const Footer = () => {

  return (
      <footer className="bg-[#0a0a0a] text-white relative">
        {/* Top border */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-block mb-5">
                <Image
                  src="/logo.png"
                  alt="Insight India Voyage"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </Link>
              <p className="font-body text-[13px] text-white/30 font-light leading-relaxed mb-8 max-w-[240px]">
                Crafting luxury travel experiences across India since 2007.
              </p>

              <div className="flex gap-2">
                {socials.map(({ icon: Icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    aria-label={name}
                    className="w-9 h-9 rounded-full border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all duration-300"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-body text-[11px] uppercase tracking-[0.25em] text-white/60 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-[13px] text-white/60 hover:text-white transition-colors duration-300 font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations */}
            <div className="lg:col-span-2 flex flex-col md:flex-row gap-12 md:gap-24">
              {destinationCategories.map((group) => (
                <div key={group.category} className="flex-1">
                  <h3 className="font-body text-[11px] uppercase tracking-[0.25em] text-white/60 mb-6">
                    {group.category}
                  </h3>
                  <ul className="space-y-3.5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className="font-body text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-light"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-body text-[11px] uppercase tracking-[0.25em] text-white/60 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+911147092122"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Phone size={13} strokeWidth={1.5} className="text-white/30" />
                  </div>
                  <span className="font-body text-[13px] text-white/40 group-hover:text-white transition-colors duration-300 font-light">
                    +91 11 4709 2122
                  </span>
                </a>

                <a
                  href="mailto:info@insightindiavoyage.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Mail size={13} strokeWidth={1.5} className="text-white/30" />
                  </div>
                  <span className="font-body text-[13px] text-white/40 group-hover:text-white transition-colors duration-300 font-light">
                    info@insightindiavoyage.com
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <MapPin size={13} strokeWidth={1.5} className="text-white/30" />
                  </div>
                  <span className="font-body text-[13px] text-white/40 font-light">
                    Dwarka, New Delhi, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[11px] text-white/20 font-light">
              © {new Date().getFullYear()} Insight India Voyage. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
  );
};

export default Footer;