import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { createRouter, createWebHistory } from 'vue-router';
import VueWriter from "vue-writer";
import VanillaTilt from 'vanilla-tilt';
import SwiperCore from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper as SwiperClass, SwiperSlide as SwiperSlideClass } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Autoplay, Pagination, Navigation]);

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
app.use(VueWriter);
app.directive('tilt', {
  mounted(el, binding) {
      VanillaTilt.init(el, binding.value || {
          max: 10,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
      });
  },
  unmounted(el) {
      if (el.vanillaTilt) {
          el.vanillaTilt.destroy();
      }
  },
});
app.component('Swiper', SwiperClass);
app.component('SwiperSlide', SwiperSlideClass);
app.mount('#app');