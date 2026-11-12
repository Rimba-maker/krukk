import { useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';

type Product = { name: string; price: number; type: 'Singkong' | 'Pisang'; tags: string[]; best?: boolean };

const products: Product[] = [
  { name: 'Original Asin', price: 15, type: 'Singkong', tags: ['Gurih'] },
  { name: 'Balado Pedas', price: 17, type: 'Singkong', tags: ['Pedas', 'Gurih'] },
  { name: 'Keju Manis', price: 18, type: 'Singkong', tags: ['Manis', 'Gurih'] },
  { name: 'BBQ', price: 18, type: 'Singkong', tags: ['Gurih'] },
  { name: 'Sambal Matah', price: 19, type: 'Singkong', tags: ['Pedas', 'Gurih'], best: true },
  { name: 'Jagung Bakar', price: 17, type: 'Singkong', tags: ['Manis', 'Gurih'] },
  { name: 'Original Manis', price: 16, type: 'Pisang', tags: ['Manis'] },
  { name: 'Coklat', price: 20, type: 'Pisang', tags: ['Manis'] },
  { name: 'Karamel', price: 20, type: 'Pisang', tags: ['Manis'] },
  { name: 'Green Tea', price: 22, type: 'Pisang', tags: ['Manis'], best: true },
  { name: 'Pedas Manis', price: 19, type: 'Pisang', tags: ['Pedas', 'Manis'] },
  { name: 'Susu Vanilla', price: 21, type: 'Pisang', tags: ['Manis'] },
];

const filters = ['Semua', 'Singkong', 'Pisang', 'Pedas', 'Manis', 'Gurih'];

export default function VarianRasa() {
  const [active, setActive] = useState('Semua');
  const shown = products.filter((p) =>
    active === 'Semua' ? true : active === 'Singkong' || active === 'Pisang' ? p.type === active : p.tags.includes(active),
  );

  return (
    <MotionConfig reducedMotion="user">
      <div className="menu">
        <div className="menu__head">
          <h2 id="varian-h">12 rasa, mana favoritmu?</h2>
          <p className="lead">Dari yang klasik sampai yang nendang abis. Berani coba semua?</p>
          <div className="chips" role="group" aria-label="Filter rasa">
            {filters.map((f) => (
              <button key={f} type="button" className="chip" aria-pressed={active === f} onClick={() => setActive(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <p className="visually-hidden" aria-live="polite">{shown.length} rasa ditampilkan</p>
        <ul className="coins">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((p) => (
              <motion.li
                key={p.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <a href="#belanja" className={`coin coin--${p.type.toLowerCase()}`}>
                  <h3 className="coin__name">
                    {p.name}
                    {p.best && <span className="coin__best">Best seller</span>}
                  </h3>
                  <p className="coin__meta">{[p.type, ...p.tags].join(', ')}</p>
                  <p className="coin__price num">Rp {p.price}k</p>
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </MotionConfig>
  );
}
