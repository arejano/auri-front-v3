import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import router from './router/index'
import 'flowbite'
import vClickOutside from 'click-outside-vue3'

const app = createApp(App)

app.use(router)
app.use(vClickOutside)
app.mount('#app')
