import {RouteRecordRaw} from "vue-router"

let routes: RouteRecordRaw[];
routes = [
  {
    path: "/list",
    name: "contentList",
    component: () => import("../components/pageContentList/pageContentList.vue")
  }
];

export default routes
