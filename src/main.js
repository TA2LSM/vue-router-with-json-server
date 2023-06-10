import { createApp } from 'vue';
import App from './App.vue';

// automatically import index.js from this folder. No need to write "/index.js"
import router from './router';

// register router there so app can use it
createApp(App).use(router).mount('#app');
