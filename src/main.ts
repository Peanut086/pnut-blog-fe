import {createApp} from 'vue'
import {createPinia} from "pinia";
import * as VueRouter from "vue-router";
import './assets/style/index.css'
import App from './App.vue'
import registerIcons from "./icon-register";
import routes from "./router";

const app = createApp(App);
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: routes
})
app.use(router)
// 引入Pinia
const pinia = createPinia();
app.use(pinia)
// 注册图标
registerIcons(app);
app.mount('#app');
