import {
  Target,
  Dumbbell,
  Crosshair,
  PersonStanding,
  Swords,
  Flower2,
  Mountain,
  Crown,
  type LucideIcon,
} from "lucide-react";
import { IMAGES } from "../config/images";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Training Activities", path: "/training" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
] as const;

export const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "School Associations" },
  { value: 500, suffix: "+", label: "Students Trained" },
] as const;

export const whyChooseCTC = [
  {
    title: "Discipline & Structure",
    description:
      "NCC-inspired programs that instill military discipline, punctuality, and respect from an early age.",
  },
  {
    title: "Holistic Development",
    description:
      "Physical fitness, mental resilience, leadership, and personality development in one comprehensive curriculum.",
  },
  {
    title: "Expert Instructors",
    description:
      "Trained professionals with military and para-military backgrounds guiding every session.",
  },
  {
    title: "Patriotism & Values",
    description:
      "Building confident, patriotic citizens through teamwork, national pride, and ethical leadership.",
  },
];

export const trainingHighlights = [
  { title: "Drill & Parade", image: IMAGES.training.drill, path: "/training" },
  { title: "Physical Fitness", image: IMAGES.training.fitness, path: "/training" },
  { title: "Rifle Shooting", image: IMAGES.training.shooting, path: "/training" },
  { title: "Adventure Training", image: IMAGES.training.adventure, path: "/training" },
];

export interface Activity {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

export const activities: Activity[] = [
  {
    id: "drill",
    title: "Drill & Parade Training",
    description:
      "Precision marching, saluting, and ceremonial parade drills that build coordination, uniformity, and pride.",
    icon: Target,
    image: IMAGES.training.drill,
  },
  {
    id: "fitness",
    title: "Physical Fitness",
    description:
      "Strength, endurance, agility, and flexibility training designed for all age groups from 6 to 21 years.",
    icon: Dumbbell,
    image: IMAGES.training.fitness,
  },
  {
    id: "shooting",
    title: "Rifle Shooting",
    description:
      "Safe, supervised marksmanship training focusing on focus, breathing control, and hand-eye coordination.",
    icon: Crosshair,
    image: IMAGES.training.shooting,
  },
  {
    id: "mallakhamb",
    title: "Mallakhamb",
    description:
      "Traditional Indian pole and rope gymnastics developing balance, core strength, and mental focus.",
    icon: PersonStanding,
    image: IMAGES.training.mallakhamb,
  },
  {
    id: "lathi",
    title: "Lathi-Kathi",
    description:
      "Traditional weapon training and self-defence techniques rooted in Indian martial heritage.",
    icon: Swords,
    image: IMAGES.training.lathi,
  },
  {
    id: "yoga",
    title: "Yoga & Meditation",
    description:
      "Mind-body wellness practices for stress management, concentration, and inner discipline.",
    icon: Flower2,
    image: IMAGES.training.yoga,
  },
  {
    id: "adventure",
    title: "Adventure & Obstacle Training",
    description:
      "Obstacle courses, trekking, and adventure challenges that push limits and build courage.",
    icon: Mountain,
    image: IMAGES.training.adventure,
  },
  {
    id: "leadership",
    title: "Leadership Training",
    description:
      "Command roles, team management, and decision-making exercises for future leaders.",
    icon: Crown,
    image: IMAGES.training.leadership,
  },
];

export const events = [
  {
    id: "annual",
    title: "Annual Training Program",
    date: "June – August",
    description:
      "Intensive summer training camp covering all core disciplines with progressive skill assessments.",
    image: IMAGES.events.annual,
  },
  {
    id: "ctc-week",
    title: "CTC Week",
    date: "August",
    description:
      "A week-long celebration of training excellence featuring demonstrations, competitions, and ceremonies.",
    image: IMAGES.events.week,
  },
  {
    id: "competitions",
    title: "Competitions & Skill-Based Events",
    date: "Throughout the Year",
    description:
      "Inter-batch and inter-school competitions in drill, fitness, shooting, and adventure categories.",
    image: IMAGES.events.competition,
  },
  {
    id: "fitness-demo",
    title: "Fitness Demonstrations",
    date: "Quarterly",
    description:
      "Public showcases of physical training achievements for parents, schools, and community leaders.",
    image: IMAGES.events.fitnessDemo,
  },
  {
    id: "school-collab",
    title: "School Collaboration Programs",
    date: "Ongoing",
    description:
      "Partnership programs bringing CTC training modules directly to affiliated schools across Maharashtra.",
    image: IMAGES.events.school,
  },
  {
    id: "awards",
    title: "Award Ceremonies",
    date: "Annual",
    description:
      "Recognition of outstanding cadets, instructors, and partner schools for dedication and excellence.",
    image: IMAGES.events.awards,
  },
];

export const timeline = [
  { year: "2018", title: "Foundation Established", description: "CTC founded under Commando Training Foundation on 15th August." },
  { year: "2019", title: "First School Partnerships", description: "Partnered with initial schools across Pune region." },
  { year: "2020", title: "Expanded Curriculum", description: "Added adventure training and leadership modules." },
  { year: "2021", title: "Regional Recognition", description: "Recognized as a pioneering youth training institution in Maharashtra." },
  { year: "2022", title: "CTC Week Launch", description: "Inaugural CTC Week with inter-school competitions." },
  { year: "2023", title: "500+ Cadets Milestone", description: "Crossed 500 students trained across all programs." },
  { year: "2024", title: "Advanced Shooting Range", description: "Upgraded rifle shooting facilities and safety protocols." },
  { year: "2025", title: "Continued Growth", description: "Expanding school collaborations and training infrastructure." },
];

export const testimonials = [
  {
    name: "Lt. Nandkumar Gaikwad",
    role: "Parent & Defence Veteran",
    quote:
      "CTC provides the kind of structured, disciplined training that builds character. My son has grown tremendously in confidence and fitness.",
  },
  {
    name: "Priya Deshmukh",
    role: "School Principal",
    quote:
      "Our students look forward to CTC sessions every week. The program complements academic learning with essential life skills.",
  },
  {
    name: "Arjun Kulkarni",
    role: "Senior Cadet",
    quote:
      "Training at CTC taught me leadership, teamwork, and never giving up. It feels like a real defence academy experience.",
  },
];

export type GalleryCategory =
  | "all"
  | "training"
  | "drill"
  | "adventure"
  | "events"
  | "team";

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
  image: string;
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "training", label: "Training Highlights" },
  { id: "drill", label: "Drill Sessions" },
  { id: "adventure", label: "Adventure Activities" },
  { id: "events", label: "Events" },
  { id: "team", label: "Team Activities" },
];

export const galleryItems: GalleryItem[] = [
  { id: "1", title: "Yoga Day Felicitation Ceremony", category: "events", image: IMAGES.gallery(1) },
  { id: "2", title: "Mass Yoga Session", category: "training", image: IMAGES.gallery(2) },
  { id: "3", title: "Yoga Day Group Practice", category: "training", image: IMAGES.gallery(3) },
  { id: "4", title: "Yoga Day Morning Assembly", category: "events", image: IMAGES.gallery(4) },
  { id: "5", title: "International Yoga Day", category: "events", image: IMAGES.gallery(5) },
  { id: "6", title: "Yoga Day Training Session", category: "training", image: IMAGES.gallery(6) },
  { id: "7", title: "Yoga Day Group Activity", category: "training", image: IMAGES.gallery(7) },
  { id: "8", title: "Yoga Day Closing Ceremony", category: "events", image: IMAGES.gallery(8) },
  { id: "9", title: "Physical Fitness Evaluation", category: "training", image: IMAGES.gallery(9) },
  { id: "10", title: "Student Training Assessment", category: "training", image: IMAGES.gallery(10) },
  { id: "11", title: "Outdoor Training Session", category: "training", image: IMAGES.gallery(11) },
  { id: "12", title: "Cadet Formation at Sunrise School", category: "drill", image: IMAGES.gallery(12) },
  { id: "13", title: "School Cadet Training", category: "training", image: IMAGES.gallery(13) },
  { id: "14", title: "Junior Cadet Assembly", category: "team", image: IMAGES.gallery(14) },
  { id: "15", title: "School Partnership Program", category: "team", image: IMAGES.gallery(15) },
  { id: "16", title: "CTC School Assembly", category: "events", image: IMAGES.gallery(16) },
  { id: "17", title: "Cadet Drill Practice", category: "drill", image: IMAGES.gallery(17) },
  { id: "18", title: "Training Day at School", category: "training", image: IMAGES.gallery(18) },
  { id: "19", title: "Sunrise School Training Camp", category: "training", image: IMAGES.gallery(19) },
  { id: "20", title: "Cadet Group Formation", category: "drill", image: IMAGES.gallery(20) },
  { id: "21", title: "School Courtyard Training", category: "training", image: IMAGES.gallery(21) },
  { id: "22", title: "Student Parade Practice", category: "drill", image: IMAGES.gallery(22) },
  { id: "23", title: "CTC Cadet Session", category: "training", image: IMAGES.gallery(23) },
  { id: "24", title: "Outdoor Assembly Formation", category: "drill", image: IMAGES.gallery(24) },
  { id: "25", title: "Cadet Marching Practice", category: "drill", image: IMAGES.gallery(25) },
  { id: "26", title: "Training Formation Exercise", category: "drill", image: IMAGES.gallery(26) },
  { id: "27", title: "School Collaboration Event", category: "events", image: IMAGES.gallery(27) },
  { id: "28", title: "Cadet Training Demonstration", category: "training", image: IMAGES.gallery(28) },
  { id: "29", title: "Annual Training Ceremony", category: "events", image: IMAGES.gallery(29) },
  { id: "30", title: "Cadet Procession Event", category: "events", image: IMAGES.gallery(30) },
  { id: "31", title: "Flag Hoisting Ceremony", category: "events", image: IMAGES.gallery(31) },
  { id: "32", title: "Sunrise Commando Parade", category: "drill", image: IMAGES.gallery(32) },
  { id: "33", title: "Gallery Photo 33", category: "training", image: IMAGES.gallery(33) },
  { id: "34", title: "Gallery Photo 34", category: "training", image: IMAGES.gallery(34) },
  { id: "35", title: "Gallery Photo 35", category: "training", image: IMAGES.gallery(35) },
  { id: "36", title: "Gallery Photo 36", category: "training", image: IMAGES.gallery(36) },
  { id: "37", title: "Gallery Photo 37", category: "training", image: IMAGES.gallery(37) },
  { id: "38", title: "Gallery Photo 38", category: "training", image: IMAGES.gallery(38) },
  { id: "39", title: "Gallery Photo 39", category: "training", image: IMAGES.gallery(39) },
  { id: "40", title: "Gallery Photo 40", category: "training", image: IMAGES.gallery(40) },
  { id: "41", title: "Gallery Photo 41", category: "training", image: IMAGES.gallery(41) },
  { id: "42", title: "Gallery Photo 42", category: "training", image: IMAGES.gallery(42) },
  { id: "43", title: "Gallery Photo 43", category: "training", image: IMAGES.gallery(43) },
  { id: "44", title: "Gallery Photo 44", category: "training", image: IMAGES.gallery(44) },
  { id: "45", title: "Gallery Photo 45", category: "training", image: IMAGES.gallery(45) },
  { id: "46", title: "Gallery Photo 46", category: "training", image: IMAGES.gallery(46) },
  { id: "47", title: "Gallery Photo 47", category: "training", image: IMAGES.gallery(47) },
  { id: "48", title: "Gallery Photo 48", category: "training", image: IMAGES.gallery(48) },
  { id: "49", title: "Gallery Photo 49", category: "training", image: IMAGES.gallery(49) },
  { id: "50", title: "Gallery Photo 50", category: "training", image: IMAGES.gallery(50) },
  { id: "51", title: "Gallery Photo 51", category: "training", image: IMAGES.gallery(51) },
  { id: "52", title: "Gallery Photo 52", category: "training", image: IMAGES.gallery(52) },
  { id: "53", title: "Gallery Photo 53", category: "training", image: IMAGES.gallery(53) },
  { id: "54", title: "Gallery Photo 54", category: "training", image: IMAGES.gallery(54) },
  { id: "55", title: "Gallery Photo 55", category: "training", image: IMAGES.gallery(55) },
  { id: "56", title: "Gallery Photo 56", category: "training", image: IMAGES.gallery(56) },
  { id: "57", title: "Gallery Photo 57", category: "training", image: IMAGES.gallery(57) },
  { id: "58", title: "Gallery Photo 58", category: "training", image: IMAGES.gallery(58) },
  { id: "59", title: "Gallery Photo 59", category: "training", image: IMAGES.gallery(59) },
  { id: "60", title: "Gallery Photo 60", category: "training", image: IMAGES.gallery(60) },
  { id: "61", title: "Gallery Photo 61", category: "training", image: IMAGES.gallery(61) },
  { id: "62", title: "Gallery Photo 62", category: "training", image: IMAGES.gallery(62) },
  { id: "63", title: "Gallery Photo 63", category: "training", image: IMAGES.gallery(63) },
  { id: "64", title: "Gallery Photo 64", category: "training", image: IMAGES.gallery(64) },
];

export const contactInfo = {
  phones: ["+91 9834887099", "+91 9503236515"],
  email: "commandotrainingcenter11@gmail.com",
  location: "Pune, Maharashtra",
  social: [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "YouTube", url: "#" },
    { name: "WhatsApp", url: "https://wa.me/919834887099" },
  ],
};
