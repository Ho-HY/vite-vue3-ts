# 🚩新手上路．慢慢來

## 1️⃣ 安裝vite+vue
```jsx
⌨️ npm create vite@latest 項目名稱
✔ Project name: … vite-vue3
❓ Select a framework: › - Use arrow-keys. Return to submit.
   vanilla  # 不集成任何框架
❯  vue      # vue 框架
   react
   preact
   lit
   svelte
❓ Select a variant: › - Use arrow-keys. Return to submit.
   vue
❯  vue-ts

Done. Now run:

cd vite-vue3
npm install
npm run dev  #啟動
npm run build   #打包
```

## 2️⃣ 安裝vue-router & vuex
```jsx
⌨️ npm install -S vue-router@next vuex@next
```

```jsx
#rouer/index.ts
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
    {
        path: '/', component: () => import('../views/HelloWorld.vue'),
    }
]
export default createRouter({
    history: createWebHashHistory(),
    routes
})
```

```jsx
store/index.ts
import { createStore } from 'vuex'

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {}
})
```

```jsx
# main.ts
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@router'
import store from '@store'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
```

## 3️⃣ 修改vite-config.ts
```jsx
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolve = (dir: string) => path.join(__dirname, dir)

export default defineConfig({
  server: { host: '0.0.0.0', port: 3000 },//vite專案啟動時自定義
	 css: {
	    preprocessorOptions: { //所有檔案共享某個scss, 會用來做變量等等放置的檔案
	      scss: {
	        additionalData: `@use '@styles/index.scss';`
	      }
	    }
	  }
  plugins: [vue()],
  resolve: {
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
```

---

# 🚩引入套件

## 1️⃣ 安裝element-plus

```jsx
⌨️ npm install -S element-plus
```

### ☄️引用套件

- **設置需引用组件**

    ```jsx
    #plugins/element-plus
    import ElementPlus from 'element-plus'
    import * as Icons from '@element-plus/icons-vue'

    export default { ElementPlus, Icons }
    ```

- **在main.js註冊引入**

    ```jsx
    #main.ts
    import element from '@plugins/element-plus'

    app.use(element.ElementPlus)
    for (const [key, component] of Object.entries(element.Icons)) {
        app.component(key, component)
    }
    ```


### ☄️修改主題色

- **設定主題色**

    ```scss
    #styles/element/index.scss
    $--colors: (
        'primary': ('base': #757cf1),
        'success': ('base': #21ba45),
        'warning': ('base': #f2711c),
        'danger': ('base': #db2828),
        'error': ('base': #db2828),
        'info': ('base': #42b8dd),
    );

    // You should use them in scss, because we calculate it by sass.
    // comment next lines to use default color
    @forward 'element-plus/theme-chalk/src/common/var.scss' with (
        $colors: $--colors
    );

    // if you want to import all
    @use 'element-plus/theme-chalk/src/index.scss'as *;

    // import dark theme
    // @use 'element-plus/theme-chalk/src/dark/css-vars.scss'as *;
    ```

- **將檔案加入至vite.cofnig.ts內的css**

    ```jsx
    #vite.config.ts
    export default defineConfig({
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: `@use '@styles/element/index.scss' as *;
                             @use '@styles/index.scss as *';
                            `,
          }
        }
      }
    })
    ```


## 2️⃣安裝自動引入套件及組件

```jsx
⌨️ npm install -D unplugin-auto-import unplugin-vue-components
```

- **vite.cofnig.ts設置**

    ```jsx
    #vite.config.ts
    import AutoImport from 'unplugin-auto-import/vite'
    import Components from 'unplugin-vue-components/vite'
    import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

    export default defineConfig({
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],  // 自定義組件
          dts: 'src/plugins/unplugin/auto-import.d.ts',  // 配置文件生成位置
        }),
        Components({
          dirs: ['src/components'],  // 指定组件位置，默認是src/components
          dts: 'src/plugins/unplugin/auto-components.d.ts',
        }),
      ],
    })
    ```
  Plugin要記得多新增unplugins資料夾，才會自動產生auto-import.d.ts 和 auto-components.d.ts
---

# 🚩遇到Error不害怕

### 💣 [vite] Internal server error: Cannot read properties of undefined (reading 'url')
<pre>
✅ 重新啟動vue項目
</pre>
參考來源：https://blog.csdn.net/zhehsisha/article/details/121291845

### 💣 Network: use `-host` to expose</br>
<pre>
&emsp; &emsp; #️⃣vite.config.ts
✅ server: { host: '0.0.0.0'}
</pre>
參考來源：https://www.jianshu.com/p/b527dc3427fa
