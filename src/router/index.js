import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Datagd from '../views/Mydata.vue'
import Orderbill from '../views/Order.vue'
import Orderbill1 from '../views/Order1.vue'
import Orderbill2 from '../views/Order2.vue'
import Materials from '../views/TestForm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mydata',
    name: 'mydata',
    component: Datagd
  },
  {
    path: '/bill',
    name: 'bill',
    component: Orderbill
  },
  {
    path: '/easybill',
    name: 'easybill',
    component: Orderbill1
  },
  {
    path: '/vbill',
    name: 'vbill',
    component: Orderbill2
  },
  {
    path: '/testform',
    name: 'materials',
    component: Materials
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/comps',
    name:'Comps',
    component:()=>import('../views/comps.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
