import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: App },
  { path: '/:hash(.*)', component: App }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    return { top: 0 };
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');