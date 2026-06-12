import { Link } from "react-router-dom";
import PageBanner from "../components/layout/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import FadeInSection from "../components/ui/FadeInSection";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { activities } from "../data/siteData";

const categoryMap: Record<string, "drill" | "fitness" | "shooting" | "adventure" | "general" | "team"> = {
  drill: "drill",
  fitness: "fitness",
  shooting: "shooting",
  mallakhamb: "general",
  lathi: "general",
  yoga: "general",
  adventure: "adventure",
  leadership: "team",
};

export default function Training() {
  return (
    <>
      <PageBanner title="Training Activities" subtitle="Discipline Through Action" />

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          title="Our Training Programs"
          description="Eight comprehensive training modules designed to develop physical prowess, mental resilience, and leadership excellence."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, i) => {
            const Icon = activity.icon;
            return (
              <FadeInSection key={activity.id} delay={(i % 4) * 0.08}>
                <article className="group card-military h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <ImagePlaceholder
                      src={activity.image}
                      alt={activity.title}
                      category={categoryMap[activity.id] ?? "general"}
                      className="aspect-[4/3]"
                      overlay
                    />
                    <div className="absolute top-4 right-4 p-2 bg-black/60 rounded-sm border border-gold/30">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading text-xl text-white tracking-wide group-hover:text-gold transition-colors">
                      {activity.title}
                    </h3>
                    <p className="mt-3 text-white/60 text-sm leading-relaxed flex-1">
                      {activity.description}
                    </p>
                    <div className="mt-4 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-500" />
                  </div>
                </article>
              </FadeInSection>
            );
          })}
        </div>
      </section>

      <section className="section-padding camo-pattern bg-army-green/20 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-gold mb-4 tracking-wide">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/70 mb-8">
            Join hundreds of students across Maharashtra who train with CTC. Programs available for
            ages 6 to 21 through school partnerships and direct enrollment.
          </p>
          <Link
            to="/contact"
            className="inline-flex px-8 py-3 bg-gold text-black font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-dark transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
}
