import FadeInSection from "./FadeInSection";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeInSection className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {subtitle && (
        <p className="font-heading text-gold tracking-[0.3em] text-lg md:text-xl mb-2 uppercase">
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl uppercase ${
          light ? "text-white" : "text-gradient-gold"
        }`}
      >
        {title}
      </h2>
      <div className={`mt-4 h-1 w-24 bg-gold ${align === "center" ? "mx-auto" : ""}`} />
      {description && (
        <p className={`mt-6 text-base md:text-lg leading-relaxed ${light ? "text-white/80" : "text-white/70"}`}>
          {description}
        </p>
      )}
    </FadeInSection>
  );
}
