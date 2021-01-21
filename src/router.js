import {createRouter, createWebHistory} from 'vue-router'
import NotFound from './views/NotFound'
import Tasks from "@/views/Tasks"
import New from "@/views/New";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
