import { createRouter,createWebHistory} from 'vue-router';
import MainLayout from '../components/layout/MainLayout.vue';
const routes = [
        {
            path: "/index",
            component: MainLayout,
            redirect:"/",
        },
        {
            path: "/",
            component: MainLayout,
        }
]


const router = createRouter({
    // 使用 history 模式
    history: createWebHistory(),
    // 路由规则
    routes,
})

export default router;