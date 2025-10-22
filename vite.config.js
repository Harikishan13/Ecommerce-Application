import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  fontFamily: {
  pop: ['Poppins', 'sans-serif'],
},
  plugins: [react(),tailwindcss()],
})
