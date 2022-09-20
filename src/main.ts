import {createApp} from 'vue'
import './assets/style/index.css'
import App from './App.vue'
import registerIcons from "./icon-register";
import pnutRequest from "./pnutAxios/index"

const app = createApp(App);
// 挂载全局axios二次封装请求方法
app.config.globalProperties.pnutRequest = pnutRequest;
// 注册图标
registerIcons(app);
app.mount('#app');
