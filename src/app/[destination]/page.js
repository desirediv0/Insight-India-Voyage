import { notFound } from "next/navigation";
import { destinationsData } from "@/data/destinations";
import HeroSection from "@/components/destination/HeroSection";
import ImageCarousel from "@/components/destination/ImageCarousel";
import DescriptionSection from "@/components/destination/DescriptionSection";
import Highlights from "@/components/destination/Highlights";
import Testimonials from "@/components/Testimonials";
import TourPackages from "@/components/TourPackages";
import Link from "next/link";

export function generateMetadata({ params }) {
  const { destination } = params;
  const data = destinationsData[destination];

  if (!data) return { title: "Destination Not Found" };

  return {
    title: `${data.hero.title} Tours & Travel | Insight India Voyage`,
    description: data.hero.subtitle,
  };
}

const DestinationPage = ({ params }) => {
  const { destination } = params;
  const data = destinationsData[destination];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <HeroSection 
        title={data.hero.title} 
        subtitle={data.hero.subtitle}
        imageSrc={data.hero.imageSrc}
      />
      
      <ImageCarousel images={data.images} />

      <DescriptionSection 
        content={data.description}
        quickFacts={data.quickFacts}
      />

      <Highlights highlights={data.highlights} />

      <TourPackages />

      <section className="bg-white py-12 md:py-16 border-t border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-body text-lg md:text-xl text-black/70 font-light mb-6">
            Looking for something else? Contact us to help you create your journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-black text-white font-body text-sm font-medium rounded-full px-8 py-3.5 hover:bg-black/85 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Testimonials />
    </main>
  );
};

export default DestinationPage;
