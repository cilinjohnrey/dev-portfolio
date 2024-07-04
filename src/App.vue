<script setup>
import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue';
import AboutMe from './components/About-me.vue';
import Portfolio from './components/Portfolio.vue';
import ContactMe from './components/Contact-me.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <main>
    <section id="home">
      <NavBar />
      <Hero />
    </section>
    <section id="about-me">
      <AboutMe />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>
    <section id="contact-me">
      <ContactMe />
    </section>
    <Footer />
  </main>
</template>