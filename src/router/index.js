import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/index'

Vue.use(Router)

// const routes = [...Home]
let routes = [...Home]
// const routerContext = require.context('./', true, /index\.js$/)
// routerContext.keys().forEach(route => {
//   // 如果是根目录的index.js则不处理
//   if (route.startsWith('.index')) {
//     return
//   }
//   const routerMoudule = routerContext(route)
//   /**
//   * 兼容 import export 和 require module.export 两种规范
//   */
//   routes = [...routes, ...(routerMoudule.default || routerMoudule)]
// })

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: routes
})
