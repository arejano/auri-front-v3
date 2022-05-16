import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@assets': resolve(__dirname, 'src/asses'),
      '@components': resolve(__dirname, 'src/components'),
      '@core': resolve(__dirname, 'src/services/core'),
      '@services': resolve(__dirname, 'src/services'),
      '@views': resolve(__dirname, 'src/views'),
      '@router': resolve(__dirname, 'src/router'),
    },
  },
  server: {
    open: true,
  },
})
