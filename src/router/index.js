import Vue from 'vue'
import Router from 'vue-router'
/*
import RoutesConfig from './router.config.json'

Vue.use(Router)
const registerRoute = (config) => {
  let arrayRoutes = []
  config.map(page =>
    arrayRoutes.push({
      name: page.name,
      path: page.path,
      component: require(`@/components${page.component}`)
    })
  )

  return {arrayRoutes}
}

const routes = registerRoute(RoutesConfig).arrayRoutes

export default new Router({
  routes: routes
})
*/
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    }, // 默认就跳转此页面
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'

})
