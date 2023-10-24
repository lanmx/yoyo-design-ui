import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@md': fileURLToPath(new URL('./public/markdown', import.meta.url)),
    }
  },
  // build: {
  //   outDir: 'lanmx-components-ui',
  //   lib: {
  //     entry: './src/packages/index.js',
  //     name: 'lanmx-components-ui',
  //     fileName: 'lanmx-components-ui'
  //   }
  // },
})

