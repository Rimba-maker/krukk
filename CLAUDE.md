# Krukk! landing page

Astro 7 (static) + React islands + Tailwind v4 + `motion` (import from `motion/react`). Node >= 22.12.

## Commands
- `npm run dev` dev server (port 4321)
- `npm run check` type check (`astro check`), run before finishing
- `npm run build` static build to `dist/`

## Where things live
- `src/pages/index.astro` page order; sections are in `src/components/`
- `src/styles/tokens.css` every colour, font, size, radius, shadow (Tailwind `@theme`). Never hardcode colours or fonts elsewhere
- `src/styles/base.css` resets and base rules; `global.css` page styles. Plain CSS with tokens, no Tailwind utility classes in components; wrap photos as `<div class="frame" data-slot>` and put captions outside the slot
- `public/images/` Pexels stand-in photos in `data-slot` figures; replace the files with real Krukk photos
- `21-keripik-singkong-pisang-PRD.md` product brief (git-ignored, private)

## Design rules (custom direction "Irisan")
- Voice: Indonesian, casual, playful, no emoji as icons, no dashes in copy
- Idea: the page is cut like its chips. Every photograph, price and button is a circle, egg, arch, blob or pill, never a plain rectangle
- Colour: mint ground (`paper`), deep forest ink, ONE banana-yellow accent. Sections alternate mint, ink, deeper mint and yellow, joined by scalloped edges (`.scal`, `--scal` = the section colour)
- Fonts: Bagel Fat One for headings and prices (one weight), Chivo for everything else
- Outlines are 3px ink with a hard 4 to 5px ink offset shadow; no soft shadows, no gradients
- Motion: `transform`/`opacity` only, respect `prefers-reduced-motion`; only the flavour filter uses `motion`; hero shapes bob slowly
- One primary button style (`.btn`, yellow pill); labels are sentence case, not tracked caps
- Never invent metrics, testimonials or store links. `WhereToBuy.astro` rows become links when `url` is filled
