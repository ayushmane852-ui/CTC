import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import Hero from "../components/home/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import FadeInSection from "../components/ui/FadeInSection";
import AnimatedCounter from "../components/ui/AnimatedCounter";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import Button from "../components/ui/Button";
import { IMAGES } from "../config/images";
import {
  stats,
  whyChooseCTC,
  trainingHighlights,
  events,
  testimonials,
} from "../data/siteData";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="overview" className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="left">
            <SectionHeading
              align="left"
              subtitle="Overview"
              title="Forging Tomorrow's Leaders"
              description="Commando Training Center (CTC) delivers structured, NCC-inspired military training that transforms young minds into disciplined, confident, and patriotic citizens."
            />
            <p className="text-white/70 leading-relaxed mb-4">
              Established on 15th August 2018 under the Commando Training Foundation, CTC has become
              one of Maharashtra&apos;s most respected youth training institutions — serving students
              from age 6 to 21 across multiple school partnerships.
            </p>
            <Button to="/about" variant="outline">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="relative group">
              <ImagePlaceholder
                src={IMAGES.home.overview}
                alt="CTC training overview"
                category="general"
                className="aspect-[4/3] rounded-lg"
                overlay
              />
              <div className="absolute -bottom-4 -left-4 gold-border bg-army-green px-6 py-4 rounded-lg">
                <p className="font-heading text-3xl text-gold">2018</p>
                <p className="text-xs text-white/60 uppercase tracking-wider">Year Established</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding camo-pattern bg-army-green/20 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Why CTC"
            title="Why Choose Commando Training Center"
            description="A comprehensive approach to youth development through military discipline and modern training methodologies."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCTC.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <div className="card-military p-6 h-full">
                  <div className="h-1 w-12 bg-gold mb-4" />
                  <h3 className="font-heading text-xl text-white mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Our Impact"
          title="CTC By The Numbers"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.15}>
              <div className="card-military p-8">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      <section className="section-padding bg-black/40 border-y border-gold/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Training"
            title="Training Highlights"
            description="Explore our core training programs designed for physical, mental, and leadership excellence."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingHighlights.map((item, i) => (
              <FadeInSection key={item.title} delay={i * 0.1}>
                <Link to={item.path} className="group block card-military">
                  <ImagePlaceholder
                    src={item.image}
                    alt={item.title}
                    category="general"
                    className="aspect-[4/3]"
                    overlay
                  />
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="font-heading text-lg text-white tracking-wide">{item.title}</h3>
                    <ArrowRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button to="/training">View All Activities</Button>
          </div>
        </div>
      </section>

      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Events"
          title="Upcoming & Annual Events"
          description="From annual training camps to award ceremonies — CTC hosts events that celebrate excellence."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((event, i) => (
            <FadeInSection key={event.id} delay={i * 0.1}>
              <Link to="/events" className="group block card-military overflow-hidden">
                <ImagePlaceholder
                  src={event.image}
                  alt={event.title}
                  category="event"
                  className="aspect-video"
                  overlay
                />
                <div className="p-5">
                  <p className="text-gold text-xs uppercase tracking-wider mb-1">{event.date}</p>
                  <h3 className="font-heading text-xl text-white group-hover:text-gold transition-colors">
                    {event.title}
                  </h3>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button to="/events" variant="outline">All Events</Button>
        </div>
      </section>

      <section className="section-padding camo-pattern bg-army-green/30 border-t border-gold/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading subtitle="Testimonials" title="What People Say" light />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeInSection key={t.name} delay={i * 0.1}>
                <blockquote className="card-military p-6 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-gold/40 mb-4" />
                  <p className="text-white/80 text-sm leading-relaxed flex-1 italic">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-6 pt-4 border-t border-gold/20">
                    <p className="font-semibold text-gold">{t.name}</p>
                    <p className="text-white/50 text-xs uppercase tracking-wider">{t.role}</p>
                  </footer>
                </blockquote>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
