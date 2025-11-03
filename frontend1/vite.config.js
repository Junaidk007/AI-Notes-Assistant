import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    allowedHosts: [
      'ai-notes-assistant-i47e.onrender.com' // 👈 Add your Render backend domain here
    ],
  },
})
