import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Classify from './views/Classify'
import Shopcar from './views/Shopcar'
import News from './views/News'
import Me from './views/Me'
import Activity from './views/Home/Activity'
import Furnishing from './views/Home/Furnishing'
import Furniture from './views/Home/Furniture'
import Recommend from './views/Home/Recommend'
import Search from './views/Search'
import FurnitureList from './views/FurnitureList'
import LivingGoods from './views/LivingGoods'
import login from './views/login'
import register from './views/register'
Vue.use(Router)

const router =  new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/Home',
      component: Home,
      children:[
      {
        path:'Search',
        component: Search
      },
      {
        path:'Furniture',
        component: Furniture
      },
      {
        path:'Activity',
        component: Activity
      },
      {
        path:'Furnishing',
        component: Furnishing
      },
      {
        path:'Recommend',
        component: Recommend
      },          
      {
        path:'',
        redirect: '/Home/Recommend'
      },          
      ]
    },
    {
      path: '/Classify',
      component: Classify
    },
    {
      path: '/Shopcar',
      component: Shopcar      
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/News',
      component: News
    },
    {
      path: '/Me',
      component: Me
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/register',
      component: register
    },
    {
      path:'/LivingGoods',
      component:LivingGoods
    },
    {
      path: '/FurnitureList/:myid', //动态路由,
      component: FurnitureList
    },
    {
      path: '*',
      redirect:'/Home'
    },
  ]
})

export default router
