import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     meta: {
    //         title: '首页',
    //     },
    //     component: () => import('@/pages/home.vue')
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
