import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center camo-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <Shield className="mx-auto h-16 w-16 text-gold mb-6" strokeWidth={1.5} />
        <h1 className="font-heading text-4xl md:text-5xl text-white tracking-wider">
          COMMANDO TRAINING CENTER
        </h1>
        <p className="mt-2 text-gold tracking-[0.4em] text-sm uppercase">Strength • Control • Command</p>
      </motion.div>

      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gold"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
