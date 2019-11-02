import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: "首页"
      }
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City'),
      meta: {
        title: "城市列表"
      }
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail'),
      meta: {
        title: "详情页"
      }
    }

  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
