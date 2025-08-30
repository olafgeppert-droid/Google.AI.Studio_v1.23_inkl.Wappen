import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Hier muss der Name deines GitHub-Repos rein:
  base: '/Google.AI.Studio_v1.23_inkl.Wappen/',
})
