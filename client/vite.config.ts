import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import autoPages from './vite-plugin-auto-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoPages()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})