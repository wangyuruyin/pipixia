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
      path: '*',
      redirect:'/Home'
    },
  ]
})

export default router
