import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split rarely-changing vendor code from app code so browsers can
        // cache it independently across deploys.
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'
            if (id.includes('swiper')) return 'vendor-swiper'
            if (id.includes('aos')) return 'vendor-aos'
            return 'vendor'
          }
        },
      },
    },
  },
})
