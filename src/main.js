import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 注册router
import router from './router/index'
import api from './api/api'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.config.globalProperties.$api = api 
app.use(ElementPlus)
.use(router)
.mount('#app')
