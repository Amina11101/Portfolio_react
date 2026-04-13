import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Amina_Ansar/',
  plugins: [react()],
  build: {
    cssMinify: false,
  },
})
