import { createRouter, createWebHashHistory } from "vue-router";

import Todos from "@/views/Todos";
import TodosWithDispatcher from "@/views/TodosWithDispatcher";

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: Todos,
  },
  {
    path: "/with_dispatcher",
    name: "WithDispatcher",
    component: TodosWithDispatcher,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
