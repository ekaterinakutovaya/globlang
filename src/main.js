import './assets/main.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import Vue3Toastify from 'vue3-toastify'

import App from './App.vue'
import router from './router'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(Vue3Toastify, {
  autoClose: 3000,
})
app.use(pinia)
app.use(router)

app.mount('#app')
