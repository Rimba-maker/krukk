// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages serves the project under /krukk; local dev and builds stay at the root.
  ...(process.env.GITHUB_ACTIONS ? { site: 'https://rimba-maker.github.io', base: '/krukk' } : {}),
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});