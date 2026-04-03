import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import TourPackages from "@/components/TourPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import TrustBar from "@/components/TrustBar";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <FeaturedDestinations />
      <TourPackages />
      <WhyChooseUs />
      <Testimonials />
      <TrustBar />
      <CTABanner />
    </>
  );
}
