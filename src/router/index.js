import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component:() =>import (/* webpackChunkName: "Index" */'../views/Index'),
    children:[
      {
      path:'',
      name:'Login',
      component:()=>import (/* webpackChunkName: "Login" */'../views/auth/login'),
    },
    {
      path:'/register',
      name:'Register',
      component:()=>import (/* webpackChunkName: "Register" */'../views/auth/register')
    }
  ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component:() =>import (/* webpackChunkName: "Dashoard" */'../views/Dashboard'),
    children:[
      {
      path:'',
      name:'IndexDashboard',
      component:()=>import (/* webpackChunkName: "IndexDashboard" */'../views/dashboard/IndexDashboard'),
    },
  ],
  },
  {
    path: "/dashboard-user",
    name: "User",
    component: () =>
      import(
        /* webpackChunkName: "dashboard user" */ "../components/Dashboard/User/Index.vue"
      ),
  },
  {
    path: "/dashboard-product",
    name: "Product",
    component: () =>
      import(
        /* webpackChunkName: "dashboard product" */ "../components/Dashboard/Product/Index.vue"
      ),
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
