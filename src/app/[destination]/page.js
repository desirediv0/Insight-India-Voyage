import { notFound } from "next/navigation";
import { destinationsData } from "@/data/destinations";
import HeroSection from "@/components/destination/HeroSection";
import ImageCarousel from "@/components/destination/ImageCarousel";
import DescriptionSection from "@/components/destination/DescriptionSection";
import Highlights from "@/components/destination/Highlights";
import VideoTextSection from "@/components/destination/VideoTextSection";
import Testimonials from "@/components/Testimonials";

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

      <VideoTextSection 
        title={data.videoData.title}
        videoId={data.videoData.videoId} 
        features={data.videoData.features}
      />

      <Testimonials />
    </main>
  );
};

export default DestinationPage;
