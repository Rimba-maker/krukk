import { motion } from 'framer-motion';

export default function Hero() {
  const chipFloat = (delay: number) => ({
    y: [0, -20, 0],
    rotate: [0, 15, -15, 0],
    transition: { 
      duration: 4 + Math.random() * 2, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }
  });

  const bouncyHeadline = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 12 }
    }
  };

  return (
    <section className="relative pt-[var(--spacing-xxl)] pb-[var(--spacing-section)] flex flex-col items-center text-center">
      
      {/* Background Floating Chips */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div animate={chipFloat(0)} className="absolute top-10 left-[10%] text-6xl opacity-50">🥔</motion.div>
        <motion.div animate={chipFloat(1)} className="absolute top-32 right-[15%] text-7xl opacity-50">🍌</motion.div>
        <motion.div animate={chipFloat(0.5)} className="absolute bottom-20 left-[20%] text-5xl opacity-40">🥔</motion.div>
        <motion.div animate={chipFloat(2)} className="absolute top-40 left-[40%] text-6xl opacity-20">🔥</motion.div>
        <motion.div animate={chipFloat(1.5)} className="absolute bottom-32 right-[25%] text-6xl opacity-50">🍌</motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-[var(--spacing-lg)]">
        <motion.h1 
          variants={bouncyHeadline}
          initial="hidden"
          animate="visible"
          className="text-display-xl text-balance"
        >
          Kruk-kruk Renyah, <br/> Nagih Sampai Habis!
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-body-lg max-w-2xl text-[var(--color-ink)]/80"
        >
          Keripik singkong & pisang asli Lampung. 12 varian rasa nendang, tanpa MSG, tanpa pengawet. Sekali coba langsung ketagihan.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center gap-[var(--spacing-md)] mt-[var(--spacing-sm)]"
        >
          <a href="#belanja" className="btn-primary group">
            Cobain Sekarang
            <motion.span 
              className="inline-block ml-2"
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              🔥
            </motion.span>
          </a>
          <a href="#reseller" className="btn-secondary">
            Jadi Reseller
          </a>
        </motion.div>
      </div>

      {/* Big Hero Image */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 20 }}
        className="relative z-10 mt-[var(--spacing-xxl)] w-full max-w-5xl aspect-video rounded-[var(--radius-xl)] bg-[var(--color-block-cream)] overflow-hidden flex items-center justify-center border border-[var(--color-hairline)]"
      >
        <img 
          src="https://images.unsplash.com/photo-1599508704512-2f19efd1eede?w=1600&q=80" 
          alt="Keripik singkong renyah" 
          className="w-full h-full object-cover mix-blend-multiply opacity-90"
        />
      </motion.div>
      
    </section>
  );
}
