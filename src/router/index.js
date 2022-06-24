
import { createRouter, createWebHistory} from 'vue-router'

import HomeComp from '@/views/HomeComp'
import AboutComp from '@/views/AboutComp'

const routes = [
  {path: "/", name: "Home", component: HomeComp},
  {path: "/about", name: "About", component: AboutComp},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;