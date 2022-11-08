import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 注册router
import router from './router/index'

createApp(App).use(ElementPlus)
.use(router)
.mount('#app')
