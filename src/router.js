import {createRouter, createWebHistory} from 'vue-router'
// import HomePage from './views/HomePage'
// import ReusablePage from './views/ReusablePage'
// import VuexPage from './views/VuexPage'
import NotFound from './views/NotFound'
import Tasks from "@/views/Tasks"
import New from "@/views/New";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Tasks },
    { path: '/new', component: New },
    { path: '/:notFound(.*)', component: NotFound }
    // { path: '/reusable', component: ReusablePage },
    // { path: '/vuex', component: VuexPage },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
