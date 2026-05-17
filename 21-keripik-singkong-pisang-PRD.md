# PRD: Krukk! — Brand Keripik Singkong & Pisang

## 1. Brand Identity

**Nama Brand:** Krukk!
**Alasan Naming:** Onomatope dari suara renyah keripik ("kruk-kruk"). Singkat, playful, instant recall. Tanda seru kasih energi muda & fun.

**Tagline:** *"Kruk-kruk Renyah, Bikin Nagih!"*

**Target Audience:**
- Gen Z & milenial usia 18-35
- Pencinta cemilan lokal, suka explore varian rasa baru
- Reseller / dropshipper UMKM cemilan
- Gift hampers (Lebaran, Natal, corporate)

**Brand Voice:**
- Tone: Playful, energik, ramah, sedikit cheeky
- Style copywriting: Casual banget, pakai bahasa gaul ringan, banyak humor & punchline
- Avoid: Bahasa kaku, terlalu formal, deskripsi medis "sehat-sehatan"

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion (penting banget di sini — brand playful butuh banyak motion)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels + Pixabay (utamain Pexels untuk foto produk packaging)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo bouncy, nav, CTA "Beli Sekarang" |
| 2 | Hero | React island `client:load` | Big visual produk + headline punchy |
| 3 | Varian Rasa | React island `client:visible` | Showcase semua varian dengan filter |
| 4 | Why Krukk | React island `client:visible` | USP: bahan asli, gak pakai MSG, dll |
| 5 | Behind The Scene | `.astro` + image strip | Proses produksi rumahan |
| 6 | Testimonial Wall | React island `client:visible` | Marquee scroll IG reviews |
| 7 | Reseller Program | `.astro` static | CTA untuk reseller / dropship |
| 8 | Where To Buy | `.astro` static | List marketplace + offline retailer |
| 9 | FAQ | React island `client:visible` | Accordion FAQ |
| 10 | Footer | `.astro` static | Kontak, sosmed playful |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Varian Rasa • Cerita • Reseller • FAQ • Belanja
- CTA: **Beli Sekarang 🔥**

### Hero
- **Headline:** Kruk-kruk Renyah, Nagih Sampai Habis!
- **Subheadline:** Keripik singkong & pisang asli Lampung. 12 varian rasa nendang, tanpa MSG, tanpa pengawet. Sekali coba langsung ketagihan.
- **CTA Primary:** Cobain Sekarang
- **CTA Secondary:** Jadi Reseller
- Visual: Floating chips animation di background

### Varian Rasa
- **Heading:** 12 Rasa, Mana Favoritmu?
- **Subheading:** Dari yang klasik sampai yang nendang abis. Berani coba semua?

Filter: Singkong • Pisang • Pedas • Manis • Gurih

Produk (12 varian):
**Singkong:**
1. Original Asin (Rp 15k)
2. Balado Pedas (Rp 17k)
3. Keju Manis (Rp 18k)
4. BBQ (Rp 18k)
5. Sambal Matah (Rp 19k) ⭐
6. Jagung Bakar (Rp 17k)

**Pisang:**
7. Original Manis (Rp 16k)
8. Coklat (Rp 20k)
9. Karamel (Rp 20k)
10. Green Tea (Rp 22k) ⭐
11. Pedas Manis (Rp 19k)
12. Susu Vanilla (Rp 21k)

⭐ = Best seller

### Why Krukk
- **Heading:** Kenapa Krukk Beda?
- 4 USP cards:
  1. **🌾 Bahan Asli Petani Lokal** — Singkong dari Lampung, pisang dari Kebumen. Fresh, langsung dari kebun.
  2. **🚫 Tanpa MSG & Pengawet** — Rasa nendang murni dari bumbu rempah, bukan kimia.
  3. **🔥 Digoreng Pakai Minyak Premium** — Renyah lama, gak gampang melempem.
  4. **📦 Packaging Kedap Udara** — Tetap kriuk dari rumah produksi sampai mulutmu.

### Behind The Scene
- **Heading:** Dari Dapur Mama, Untuk Dunia
- **Body:** Krukk dimulai dari dapur Mama Lina di Lampung tahun 2020 — cuma modal wajan, kompor, dan resep turunan nenek. Sekarang kami produksi 500kg/minggu dengan 8 ibu-ibu sekitar yang kerja bareng. Tetap homemade, cuma skalanya lebih besar.

### Testimonial Wall
- **Heading:** Apa Kata Mereka?
- Marquee scroll dengan screenshot IG story / komentar customer
- Quote sample:
  - "Beli buat camilan kerja, eh malah dihabisin pacar 😭" — @nadya_p
  - "Sambal matah-nya pedasnya pas, nagih bgt!" — @rifkiii
  - "Anak-anak suka banget rasa coklat. Restock lagi dong!" — @bundamia

### Reseller Program
- **Heading:** Mau Cuan Bareng Krukk?
- **Body:** Jadi reseller cuma butuh modal mulai Rp 500k. Dapat harga grosir, marketing kit gratis, dan support tim Krukk. Udah ada 200+ reseller di Indonesia.
- **CTA:** Daftar Reseller

### Where To Buy
- **Heading:** Belanja Di Mana Aja
- Logos: Shopee, Tokopedia, TikTok Shop, Lazada, Blibli
- Offline: Indomaret (beberapa cabang), reseller list

### FAQ
- **Heading:** Pertanyaan Sering Ditanyain
Accordion:
1. Berapa lama Krukk awet? → 3 bulan dari tanggal produksi, simpan di tempat kering.
2. Halal gak? → Sudah sertifikasi halal MUI.
3. Pengiriman ke luar Jawa bisa? → Bisa! Pakai JNE/J&T/SPX ke seluruh Indonesia.
4. Kalau melempem gimana? → Klaim refund/ganti via WA, kami ganti gratis.
5. Mau pesan untuk hampers / corporate? → Bisa custom packaging, min order 50pcs.

### Footer
- Tagline: *"Kruk-kruk dulu, baru produktif!"*
- Sosmed: IG (@krukk.id), TikTok, Shopee
- CTA: "Follow buat lihat behind-the-scene & promo!"

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Pexels | https://www.pexels.com/search/cassava%20chips%20snack/ | "Keripik singkong renyah" | 1920x1080 |
| Hero floating chips | Pixabay | https://pixabay.com/images/search/chips%20transparent/ | "Floating chips" | 400x400 (PNG transparent) |
| Varian - Singkong | Pexels | https://www.pexels.com/search/cassava%20chips/ | "Keripik singkong original" | 800x800 |
| Varian - Pisang | Pexels | https://www.pexels.com/search/banana%20chips/ | "Keripik pisang" | 800x800 |
| Varian - Balado | Unsplash | https://unsplash.com/s/photos/spicy-chips-red | "Keripik balado merah" | 800x800 |
| Varian - Cokelat | Unsplash | https://unsplash.com/s/photos/chocolate-chips-snack | "Keripik pisang cokelat" | 800x800 |
| Why Krukk - Petani | Unsplash | https://unsplash.com/s/photos/cassava-farmer-harvest | "Petani panen singkong" | 800x600 |
| Why Krukk - Kitchen | Pexels | https://www.pexels.com/search/frying%20chips%20kitchen/ | "Menggoreng keripik" | 800x600 |
| Behind The Scene | Unsplash | https://unsplash.com/s/photos/home-kitchen-cooking-indonesian | "Dapur rumahan UMKM" | 1600x900 |
| Testimonial avatars | Pexels | https://www.pexels.com/search/young%20indonesian%20smile/ | Portrait happy customer | 100x100 |
| Reseller | Pexels | https://www.pexels.com/search/woman%20packaging%20small%20business/ | "Reseller packing pesanan" | 1200x800 |

**Catatan:** Untuk hero & produk shot, kalau perlu visual yang super spesifik (packaging Krukk), bisa pakai mockup generator (placeit.net) dengan template chip bag.

---

## 6. Animation Spec (Framer Motion)

Brand ini playful — pakai animasi banyak, jangan ragu.

### Hero (React island, `client:load`)
```tsx
// Floating chips di background — multiple chips dengan delay berbeda
const chipFloat = (delay: number) => ({
  y: [0, -20, 0],
  rotate: [0, 15, -15, 0],
  transition: { 
    duration: 4 + Math.random() * 2, 
    repeat: Infinity, 
    delay,
    ease: "easeInOut" 
  }
})

// Headline: bouncy entry
const bouncyHeadline = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 12 }
  }
}

// CTA button: wiggle attention loop
animate={{ rotate: [0, -3, 3, -3, 0] }}
transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
```

### Varian Rasa (React island, `client:visible`)
- Grid 3-4 kolom, card stagger reveal `staggerChildren: 0.06`
- Card hover: pop effect `scale: 1.08`, `rotate: -2deg`
- Filter tab change: `AnimatePresence` mode `wait`, slide horizontal
- Best seller badge: pulse infinite `scale: [1, 1.15, 1]`

### Why Krukk (React island, `client:visible`)
- 4 cards reveal dari arah berbeda (left, right, top, bottom)
- Icon emoji: spring bounce on enter
- Hover: card lift + emoji scale up

### Testimonial Wall (React island, `client:visible`)
- **Marquee scroll** dua arah (atas: kiri ke kanan, bawah: kanan ke kiri)
- Implementation:
```tsx
<motion.div
  animate={{ x: [0, -1920] }}
  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
>
```
- Pause on hover via `whileHover={{ animationPlayState: "paused" }}`

### FAQ Accordion (React island, `client:visible`)
- Smooth height animation via `layout` prop
- Chevron icon rotate 180deg saat open
- Background color shift on open

### CTA Buttons (semua)
- Hover: `scale: 1.05`, shadow expand
- Tap: `scale: 0.95` (haptic feedback feel)

### Scroll Reveal Pattern (reusable)
```tsx
const popIn = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 150, damping: 18 } 
  }
}
```

### Hydration Strategy
- `client:load` → Hero (banyak animasi langsung)
- `client:visible` → Varian, Why Krukk, Testimonial, FAQ
- Sisanya static

---

## 7. SEO Meta

- **Title:** Krukk! — Keripik Singkong & Pisang Asli Lampung, 12 Varian Rasa
- **Description:** Keripik singkong & pisang renyah dari Lampung. 12 varian rasa nendang, tanpa MSG, tanpa pengawet. Belanja online, peluang reseller terbuka!
- **Keywords:** keripik singkong, keripik pisang, cemilan lampung, snack lokal, reseller keripik
- **OG Image:** Hero shot keripik tumpah dari kemasan dengan brand color (1200x630)
- **Schema:** `Product` + `Organization` schema
