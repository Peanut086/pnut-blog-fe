import {RouteRecordRaw} from "vue-router"
import * as VueRouter from "vue-router";

let routes: RouteRecordRaw[];
routes = [
  {
    path: "/list",
    name: "contentList",
    component: () => import("../components/pageContentList/pageContentList.vue")
  }, {
    path: "/detail",
    name: "content",
    component: () => import("../components/pageContent/pageContent.vue")
  }, {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/login.vue")
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

export default router
