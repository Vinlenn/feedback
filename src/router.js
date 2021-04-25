import Login from './views/Login.vue'
import Index from './views/Index.vue'
import FeedbackList from './views/feedback/list'
import FeedbackEdit from './views/feedback/edit'
import UserEdit from './views/user/edit'

//添加路由地址
const routers = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            keepAlive: false
        }

    },
    {
         path: '/',
         component: Index,
        meta: {
            keepAlive: true
        }

    },
    {
        path: '/feedback/list',
        component: FeedbackList,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/feedback/edit',
        component: FeedbackEdit,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/user/edit',
        component: UserEdit,
        meta: {
            keepAlive: true
        }
    }
]


export default routers
