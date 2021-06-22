import { createApp } from 'vue';
import { setupStore } from '@/store';
import { isReady, setupRouter } from '@/router';
import App from './app.vue';
import '@/assets/styles/index.less';


const app = createApp(App);
setupRouter(app);

setupStore(app);

//  等待router
await isReady();
app.mount('#app');
