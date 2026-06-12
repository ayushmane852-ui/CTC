import { useMemo, useState } from "react";
import { Shield } from "lucide-react";
import { getImageCandidates } from "../../utils/images";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  category?: "drill" | "fitness" | "shooting" | "adventure" | "event" | "team" | "general";
}

const categoryGradients: Record<NonNullable<ImagePlaceholderProps["category"]>, string> = {
  drill: "from-army-green via-[#2a4a38] to-black",
  fitness: "from-olive-green/80 via-army-green to-black",
  shooting: "from-[#1a2e22] via-[#3d4a2f] to-black",
  adventure: "from-[#1f3b2d] via-[#2d4a35] to-[#0a0f0c]",
  event: "from-army-green via-gold/20 to-black",
  team: "from-olive-green via-army-green to-black",
  general: "from-army-green/90 via-black to-army-green",
};

export default function ImagePlaceholder({
  src,
  alt,
  className = "",
  overlay = false,
  category = "general",
}: ImagePlaceholderProps) {
  const candidates = useMemo(() => (src ? getImageCandidates(src) : []), [src]);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  const currentSrc = candidates[index];
  const showFallback = !currentSrc || failed;

  const handleError = () => {
    if (index < candidates.length - 1) {
      setIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {!showFallback && (
        <img
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={handleError}
        />
      )}
      {showFallback && (
        <div
          className={`absolute inset-0 bg-linear-to-br ${categoryGradients[category]} camo-pattern flex items-center justify-center`}
          aria-hidden
        >
          <div className="text-center opacity-40 px-4">
            <Shield className="mx-auto h-12 w-12 text-gold/60" strokeWidth={1} />
            <p className="mt-2 font-heading text-sm tracking-widest text-gold/50 uppercase">
              Add image
            </p>
            {src && (
              <p className="mt-1 text-[10px] text-white/30 font-mono break-all max-w-[200px] mx-auto">
                {src.replace(/^\//, "public/")}.jpg
              </p>
            )}
          </div>
        </div>
      )}
      {overlay && (
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
      )}
    </div>
  );
}
