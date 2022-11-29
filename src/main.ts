import { createApp } from 'vue'
import pinia from './store'
import './assets/style/index.css'
import App from './App.vue'
import registerIcons from './icon-register'
import router from './router'
import VMdEditor from './utils/registerEditor'
import VMdPreview from './utils/registerEditorPre'
import VMdPreviewHtml from './utils/registerEditorPreHTML'

const app = createApp(App)
app.use(router)
// 引入Pinia
app.use(pinia)
// 注册编辑器
app.use(VMdEditor)
// 注册预览
app.use(VMdPreview)
// 注册预览html
app.use(VMdPreviewHtml)
// 注册图标
registerIcons(app)
app.mount('#app')
