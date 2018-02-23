import Vue from 'vue'
import Router from 'vue-router'

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

export default router
