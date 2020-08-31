import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: resolve => require(['../view/Home'], resolve),
      mate: {title: 'Home'}
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   document.title = `${to.meta.title} | manage-system`
//   // const role = localStorage.getItem('username')
//   var user = getCookie('username')
//   if (!user && to.path !== '/login') {
//     next('/login')
//     NProgress.done()
//   } else {
//     next()
//     NProgress.done()
//   }
//   function getCookie (username) {
//     var name = username + '='
//     var ca = document.cookie.split(';')
//     for (var i = 0; i < ca.length; i++) {
//       var c = ca[i].trim()
//       if (c.indexOf(name) === 0) {
//         return c.substring(name.length, c.length)
//       }
//     }
//     return ''
//   }
// })
//
// router.afterEach(() => {
//   NProgress.done()
// })

export default router
