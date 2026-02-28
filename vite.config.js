import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'animations';
            if (id.includes('swiper')) return 'swiper';
            if (id.includes('lucide-react')) return 'icons';
            if (id.includes('react-router-dom')) return 'router';
            return 'vendor'; // all other third-party dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // slightly increase limit after splitting
  },
})
