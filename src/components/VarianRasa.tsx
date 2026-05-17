import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Product = {
  id: string;
  name: string;
  price: number;
  type: 'Singkong' | 'Pisang';
  categories: string[];
  bestSeller?: boolean;
  image: string;
};

const products: Product[] = [
  // Singkong
  { id: 's1', name: 'Original Asin', price: 15000, type: 'Singkong', categories: ['Gurih'], image: 'https://images.unsplash.com/photo-1599508704512-2f19efd1eede?w=800&q=80' },
  { id: 's2', name: 'Balado Pedas', price: 17000, type: 'Singkong', categories: ['Pedas', 'Gurih'], image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?w=800&q=80' },
  { id: 's3', name: 'Keju Manis', price: 18000, type: 'Singkong', categories: ['Manis', 'Gurih'], image: 'https://images.unsplash.com/photo-1618683523775-6a2c7a72f05a?w=800&q=80' },
  { id: 's4', name: 'BBQ', price: 18000, type: 'Singkong', categories: ['Gurih'], image: 'https://images.unsplash.com/photo-1606850682855-323f4b4ce633?w=800&q=80' },
  { id: 's5', name: 'Sambal Matah', price: 19000, type: 'Singkong', categories: ['Pedas', 'Gurih'], bestSeller: true, image: 'https://images.unsplash.com/photo-1555126634-ae335272ee5f?w=800&q=80' },
  { id: 's6', name: 'Jagung Bakar', price: 17000, type: 'Singkong', categories: ['Manis', 'Gurih'], image: 'https://images.unsplash.com/photo-1585401332851-bc0fb3d0c242?w=800&q=80' },
  // Pisang
  { id: 'p1', name: 'Original Manis', price: 16000, type: 'Pisang', categories: ['Manis'], image: 'https://images.unsplash.com/photo-1601646672322-26302e1c9ad9?w=800&q=80' },
  { id: 'p2', name: 'Coklat', price: 20000, type: 'Pisang', categories: ['Manis'], image: 'https://images.unsplash.com/photo-1548484352-ea579e5233a8?w=800&q=80' },
  { id: 'p3', name: 'Karamel', price: 20000, type: 'Pisang', categories: ['Manis'], image: 'https://images.unsplash.com/photo-1619149615599-28c005b632db?w=800&q=80' },
  { id: 'p4', name: 'Green Tea', price: 22000, type: 'Pisang', categories: ['Manis'], bestSeller: true, image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?w=800&q=80' },
  { id: 'p5', name: 'Pedas Manis', price: 19000, type: 'Pisang', categories: ['Pedas', 'Manis'], image: 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=800&q=80' },
  { id: 'p6', name: 'Susu Vanilla', price: 21000, type: 'Pisang', categories: ['Manis'], image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=800&q=80' },
];

const filters = ['Semua', 'Singkong', 'Pisang', 'Pedas', 'Manis', 'Gurih'];

export default function VarianRasa() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filteredProducts = products.filter((p) => {
    if (activeFilter === 'Semua') return true;
    if (activeFilter === 'Singkong' || activeFilter === 'Pisang') return p.type === activeFilter;
    return p.categories.includes(activeFilter);
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 18 } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <div className="w-full mt-[var(--spacing-xl)] flex flex-col items-center">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-[var(--spacing-xs)] mb-[var(--spacing-xxl)]">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-[18px] py-[8px] rounded-[var(--radius-pill)] text-button transition-colors ${
              activeFilter === filter 
                ? 'bg-[var(--color-primary)] text-[var(--color-on-primary)]' 
                : 'bg-[var(--color-canvas)] text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div 
        layout
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[var(--spacing-lg)] w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={product.id}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-[var(--color-canvas)] rounded-[var(--radius-lg)] p-[var(--spacing-md)] border border-[var(--color-hairline)] flex flex-col gap-[var(--spacing-sm)] relative cursor-pointer"
            >
              {product.bestSeller && (
                <motion.div 
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-3 -right-3 bg-[var(--color-accent-magenta)] text-[var(--color-on-primary)] text-caption px-[10px] py-[4px] rounded-[var(--radius-pill)] z-10 font-bold"
                >
                  ⭐ Best Seller
                </motion.div>
              )}
              
              <div className="w-full aspect-square rounded-[var(--radius-md)] bg-[var(--color-surface-soft)] overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover mix-blend-multiply opacity-90" />
              </div>
              
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-eyebrow text-[var(--color-ink)]/50">{product.type}</span>
                </div>
                <h3 className="text-card-title leading-tight">{product.name}</h3>
                <p className="text-body text-[var(--color-ink)]/70">{formatPrice(product.price)}</p>
              </div>

              <div className="mt-auto pt-[var(--spacing-sm)]">
                <button className="w-full bg-[var(--color-surface-soft)] text-[var(--color-ink)] text-button py-[8px] rounded-[var(--radius-pill)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)] transition-colors">
                  + Keranjang
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
