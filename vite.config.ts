import * as path from "path"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const SRC_PATH = path.resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/": `${SRC_PATH}/`
    }
  },
  plugins: [vue()],
  server: {
    open: true,
    port: 8080,
    // proxy: {
    //   "/api": {
    //     target: "",
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, '')
    //   }
    // }
  }
})
