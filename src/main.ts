import { createApp } from 'vue';
import { debounce } from 'lodash';
import { createPinia } from 'pinia';
import App from './app.vue';
import router from './routes';
import '@/assets/styles/index.less';

const pinia = createPinia();
pinia.use(({ options, store }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((debouncedActions, action) => {
      console.log('options.debounce.searchContacts', options.debounce[action]);
      //@ts-ignore
      debouncedActions[action] = debounce(store[action],  options.debounce[action]);
      return debouncedActions;
    }, {});
  }
});
  
createApp(App).use(router).use(pinia).mount('#app');
