import {createApp} from 'vue'
import './assets/style/index.css'
import App from './App.vue'
import registerIcons from "./icon-register";

const app = createApp(App);
// 注册图标
registerIcons(app);
app.mount('#app');
