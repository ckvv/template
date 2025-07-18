import ui from '@nuxt/ui/vue-plugin';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { initStores } from '@/stores';
import App from './App.vue';
import { router } from './router';
import './assets/main.css';

const app = createApp(App);
app.use(createPinia());
app.use(ui);

initStores().finally(() => {
  app.use(router);
  app.mount('#app');
});
