<template>
  <div class="portfolio-container">
    <h2 class="portfolio-title">PORTFOLIO</h2>
    <Carousel v-if="portfolioItems.length">
      <Slide v-for="item in portfolioItems" :key="item.id">
        <div class="carousel__item">
          <div class="portfolio-item">
              <div class="portfolio-image">
                <img :src="item.image" :alt="item.title" />
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
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <p v-else>No portfolio items available.</p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Portfolio',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
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
})
</script>

<style>
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

.carousel__item {
  width: 100%;
  background-color: #FFFFFF;
  color: #333;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
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
  border-radius: 8px;
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
  border-radius: 2px;
  font-size: 16px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-link {
  color: #1e90ff;
  text-decoration: none;
  margin-top: 20px;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid transparent;
}
</style>