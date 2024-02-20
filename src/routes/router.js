import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../components/Home.vue");
const Resume = () => import("../views/Resume.vue");
const Projects = () => import("../views/Projects.vue");



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

// Change document title
router.afterEach((to) => {
  document.title = to.name;
  window.scrollTo(0, 0);
});

export default router;
