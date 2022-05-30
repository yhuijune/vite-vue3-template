import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import ElementPlus from 'element-plus';

import "@/styles/reset.css"
import '@/styles/element/index.scss';
import '@/styles/element/theme/dark.scss';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');
