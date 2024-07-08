<template>
  <div class="portfolio-container">
    <h2 class="portfolio-title">PORTFOLIO</h2>
    <Swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
      delay: 2500,
      disableOnInteraction: true,
    }" :pagination="{
        clickable: true,
      }" :navigation="true" @autoplayTimeLeft="onAutoplayTimeLeft" class="mySwiper">
      <SwiperSlide v-for="item in portfolioItems" :key="item.id">
        <div class="portfolio-item">
          <div class="portfolio-image">
            <img :src="item.image" :alt="item.title">
          </div>
          <div class="portfolio-description">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <div class="tech-stacks-used">
              <span v-for="tech in item.techStack" :key="tech">{{ tech }}</span>
            </div>
            <a class="project-link" :href="item.link" target="_blank">Visit</a>
          </div>
        </div>
      </SwiperSlide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg viewBox="0 0 48 48" ref="progressCircle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </Swiper>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const progressCircle = ref(null);
    const progressContent = ref(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.value.style.setProperty('--progress', 1 - progress);
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return {
      onAutoplayTimeLeft,
      progressCircle,
      progressContent,
    };
  },
  data() {
    return {
      portfolioItems: [
        {
          id: 1,
          title: 'PASSATXT (June 2022)',
          description: 'Passatxt is a bulk sms and efficiency tool used by hinulawanlab, passaFund, and goizzi lending corp. to notify customers. It provides send now for messages to send instantly and send later for messages to be scheduled.',
          techStack: ['HTML', 'CSS', 'Bootstrap', 'Vue.js', 'Laravel'],
          image: 'Passatxt.png',
          link: 'https://passatxt.com/',
        },
        {
          id: 2,
          title: 'PASSAFUND BORROWER APP (March 2023)',
          description: 'Passafund borrower app is a website where the borrowers will create an account to provide their personal information, requirements and documents. In order for passafund and lenders to perform KYC.',
          techStack: ['HTML', 'CSS', 'Vuetify', 'Nuxt.js', 'Laravel'],
          image: '/Passafund-borrower.png',
          link: 'https://borrower.passafund.com/',
        },
        {
          id: 3,
          title: 'PASSAFUND CMS APP (May 2023)',
          description: 'Passafund cms app is a website where the passafund  perform KYC to the borrowers and lenders. Manage borrower loan application, lender new market location request passafund app analytics.',
          techStack: ['HTML', 'CSS', 'Vuetify', 'Nuxt.js', 'Laravel'],
          image: '/Passafund-cms.png',
          link: 'https://cms.passafund.com/',
        },
        {
          id: 4,
          title: 'PASSAFUND LENDER APP (June 2023)',
          description: 'Passafund lender app is a website where the lenders navigate borrower loan application from borrower app. Find borrower loan that fit with their loan approval matrix. Contact borrower directly in just a few clicks.',
          techStack: ['HTML', 'CSS', 'Vuetify', 'Nuxt.js', 'Laravel'],
          image: '/Passafund-lender.jpeg',
          link: 'https://lender.passafund.com/',
        },
      ],
    }
  }
};
</script>

<style scoped>
.portfolio-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 300px;
  background-color: #F9F9F9;
  box-shadow: 0 2px 4px rgba(85, 0, 0, 0.1);
}

.portfolio-container .portfolio-title {
  display: flex;
  align-items: flex-start;
  font-weight: bold;
  color: #147EFB;
}

.swiper {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(85, 0, 0, 0.1);
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 30px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.portfolio-item {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 90px;
  border-radius: 30px;
}

.portfolio-item .portfolio-image {
  width: 49%;
}

.portfolio-item .portfolio-image img {
  width: 100%;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(85, 0, 0, 0.1);
}

.portfolio-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 49%;
}

.portfolio-description h3 {
  font-size: 20px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 10px;
}

.portfolio-description p {
  font-size: 18px;
  text-align: justify;
  margin-bottom: 18px;
}

.tech-stacks-used {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.tech-stacks-used span {
  padding: 8px 22px;
  border-radius: 30px;
  font-size: 16px;
  background-color: #FFFFFF;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-link {
  color: #1e90ff;
  text-decoration: none;
  margin-top: 20px;
}
</style>