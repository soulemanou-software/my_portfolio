import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          gallery: ['lightgallery/react'],
          motion: ['aos', 'typed.js'],
          icons: ['react-icons'],
        },
      },
    },
  },
})
