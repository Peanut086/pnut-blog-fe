import { createApp } from 'vue'
import pinia from './store'
import './assets/style/index.css'
import App from './App.vue'
import registerIcons from './icon-register'
import router from './router'

const app = createApp(App)
app.use(router)
// 引入Pinia
app.use(pinia)
// 注册图标
registerIcons(app)
app.mount('#app')
