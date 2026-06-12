import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../ui/Button";
import { IMAGES } from "../../config/images";
import { getImageCandidates } from "../../utils/images";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const candidates = useMemo(() => getImageCandidates(IMAGES.home.hero), []);
  const [heroIndex, setHeroIndex] = useState(0);
  const heroSrc = candidates[heroIndex];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const onHeroError = () => {
    if (heroIndex < candidates.length - 1) {
      setHeroIndex((i) => i + 1);
    }
  };

  return (
    <section ref={ref} className="relative h-screen min-h-[700px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        {heroSrc && heroIndex < candidates.length && (
          <img
            key={heroSrc}
            src={heroSrc}
            alt="Commando Training Center"
            className="absolute inset-0 h-full w-full object-cover"
            onError={onHeroError}
          />
        )}
        <div className="absolute inset-0 bg-linear-to-br from-army-green/90 via-black/70 to-black/90" />
        <div
          className="absolute inset-0 camo-pattern opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23556b2f' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/30" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10 flex items-center justify-center"
        >
          <img
            src={IMAGES.home.logo}
            alt="CTC logo"
            className="h-[272px] w-[272px] rounded-full border-2 border-gold bg-black/70 p-2 object-contain"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 font-heading text-gold tracking-[0.5em] text-sm md:text-base uppercase"
        >
          Est. 2018 • Pune, Maharashtra
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white max-w-5xl leading-none"
        >
          COMMANDO TRAINING
          <span className="block text-gradient-gold">CENTER (CTC)</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 font-heading text-xl md:text-2xl text-gold tracking-[0.3em]"
        >
          Strength • Control • Command
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 max-w-2xl text-white/70 text-sm md:text-base"
        >
          Military & para-military style training for students aged 6 to 21 — building discipline,
          leadership, and patriotism.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button to="/contact">Join CTC</Button>
          <Button to="/training" variant="outline">
            Explore Activities
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#overview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.5 } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-gold"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
}
