import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import {
  faPowerOff, faGear, faImage, faMaximize, faWindowMinimize, faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vClickOutside from 'click-outside-vue3';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faWindows, faPowerOff, faGear, faImage, faMaximize, faWindowMinimize, faX);

createApp(App).use(store).use(router).use(vClickOutside)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
