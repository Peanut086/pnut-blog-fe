import {RouteRecordRaw} from "vue-router"

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

export default routes
