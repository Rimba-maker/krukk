import { motion } from 'framer-motion';

export default function WhyKrukk() {
  const usps = [
    {
      icon: '🌾',
      title: 'Bahan Asli Petani Lokal',
      desc: 'Singkong dari Lampung, pisang dari Kebumen. Fresh, langsung dari kebun.',
      direction: { x: -50, y: 0 }
    },
    {
      icon: '🚫',
      title: 'Tanpa MSG & Pengawet',
      desc: 'Rasa nendang murni dari bumbu rempah, bukan kimia buatan.',
      direction: { x: 50, y: 0 }
    },
    {
      icon: '🔥',
      title: 'Digoreng Pakai Minyak Premium',
      desc: 'Renyah tahan lama, gak gampang melempem di lidah.',
      direction: { x: 0, y: 50 }
    },
    {
      icon: '📦',
      title: 'Packaging Kedap Udara',
      desc: 'Tetap kriuk dari rumah produksi sampai masuk ke mulutmu.',
      direction: { x: 0, y: -50 }
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-lg)] mt-[var(--spacing-xl)] w-full max-w-5xl mx-auto">
      {usps.map((usp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: usp.direction.x, y: usp.direction.y }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-[var(--color-surface-soft)] rounded-[var(--radius-lg)] p-[var(--spacing-lg)] flex gap-[var(--spacing-md)] items-start border border-[var(--color-hairline)]"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, delay: index * 0.1 + 0.2 }}
            className="text-5xl shrink-0"
          >
            {usp.icon}
          </motion.div>
          <div className="flex flex-col gap-[var(--spacing-xs)]">
            <h3 className="text-card-title">{usp.title}</h3>
            <p className="text-body text-[var(--color-ink)]/80">{usp.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
