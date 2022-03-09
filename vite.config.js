import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

const path = require('path');
const src = path.join(__dirname, "./src/");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), legacy()],

  server: {
    host: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$font-path: '/iranyekan';` // todo: import as a vars.scss file
        // additionalData: `@import 'assets/_vars.scss';`

      }
    }
  }
})
