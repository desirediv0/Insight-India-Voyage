import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/Floatingcontrols";


export const metadata = {
  title: "Insight India Voyage — Travel · Explore · Capture",
  description:
    "Luxury travel experiences across India crafted by Insight India Voyage. Premium curated journeys since 2007.",
  openGraph: {
    title: "Insight India Voyage — Travel · Explore · Capture",
    description:
      "Luxury travel experiences across India crafted by Insight India Voyage. Premium curated journeys since 2007.",
    type: "website",
  },
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-[#0a0a0a] font-body">
        <Toaster position="top-center" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingControls />
      </body>
    </html>
  );
}