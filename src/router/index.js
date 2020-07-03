import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Homepage.vue'
import Product from '../pages/Product.vue'
import Basket from '../pages/Basket.vue'
import ClientInfo from '../pages/ClientInfo.vue'
import Validated from '../pages/Validated.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Home
    },
    {
      path: '/product/:id(\\d+)',
      name: 'product',
      component: Product
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    },
    {
      path: '/info',
      name: 'info',
      component: ClientInfo
    },
    {
      path: '/validated',
      name: 'validated',
      component: Validated
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router