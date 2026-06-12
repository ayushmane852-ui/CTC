/**
 * CTC image paths — add your photos under public/images/ (see HOW_TO_ADD_IMAGES.md)
 *
 * Use .jpg, .jpeg, .png, or .webp — any one works per slot.
 * Example: public/images/home/hero.jpg
 */

const img = (folder: string, name: string) => `/images/${folder}/${name}`;

export const IMAGES = {
  home: {
    /** Full-screen background on the home page */
    hero: img("home", "hero"),
    /** Homepage logo */
    logo: img("home", "logo.png"),
    /** Overview section on home */
    overview: img("home", "overview"),
  },
  about: {
    /** Large team / group photo */
    team: img("about", "team"),
  },
  training: {
    drill: img("training", "drill"),
    fitness: img("training", "fitness"),
    shooting: img("training", "shooting"),
    mallakhamb: img("training", "mallakhamb"),
    lathi: img("training", "lathi"),
    yoga: img("training", "yoga"),
    adventure: img("training", "adventure"),
    leadership: img("training", "leadership"),
  },
  events: {
    annual: img("events", "annual"),
    week: img("events", "week"),
    competition: img("events", "competition"),
    fitnessDemo: img("events", "fitness-demo"),
    school: img("events", "school"),
    awards: img("events", "awards"),
  },
  /** Gallery photos: public/images/gallery/01.jpg, 02.jpg, … */
  gallery: (n: number) => img("gallery", String(n).padStart(2, "0")),
} as const;
