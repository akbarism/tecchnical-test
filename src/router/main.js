import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../components/HomePage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        }
    ]
})

export default router