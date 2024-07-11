<template>
    <div class="techstack-container">
        <div class="techstack-swiper-container">
            <swiper 
                :breakpoints="breakpoints"
                :space-between="0"
                :loop="true"
                :autoplay="{ delay: 3000, disableOnInteraction: false }"
                :modules="modules"
                class="techstack-swiper"
                id="about-me"
            >
                <swiper-slide v-for="(tech, index) in techs" :key="index">
                    <div class="techstack-item">
                        <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
                        <p>{{ tech.name }}</p>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
    name: 'Techstack',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data() {
        return {
            techs: [
                { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
                { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
                { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
                { name: 'Nuxt.js', icon: 'https://skillicons.dev/icons?i=nuxt' },
                { name: 'Vue.js', icon: 'https://skillicons.dev/icons?i=vue' },
                { name: 'PHP', icon: 'https://skillicons.dev/icons?i=php' },
                { name: 'Laravel', icon: 'https://skillicons.dev/icons?i=laravel' },
                { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
            ],
            breakpoints: {
                0: {
                    slidesPerView: 2,
                },
                640: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 3,
                },
                870: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 4,
                },
                1280: {
                    slidesPerView: 4,
                },
                1400: {
                    slidesPerView: 4,
                },
                1600: {
                    slidesPerView: 6,
                },
            },
        };
    },
};
</script>

<style scoped>
@import "swiper/swiper-bundle.css";

.techstack-container {
    width: 100%;
    background-color: #2d2e32;
}

.techstack-swiper-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 300px;
}

.techstack-item {
    text-align: center;
}

.tech-icon {
    width: 70px;
    height: 70px;
}

.techstack-item p {
    color: white;
    font-size: 16px;
    margin-top: 0px;
}
</style>