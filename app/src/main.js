import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'

import './assets/main.css'

axios.defaults.baseURL = 'http://139.162.28.246:5010'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
