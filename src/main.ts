import { createApp } from 'vue'
import '@styles/index.scss'
import App from '@/App.vue'
import router from '@router'
import store from '@store'
import * as Elicons from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
app.use(store)
//引入element-plus icons
for (const [key, component] of Object.entries(Elicons)) {
  app.component(key, component)
}
app.mount('#app')
