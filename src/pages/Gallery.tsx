import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import FadeInSection from "../components/ui/FadeInSection";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import {
  galleryItems,
  galleryCategories,
  type GalleryCategory,
} from "../data/siteData";

const categoryMap: Record<string, "drill" | "fitness" | "adventure" | "event" | "team" | "general"> = {
  training: "general",
  drill: "drill",
  adventure: "adventure",
  events: "event",
  team: "team",
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightbox, setLightbox] = useState<(typeof galleryItems)[0] | null>(null);

  const filtered =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <PageBanner title="Gallery" subtitle="Training in Action" />

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          title="CTC Photo Gallery"
          description="Photos from CTC training, events, and team activities."
        />

        <FadeInSection className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                activeCategory === cat.id
                  ? "bg-gold text-black"
                  : "bg-army-green/50 text-white/80 border border-gold/20 hover:border-gold/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </FadeInSection>

        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <FadeInSection key={item.id} delay={(i % 6) * 0.05} className="break-inside-avoid mb-4">
                <button
                  type="button"
                  onClick={() => setLightbox(item)}
                  className="group relative w-full overflow-hidden rounded-lg block text-left"
                >
                  <ImagePlaceholder
                    src={item.image}
                    alt={item.title}
                    category={categoryMap[item.category] ?? "general"}
                    className={`w-full ${i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-square" : "aspect-[4/3]"}`}
                    overlay
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                    <ZoomIn className="h-8 w-8 text-gold" />
                    <p className="text-white text-sm font-medium px-4 text-center">{item.title}</p>
                  </div>
                </button>
              </FadeInSection>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/95 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-2 text-gold hover:text-white transition-colors z-10"
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImagePlaceholder
                src={lightbox.image}
                alt={lightbox.title}
                category={categoryMap[lightbox.category] ?? "general"}
                className="w-full max-h-[80vh] aspect-video rounded-lg"
              />
              <p className="mt-4 text-center font-heading text-2xl text-gold tracking-wide">
                {lightbox.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
