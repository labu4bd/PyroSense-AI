import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'repo-name' with the name of your GitHub repository
  // Example: if your repo is at https://github.com/user/pyrosense, use '/pyrosense/'
  base: '/PyroSense-AI/', 
})