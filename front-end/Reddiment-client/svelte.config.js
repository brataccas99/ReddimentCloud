import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = defineConfig({
  envPrefix: 'VITE_',
  preprocess: vitePreprocess(), // Add Svelte preprocessing here
  kit: {
    adapter: adapter(),
  },
  // Add optimizeDeps here
  optimizeDeps: {
    include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
  }
});

export default config;
