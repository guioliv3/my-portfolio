import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/ra2581392523026/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})