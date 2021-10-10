import { createApp } from 'vue'
import App from './App.vue'
// implicit index.js import
import router from './router'

createApp(App).use(router).mount('#app')
