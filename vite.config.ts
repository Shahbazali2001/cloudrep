import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import checker from "vite-plugin-checker";
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }), // Enables real-time TypeScript checking
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
})
