import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, text: "Beli buat camilan kerja, eh malah dihabisin pacar 😭", user: "@nadya_p" },
  { id: 2, text: "Sambal matah-nya pedasnya pas, nagih bgt!", user: "@rifkiii" },
  { id: 3, text: "Anak-anak suka banget rasa coklat. Restock lagi dong!", user: "@bundamia" },
  { id: 4, text: "Packagingnya lucu, rasanya juga nggak pelit bumbu.", user: "@sarah.id" },
  { id: 5, text: "Udah beli ke-3 kalinya minggu ini. Ampun deh kalorinya wkwk", user: "@kev_in" },
];

export default function TestimonialWall() {
  return (
    <div className="w-full overflow-hidden py-[var(--spacing-lg)] mt-[var(--spacing-xl)] relative flex flex-col gap-[var(--spacing-md)]">
      {/* Left/Right Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--color-canvas)] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--color-canvas)] to-transparent z-10 pointer-events-none"></div>

      {/* Row 1: Left to Right */}
      <motion.div
        className="flex gap-[var(--spacing-lg)] w-max pr-[var(--spacing-lg)]"
        animate={{ x: [0, -1920] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
          <div key={`row1-${i}`} className="bg-[var(--color-surface-soft)] rounded-[var(--radius-lg)] p-[var(--spacing-lg)] w-[400px] shrink-0 border border-[var(--color-hairline)] flex flex-col justify-between">
            <p className="text-body-lg mb-[var(--spacing-md)] leading-snug">"{t.text}"</p>
            <span className="text-eyebrow text-[var(--color-ink)]/50">{t.user}</span>
          </div>
        ))}
      </motion.div>

      {/* Row 2: Right to Left */}
      <motion.div
        className="flex gap-[var(--spacing-lg)] w-max pr-[var(--spacing-lg)]"
        animate={{ x: [-1920, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {[...testimonials, ...testimonials, ...testimonials].reverse().map((t, i) => (
          <div key={`row2-${i}`} className="bg-[var(--color-surface-soft)] rounded-[var(--radius-lg)] p-[var(--spacing-lg)] w-[400px] shrink-0 border border-[var(--color-hairline)] flex flex-col justify-between">
            <p className="text-body-lg mb-[var(--spacing-md)] leading-snug">"{t.text}"</p>
            <span className="text-eyebrow text-[var(--color-ink)]/50">{t.user}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
