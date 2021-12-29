import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: './src/index.html'
  },
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  plugins: [react()]
})
