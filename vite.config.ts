import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

//串連的路徑
const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  //vite專案啟動時自定義
  server: { host: '0.0.0.0', port: 3000 },
  plugins: [vue()],
  resolve: {
    //路徑別名設置
    alias: {
      '@': resolve('src'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
      '@components': resolve('src/components'),
      '@views': resolve('src/views'),
      '@styles': resolve('src/styles'),
      '@assets': resolve('src/assets')
    }
  }
})
