import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import { univerPlugin } from "@univerjs/vite-plugin";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    univerPlugin(),
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
