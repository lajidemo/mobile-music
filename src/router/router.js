import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../routers/Recommend'
import Singer from '../routers/Singer'
import Rank from '../routers/Rank'
import Search from '../routers/Search'
import SingerDet from '@/routers/SingerDet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Recommend'
    }, {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    }, {
      path: '/Singer',
      name: 'Singer',
      component: Singer,
      children: [
        {
          path: ':id',
          name: 'SingerDet',
          component: SingerDet
        }
      ]
    }, {
      path: '/Rank',
      name: 'Rank',
      component: Rank
    }, {
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
