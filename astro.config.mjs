// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/',
  build: {
    assets: '_astro',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});