import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Tem que ter esse import

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. O plugin tem que ser chamado aqui
  ],
})