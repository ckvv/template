import ui from '@nuxt/ui/vue-plugin'
import { createApp } from 'vue'
import App from '@/App.vue'
import { i18n } from '@/i18n'
import { router } from '@/router'
import '@/shared/styles/main.css'

const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(ui)
app.mount('#app')
