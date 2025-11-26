
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Setting base to empty string makes asset paths relative, 
  // which prevents 404 errors on GitHub Pages regardless of repo name.
  base: './PyroSense-AI', 
})
