import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes every asset path relative, so the build works on
// GitHub Pages under any repository name (user.github.io/<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
