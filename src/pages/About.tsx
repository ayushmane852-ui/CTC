import PageBanner from "../components/layout/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import FadeInSection from "../components/ui/FadeInSection";
import ImagePlaceholder from "../components/ui/ImagePlaceholder";
import { IMAGES } from "../config/images";
import { timeline } from "../data/siteData";
import { Eye, Target, Users } from "lucide-react";

const aboutContent = `Commando Training Center (CTC), established under the Commando Training Foundation on 15th August 2018, is one of Maharashtra's pioneering institutions dedicated to military and para-military style training for students aged 6 to 21 years.

CTC focuses on discipline, confidence, physical fitness, leadership, teamwork, patriotism, and personality development through structured NCC-inspired training programs.`;

export default function About() {
  return (
    <>
      <PageBanner title="About CTC" subtitle="Our Story & Mission" />

      <section className="section-padding max-w-7xl mx-auto">
        <FadeInSection>
          <div className="relative rounded-lg overflow-hidden mb-16">
            <ImagePlaceholder
              src={IMAGES.about.team}
              alt="CTC team"
              category="team"
              className="aspect-[21/9] min-h-[280px]"
              overlay
            />
            <div className="absolute inset-0 flex items-end p-8 md:p-12 bg-linear-to-t from-black/90 to-transparent">
              <p className="font-heading text-2xl md:text-4xl text-white max-w-2xl tracking-wide">
                Building Discipline. Inspiring Leadership. Shaping Patriots.
              </p>
            </div>
          </div>
        </FadeInSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <FadeInSection direction="left">
            <SectionHeading
              align="left"
              subtitle="Introduction"
              title="Who We Are"
            />
            {aboutContent.split("\n\n").map((para) => (
              <p key={para.slice(0, 40)} className="text-white/70 leading-relaxed mb-4">
                {para}
              </p>
            ))}
          </FadeInSection>
          <FadeInSection direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="card-military p-6 flex gap-4">
                <Eye className="h-10 w-10 text-gold shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl text-gold mb-2 tracking-wide">Vision</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    To be Maharashtra&apos;s leading youth training institution, producing physically fit,
                    mentally strong, and ethically grounded citizens ready to serve the nation with pride.
                  </p>
                </div>
              </div>
              <div className="card-military p-6 flex gap-4">
                <Target className="h-10 w-10 text-gold shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl text-gold mb-2 tracking-wide">Mission</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    To deliver world-class military-style training programs that develop discipline,
                    confidence, leadership, teamwork, and patriotism in every cadet from age 6 to 21.
                  </p>
                </div>
              </div>
              <div className="card-military p-6 flex gap-4">
                <Users className="h-10 w-10 text-gold shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl text-gold mb-2 tracking-wide">Leadership</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Guided by experienced instructors with military and para-military backgrounds,
                    CTC maintains the highest standards of discipline, safety, and professional conduct.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding camo-pattern bg-army-green/20 border-y border-gold/10">
        <div className="max-w-4xl mx-auto">
          <SectionHeading subtitle="Our Journey" title="Timeline: 2018 — Present" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/30 md:-translate-x-px" />
            {timeline.map((item, i) => (
              <FadeInSection key={item.year} delay={i * 0.08}>
                <div
                  className={`relative flex flex-col md:flex-row gap-4 mb-10 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right flex md:justify-end items-start gap-4 pl-12 md:pl-0">
                    {i % 2 === 0 && (
                      <div className="md:text-right flex-1">
                        <span className="font-heading text-3xl text-gold">{item.year}</span>
                        <h4 className="font-heading text-xl text-white mt-1 tracking-wide">{item.title}</h4>
                        <p className="text-white/60 text-sm mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-4 border-black -translate-x-1/2 mt-1.5" />
                  <div className="md:w-1/2 md:pl-12 pl-12">
                    {i % 2 !== 0 && (
                      <div>
                        <span className="font-heading text-3xl text-gold">{item.year}</span>
                        <h4 className="font-heading text-xl text-white mt-1 tracking-wide">{item.title}</h4>
                        <p className="text-white/60 text-sm mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
