import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({ // <-- Change this line too!
  plugins: [
    react(),
    eslint({
      lintOnStart: true,
      failOnError: mode === "production"
    })
  ]
}))
