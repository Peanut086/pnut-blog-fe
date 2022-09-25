import {createApp} from 'vue'
import {createPinia} from "pinia";
import './assets/style/index.css'
import App from './App.vue'
import registerIcons from "./icon-register";

const app = createApp(App);
// 引入Pinia
const pinia = createPinia();
app.use(pinia)
// 注册图标
registerIcons(app);
app.mount('#app');
