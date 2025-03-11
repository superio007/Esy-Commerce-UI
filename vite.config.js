import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  assetsInclude: ["**/*.lottie"],
  plugins: [
    react(),
    tailwindcss(),
  ],
  css: {
    modules: {
      scopeBehaviour: "local", // Ensures CSS Modules work
    },
  },
})
