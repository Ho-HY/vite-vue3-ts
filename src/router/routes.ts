import { RouteRecordRaw } from 'vue-router'
import Home from '@views/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  }
]
