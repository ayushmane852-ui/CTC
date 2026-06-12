/** Supported file types when you add photos to public/images/ */
const EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"] as const;

/** Turn "/images/home/hero" or "/images/home/hero.jpg" into a list of URLs to try */
export function getImageCandidates(path: string): string[] {
  if (!path) return [];

  const base = path.replace(/\.(jpe?g|png|webp)$/i, "");
  const hasExt = path !== base;

  if (hasExt) {
    const current = path.match(/\.(jpe?g|png|webp)$/i)?.[0]?.toLowerCase();
    const others = EXTENSIONS.filter((ext) => ext !== current);
    return [path, ...others.map((ext) => base + ext)];
  }

  return EXTENSIONS.map((ext) => base + ext);
}
