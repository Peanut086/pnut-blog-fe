import {RouteRecordRaw} from "vue-router"
import * as VueRouter from "vue-router";

let routes: RouteRecordRaw[];
routes = [
  {
    path: "/list",
    name: "list",
    props: true,
    component: () => import("../components/pageContentList/pageContentList.vue")
  }, {
    path: "/login",
    name: "login",
    component: () => import("../pages/login/login.vue")
  }, {
    path: "/register",
    name: "register",
    component: () => import("../pages/register/register.vue")
  }, {
    path: "/article-detailed",
    name: "article-detailed",
    component: () => import("../pages/articalDetail/articalDetail.vue")
  }, {
    path: "/create-article",
    name: "create-article",
    component: () => import("../pages/createArtical/createArtical.vue")
  }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})

export default router
