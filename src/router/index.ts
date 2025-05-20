import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../components/Welcome.vue";
import Guide from "../components/Guide.vue";
import AcceptChallenge from "../components/AcceptChallenge.vue";
import CompleteChallenge from "../components/CompleteChallenge.vue";

const routes = [
  { path: "/", component: Welcome },
  { path: "/guide", component: Guide },
  { path: "/accept", component: AcceptChallenge },
  { path: "/complete", component: CompleteChallenge },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
