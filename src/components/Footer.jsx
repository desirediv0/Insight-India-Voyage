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

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: InstagramIcon, name: "Instagram", href: "https://www.instagram.com/officialinsightindiavoyage?igsh=MTJob2xuYm9tdTdkbA%3D%3D&utm_source=qr" },
  { icon: LinkedinIcon, name: "LinkedIn", href: "https://www.linkedin.com/in/anshul-baloni-6b0868b3/" },
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
              <p className="font-body text-[16px] text-white/60 font-light leading-relaxed mb-8 max-w-[240px]">
                Crafting luxury travel experiences across India since 2007.
              </p>

              <div className="flex gap-2">
                {socials.map(({ icon: Icon, name, href }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
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
              <h3 className="font-body text-[14px] uppercase tracking-[0.25em] text-white/90 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-[16px] text-white/90 hover:text-white transition-colors duration-300 font-light"
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
                  <h3 className="font-body text-[16px] uppercase tracking-[0.25em] text-white/90 mb-6">
                    {group.category}
                  </h3>
                  <ul className="space-y-3.5">
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.path}
                          className="font-body text-[16px] text-white/60 hover:text-white transition-colors duration-300 font-light"
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
              <h3 className="font-body text-[16px] uppercase tracking-[0.25em] text-white/90 mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+919811489907"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Phone size={13} strokeWidth={1.5} className="text-white/30" />
                  </div>
                  <span className="font-body text-[16px] text-white/60 group-hover:text-white transition-colors duration-300 font-light">
                    +91 98114 89907
                  </span>
                </a>

                <a
                  href="mailto:info@insightindiavoyage.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <Mail size={13} strokeWidth={1.5} className="text-white/30" />
                  </div>
                  <span className="font-body text-[16px] text-white/60 group-hover:text-white transition-colors duration-300 font-light">
                    info@insightindiavoyage.com
                  </span>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                    <MapPin size={13} strokeWidth={1.5} className="text-white/30" />
                  </div>
                  <span className="font-body text-[16px] text-white/60 font-light">
                    Dwarka, New Delhi, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-[13px] text-white/40 font-light">
              © {new Date().getFullYear()} Insight India Voyage. All rights reserved.
            </p>
            
          </div>
        </div>
      </footer>
  );
};

export default Footer;