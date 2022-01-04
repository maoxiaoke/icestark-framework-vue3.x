import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
import List from './components/List.vue'
import isInIcestark from '@ice/stark-app/lib/isInIcestark';
import getBasename from '@ice/stark-app/lib/getBasename';

// https://zhuanlan.zhihu.com/p/138444490

const routerHistory = createWebHistory( isInIcestark() ? getBasename() : '/' )

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/list',
      component: List
    }
  ]
})

export default router;
