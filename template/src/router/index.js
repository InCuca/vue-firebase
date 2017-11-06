import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

// Views
import Dashboard from '../views/Dashboard'
import Login from '../views/Login'
import ForgotPassword from '../views/ForgotPassword'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/forgot-password',
      name: 'Lost my password',
      component: ForgotPassword
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
