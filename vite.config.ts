import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//串連的路徑
const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  //vite專案啟動時自定義
  server: { host: '0.0.0.0', port: 3000 },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@styles/element/index.scss' as *;
                        `,
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      dts: 'src/plugins/unplugin/auto-import.d.ts',
    }),
    Components({
      dirs: ['src/components'],
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
      dts: 'src/plugins/unplugin/auto-components.d.ts',
    })
  ],
  resolve: {
    //路徑別名設置
    alias: {
      '@': resolve('src'),
      '@router': resolve('src/router'),
      '@store': resolve('src/store'),
      '@components': resolve('src/components'),
      '@views': resolve('src/views'),
      '@styles': resolve('src/styles'),
      '@assets': resolve('src/assets'),
      '@plugins': resolve('src/plugins')
    }
  }
})
