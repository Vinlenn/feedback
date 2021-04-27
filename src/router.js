import Login from './views/Login.vue'
import Index from './views/Index.vue'
import FeedbackList from './views/feedback/list'
import FeedbackEdit from './views/feedback/edit'
import UserEdit from './views/user/edit'
import zkhCategoryList from './views/zkh/category/list'
import zkhTypeList from './views/zkh/type/list'
import zkhArticleList from './views/zkh/article/list'
import zkhArticleInfo from './views/zkh/article/info'

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
    },
    {
        path: '/zkh/category/list',
        component: zkhCategoryList,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/zkh/type/list',
        component: zkhTypeList,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/zkh/article/list',
        component: zkhArticleList,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/zkh/article/info',
        component: zkhArticleInfo,
        meta: {
            keepAlive: true
        }
    }
]


export default routers
