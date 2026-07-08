import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/santhome_studio/',
  server: {
    watch: {
      usePolling: true,
    }
  }
})