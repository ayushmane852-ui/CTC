import { motion } from "framer-motion";

interface PageBannerProps {
  title: string;
  subtitle?: string;
}

export default function PageBanner({ title, subtitle }: PageBannerProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-army-green via-black to-army-green camo-pattern" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-gold tracking-[0.4em] text-sm md:text-base uppercase mb-3"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-heading text-5xl md:text-6xl lg:text-7xl text-white uppercase"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 h-1 w-24 bg-gold mx-auto origin-center"
        />
      </div>
    </section>
  );
}
