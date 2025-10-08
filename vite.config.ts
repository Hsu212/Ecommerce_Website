import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-slick': 'react-slick',
      'slick-carousel': 'slick-carousel',
      '@': '/src',
    },
  },
});