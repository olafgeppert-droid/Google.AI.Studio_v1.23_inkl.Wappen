import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Google.AI.Studio_v1.23_inkl.Wappen/', // 👈 wichtig für GitHub Pages
})
