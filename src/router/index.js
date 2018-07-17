import Vue from 'vue'
import Router from 'vue-router'

import Layout from 'components/layout/layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: () => import('components/login/login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout
    // redirect: '/dashboard',
    // name: 'Dashboard',
    // hidden: true,
    // children: [{
    //   path: 'dashboard',
    //   component: () => import('@/views/dashboard/index')
    // }]
  }
]

export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})
