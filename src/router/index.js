import { createRouter,createWebHistory} from 'vue-router';
import MainLayout from '../components/layout/MainLayout.vue';
import Message from '../components/views/message/Index.vue'
const routes = [
        {
            path: "/index",
            component: MainLayout,
            redirect:"/",
            meta:{},
        },
        {
            path: "/",
            component: MainLayout,
            redirect: "/message",
            name:"home",
            children:[
                {
                    path:"/message",
                    name:"message",
                    component:Message,
                }
            ],
        }
]


const router = createRouter({
    // 使用 history 模式
    history: createWebHistory(),
    // 路由规则
    routes,
})

export default router;