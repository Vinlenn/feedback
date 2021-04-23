import Login from './views/Login.vue'
import Index from './views/Index.vue'

//添加路由地址
const routers = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
      path: '/',
          component: Index
    },
]


export default routers
