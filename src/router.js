import {createRouter, createWebHistory} from 'vue-router'
import NotFound from './views/NotFound'
import Tasks from "@/views/Tasks"
import New from "@/views/New";
import Task from "@/views/Task";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks, name: 'tasks'},
    { path: '/new', component: New },
    { path: '/task/:taskId?', component: Task, props: true },
    { path: '/:notFound(.*)', component: NotFound},
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
