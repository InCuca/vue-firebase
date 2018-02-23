import { auth } from './firebase'

export function fbSyncRouter (router, callback) {
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      auth.onAuthStateChanged(user => {
        if (user) {
          callback(user)
          next()
        } else {
          next({
            path: '/login',
            query: {
              redirect: to.fullPath
            }
          })
        }
      })
    } else {
      next() // make sure to always call next()!
    }
  })
}
