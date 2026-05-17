import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  { q: "Berapa lama Krukk awet?", a: "3 bulan dari tanggal produksi, simpan di tempat kering dan sejuk biar tetap renyah maksimal." },
  { q: "Halal gak?", a: "Sudah pasti! Kami sudah punya sertifikasi halal MUI." },
  { q: "Pengiriman ke luar Jawa bisa?", a: "Bisa banget! Kami pakai JNE/J&T/SPX untuk kirim ke seluruh Indonesia dengan aman." },
  { q: "Kalau melempem gimana?", a: "Santai, klaim aja refund atau ganti barang via WA. Kami ganti 100% gratis kalau terbukti melempem pas sampai." },
  { q: "Mau pesan untuk hampers / corporate?", a: "Bisa custom packaging dengan minimal order 50pcs. Cocok buat Lebaran, Natal, atau event kantor." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto mt-[var(--spacing-xl)] w-full">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        
        return (
          <motion.div 
            key={index}
            className="border-b border-[var(--color-hairline)] last:border-0 overflow-hidden"
            initial={false}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left py-[var(--spacing-md)] flex items-center justify-between"
            >
              <span className="text-body-lg font-medium">{faq.q}</span>
              <motion.span 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl ml-4"
              >
                ↓
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto", marginBottom: "var(--spacing-md)" },
                    collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="text-body text-[var(--color-ink)]/70">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
