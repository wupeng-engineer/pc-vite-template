import { createApp } from 'vue';
import App from './app.vue';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';
import '@/assets/styles/index.less';


const app = createApp(App);
setupRouter(app);

setupStore(app);

app.mount('#app');
