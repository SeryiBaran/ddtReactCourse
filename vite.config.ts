import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.MOCKAPI_URL': `"${process.env.MOCKAPI_URL}"`,
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
});
