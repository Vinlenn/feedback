import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
import App from './App'
import axios from 'axios'


Vue.use(Router)

Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

const router = new Router({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


