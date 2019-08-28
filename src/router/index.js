import Vue from 'vue'
import Router from 'vue-router'
import Login from '../login/Login.vue'
import Layout from '../layout/Layout'
  import Home from '../pages/home/Home'
  import SortTable from '../pages/home/sortTable'
  import Detail from '../pages/detail/Detail'
  import SetUp from '../pages/setUp/Setup'
    import SetUpo from '../pages/setUp/setUpo/SetUpo'
    import SetUpt from '../pages/setUp/setUpt/SetUpt'

  
Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Layout',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/SortTable',
          name: 'sortTable',
          component: SortTable
        },
        {
          path: '/Detail',
          name: 'detail',
          component: Detail
        },
        {
          path: '/SetUp',
          name: 'setUp',
          component: SetUp,
          children: [
            {
              path: '/SetUpo',
              name: 'setUpo',
              component: SetUpo
            },
            {
              path: '/SetUpt',
              name: 'setUpt',
              component: SetUpt
            }
          ]
        }
      ]
    }
  ]
})

export default router
