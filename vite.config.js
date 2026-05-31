import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dalitso-mandala/',
  plugins: [
    tailwindcss(),
  ],
})
