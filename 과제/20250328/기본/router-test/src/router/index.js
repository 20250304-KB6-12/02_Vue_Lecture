import { createRouter, createWebHistory } from "vue-router"; // 이 줄 추가

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Members from "@/pages/Members.vue";
import Videos from "@/pages/Videos.vue";
import MemberInfo from "@/pages/MemberInfo.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/members", component: Members },
    { path: "/members/:id", component: MemberInfo },
    { path: "/videos", component: Videos },
  ],
});
export default router;
