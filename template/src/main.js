// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import { fbSyncRouter } from './services/firebase'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

// WORKAROUND: https://github.com/bootstrap-vue/bootstrap-vue/issues/1201#issuecomment-341987891
// Please remove when it's resolved
let originalVueComponent = Vue.component
Vue.component = function (name, definition) {
  if (Array.isArray(definition.components) && definition.components.length === 1) {
    definition.components = {[name]: definition.components[0]}
  }
  originalVueComponent.apply(this, [name, definition])
}

Vue.use(BootstrapVue)
Vue.component = originalVueComponent

// Sync Router and Vuex (add router to state)
sync(store, router)

// Sync Router, Vuex and Firebase Auth
fbSyncRouter(
  router,
  u => !store.state.auth.user && store.commit('auth/setUser', u)
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
