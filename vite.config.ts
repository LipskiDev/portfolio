import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Avoid watching locked video files without polling the entire project.
    watch: { ignored: ['**/*.mp4', '**/*.webm', '**/*.mov'] },
  },
})


