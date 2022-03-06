import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faWindows);

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
