
import { createRouter, createWebHistory} from 'vue-router'

import HomeComp from '@/views/HomeComp'
import AboutComp from '@/views/AboutComp'
import BrazilComp from '@/views/BrazilComp'
 
const routes = [
  {path: "/", name: "Home", component: HomeComp},
  {path: "/about", name: "About", component: AboutComp},
  {path: "/brazil", name: "Brazil", component: BrazilComp},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;