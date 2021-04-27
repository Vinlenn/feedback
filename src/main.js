import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
import App from './App'
import axios from 'axios'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';


Vue.use(Router);
Vue.use(Antd);

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$axios = axios
//axios.defaults.baseURL = 'http://127.0.0.1:81/'
axios.defaults.baseURL = 'http://115.29.179.42:81/'
// axios.defaults.headers.common['token']=sessionStorage.getItem("token")

const router = new Router({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


