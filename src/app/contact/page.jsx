"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronDown, ArrowRight, Send } from "lucide-react";

const faqs = [
  { q: "How far in advance should I book my tour?", a: "We recommend booking at least 4-6 weeks in advance for domestic tours and 8-12 weeks for international tours to ensure the best availability and rates." },
  { q: "Do you offer customized itineraries?", a: "Absolutely! Every journey we craft is tailored to your preferences, budget, and interests. Our travel experts work closely with you to design your perfect trip." },
  { q: "What is your cancellation policy?", a: "We offer flexible cancellation policies depending on the tour package. Full details are provided at the time of booking. We understand plans can change." },
  { q: "Are your tours suitable for families with children?", a: "Yes! We design family-friendly itineraries with age-appropriate activities, comfortable accommodations, and flexible schedules." },
  { q: "Do you handle visa and travel documentation?", a: "We provide complete visa assistance and guidance for all international tours, making the process seamless for our travelers." },
];

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 11 4709 2122", sub: "+91 11 2803 3087", href: "tel:+911147092122" },
  { icon: Mail, label: "Email", value: "info@insightindiavoyage.com", href: "mailto:info@insightindiavoyage.com" },
  { icon: MapPin, label: "Office", value: "Dwarka, New Delhi", sub: "India — 110075" },
  { icon: Clock, label: "Hours", value: "Mon – Sat: 9 AM – 7 PM", sub: "IST" },
];

/* Inline social SVGs */
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

const easeOut = [0.16, 1, 0.3, 1];

const inputClass =
  "w-full rounded-xl border border-black/[0.08] bg-transparent py-3.5 px-5 font-body text-sm text-black placeholder:text-black/25 focus:border-black/20 focus:ring-0 outline-none transition-colors duration-300";

import toast from "react-hot-toast";

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "2",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent! We'll contact you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          destination: "",
          travelDate: "",
          travelers: "2",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-white/35 font-light mb-6"
          >
            <span className="w-8 h-[1px] bg-white/20" />
            Get In Touch
            <span className="w-8 h-[1px] bg-white/20" />
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.15, duration: 1, ease: easeOut }}
              className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight"
            >
              Let&apos;s Plan Your Journey
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-body text-sm md:text-base text-white/35 font-light mt-6 max-w-md mx-auto"
          >
            Our travel experts are ready to craft your perfect itinerary
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Contact Info Cards + Form ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-black/[0.06] rounded-2xl mb-20"
          >
            {contactInfo.map((c, i) => {
              const Icon = c.icon;
              const Wrapper = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href ? { href: c.href } : {})}
                  className={`group p-6 md:p-8 text-center ${
                    i < contactInfo.length - 1 ? "border-r border-black/[0.06]" : ""
                  } ${i < 2 ? "border-b md:border-b-0 border-black/[0.06]" : ""}`}
                >
                  <div className="w-10 h-10 rounded-full bg-black/[0.03] flex items-center justify-center mx-auto mb-4 group-hover:bg-black/[0.06] transition-colors duration-300">
                    <Icon size={16} strokeWidth={1.5} className="text-black/50" />
                  </div>
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-black/25 mb-2">
                    {c.label}
                  </p>
                  <p className="font-body text-[13px] text-black/70 font-medium">
                    {c.value}
                  </p>
                  {c.sub && (
                    <p className="font-body text-[12px] text-black/30 font-light mt-0.5">
                      {c.sub}
                    </p>
                  )}
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Form section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeOut }}
              className="lg:col-span-2"
            >
              <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/30 mb-5">
                Send A Message
              </span>
              <h2 className="font-display text-3xl md:text-[2.5rem] font-semibold text-black tracking-tight leading-[1.15] mb-6">
                Tell Us About Your
                <br />
                Dream Trip
              </h2>
              <p className="font-body text-[15px] text-black/40 font-light leading-relaxed mb-10">
                Fill out the form and our team will get back to you within 24 hours with a personalized itinerary suggestion.
              </p>

              {/* Social links */}
              <div>
                <p className="font-body text-[11px] uppercase tracking-[0.2em] text-black/25 mb-4">
                  Follow Us
                </p>
                <div className="flex gap-2">
                  {socials.map(({ icon: Icon, name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="w-9 h-9 rounded-full border border-black/[0.08] flex items-center justify-center text-black/30 hover:text-black hover:border-black/20 transition-all duration-300"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7, ease: easeOut }}
              className="lg:col-span-3"
            >
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                      First Name
                    </label>
                    <input 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass} 
                      placeholder="John" 
                    />
                  </div>
                  <div>
                    <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                      Last Name
                    </label>
                    <input 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass} 
                      placeholder="Doe" 
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                    Email Address
                  </label>
                  <input 
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass} 
                    placeholder="john@example.com" 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input 
                      name="phone"
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass} 
                      placeholder="+91 98765 43210" 
                    />
                  </div>
                  <div>
                    <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                      Destination Interest
                    </label>
                    <select 
                      name="destination"
                      required
                      value={formData.destination}
                      onChange={handleChange}
                      className={`${inputClass} bg-white appearance-none`}
                    >
                      <option value="">Select destination</option>
                      <option>Rajasthan</option>
                      <option>Kerala</option>
                      <option>Varanasi</option>
                      <option>Himalaya</option>
                      <option>Nepal</option>
                      <option>Custom</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                      Travel Date
                    </label>
                    <input 
                      name="travelDate"
                      type="date" 
                      required
                      value={formData.travelDate}
                      onChange={handleChange}
                      className={inputClass} 
                    />
                  </div>
                  <div>
                    <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                      Number of Travelers
                    </label>
                    <input 
                      name="travelers"
                      type="number" 
                      min="1" 
                      required
                      value={formData.travelers}
                      onChange={handleChange}
                      className={inputClass} 
                      placeholder="2" 
                    />
                  </div>
                </div>

                <div>
                  <label className="font-body text-[12px] text-black/40 mb-2 block uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your ideal trip..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`group w-full bg-black text-white font-body text-sm font-medium rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-black/85 active:scale-[0.99] transition-all duration-300 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.45!2d77.04!3d28.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b0e1c3f1a11%3A0x0!2sDwarka%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
          className="w-full h-[350px] grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 border-0"
          loading="lazy"
          allowFullScreen
          title="Office Location"
        />
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#f8f8f8] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-center mb-16"
          >
            <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-black/30 mb-5">
              Common Questions
            </span>
            <h2 className="font-display text-3xl md:text-[2.75rem] font-semibold text-black tracking-tight leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: easeOut }}
                className={`rounded-2xl border bg-white overflow-hidden transition-colors duration-300 ${
                  openFaq === i ? "border-black/[0.1]" : "border-black/[0.06]"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-body text-[15px] font-medium text-black/80 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openFaq === i ? "bg-black/[0.06] rotate-180" : "bg-black/[0.03]"
                    }`}
                  >
                    <ChevronDown size={14} className="text-black/40" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 font-body text-[14px] text-black/40 leading-[1.75] font-light">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;