import { notFound } from "next/navigation";
import Image from "next/image";
import { toursData } from "@/data/tours";
import { Clock, MapPin, CheckCircle2, Calendar } from "lucide-react";

export function generateMetadata({ params }) {
  const { slug } = params;
  const tour = toursData[slug];

  if (!tour) return { title: "Tour Not Found" };

  return {
    title: `${tour.name} - ${tour.duration} | Insight India Voyage`,
    description: `Explore our ${tour.name} package: ${tour.route}.`,
  };
}

const TourPage = ({ params }) => {
  const { slug } = params;
  const tour = toursData[slug];

  if (!tour) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Hero Header */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block uppercase tracking-[0.3em] text-[11px] font-medium text-white/50 mb-6">
            Signature Package
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-8">
            {tour.name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-white/40" />
              <span className="font-body text-sm font-light">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white/40" />
              <span className="font-body text-sm font-light truncate max-w-[300px]">{tour.route}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 -translate-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Highlights Sidebar */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-[#f8f8f8] rounded-3xl p-8 sticky top-24">
              <h3 className="font-display text-xl font-semibold text-black mb-8">
                Tour Highlights
              </h3>
              <ul className="space-y-6">
                {tour.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="text-black/30 mt-0.5 flex-shrink-0" />
                    <span className="font-body text-base text-black/70 font-light leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-10 border-t border-black/[0.06]">
                <button className="w-full bg-black text-white font-body text-sm font-medium rounded-full py-4 px-8 hover:bg-black/85 transition-colors shadow-lg shadow-black/10">
                  Enquire About This Tour
                </button>
              </div>
            </div>
          </div>

          {/* Itinerary Main */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-2 md:p-6">
              <h2 className="font-display text-3xl font-semibold text-black mb-12">
                Detailed Itinerary
              </h2>

              {/* Gallery if exists */}
              {tour.gallery && (
                <div className="grid grid-cols-2 gap-4 mb-16">
                  {tour.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src={img}
                        alt={`${tour.name} gallery ${i}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {tour.itinerary.map((day, idx) => (
                  <div key={idx} className="group relative pl-12 pb-12 last:pb-0">
                    {/* Line */}
                    {idx !== tour.itinerary.length - 1 && (
                      <div className="absolute left-[19px] top-8 bottom-0 w-px bg-black/[0.08]" />
                    )}
                    
                    {/* Circle */}
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-black/[0.03] border border-black/[0.05] flex items-center justify-center z-10 group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <span className="font-display text-sm font-semibold tracking-tighter">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="pt-2">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="font-body text-[11px] uppercase tracking-widest text-black/30 font-semibold px-3 py-1 bg-black/[0.03] rounded-full">
                          {day.day}
                        </span>
                        <h4 className="font-display text-xl font-semibold text-black tracking-tight">
                          {day.title}
                        </h4>
                      </div>
                      <p className="font-body text-base text-black/60 font-light leading-relaxed mb-6">
                        {day.description}
                      </p>
                      {day.stay && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f8f8] rounded-xl w-fit">
                          <Calendar size={14} className="text-black/30" />
                          <span className="font-body text-[13px] text-black/50 font-medium">
                            Overnight at {day.stay}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TourPage;
