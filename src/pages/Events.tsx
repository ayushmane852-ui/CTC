import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import FadeInSection from "../components/ui/FadeInSection";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { events, galleryItems } from "../data/siteData";

export default function Events() {
  const previewGallery = galleryItems.filter((g) => g.category === "events").slice(0, 4);

  return (
    <>
      <PageBanner title="Events" subtitle="Celebrating Excellence" />

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          title="CTC Events Calendar"
          description="From intensive training camps to prestigious award ceremonies — experience the full spectrum of CTC activities."
        />

        <div className="relative max-w-3xl mx-auto mb-20">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/30" />
          {events.map((event, i) => (
            <FadeInSection key={event.id} delay={i * 0.1}>
              <div className="relative pl-16 pb-12 last:pb-0">
                <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-gold border-4 border-black" />
                <div className="card-military p-6 hover:border-gold/50 transition-colors">
                  <div className="flex items-center gap-2 text-gold text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="uppercase tracking-wider">{event.date}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-white tracking-wide">{event.title}</h3>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{event.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-black/40 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Showcase" title="Event Banners" />
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, i) => (
              <FadeInSection key={event.id} delay={i * 0.05}>
                <article className="group card-military overflow-hidden">
                  <ImagePlaceholder
                    src={event.image}
                    alt={event.title}
                    category="event"
                    className="aspect-[16/7]"
                    overlay
                  />
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-gold text-xs uppercase tracking-widest mb-1">{event.date}</p>
                      <h3 className="font-heading text-2xl text-white group-hover:text-gold transition-colors">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-white/60 text-sm">{event.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gold shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Gallery Preview"
          title="Moments From Our Events"
          description="Browse highlights from CTC Week, award ceremonies, and training demonstrations."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {previewGallery.map((item, i) => (
            <FadeInSection key={item.id} delay={i * 0.08}>
              <Link to="/gallery" className="group block relative overflow-hidden rounded-lg aspect-square">
                <ImagePlaceholder
                  src={item.image}
                  alt={item.title}
                  category="event"
                  className="h-full w-full"
                  overlay
                />
                <div className="absolute inset-0 flex items-end p-3 bg-linear-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-white font-medium">{item.title}</p>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-dark uppercase tracking-wider text-sm font-semibold transition-colors"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
