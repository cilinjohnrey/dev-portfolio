<template>
<div class="about-me-container">
    <div class="about-me-image" v-tilt="{ max: 10, speed: 400}">
        <img src="/Laptop.png" alt="Laptop with code">
    </div>
    <div class="about-me-text">
        <h2>ABOUT ME</h2>
        <p>💻 I'm a devoted web developer with skills in both front-end and back-end web application development, driven by a passion using technology to solve real-world problems, make a positive impact on communities.</p>
        <p>🚀My startup journey at Passafund, exposed me to the dynamic world of entrepreneurship, an innovative lending and borrowing marketplace.</p>
        <p id="portfolio">🌏My ultimate goal is to collaborate with visionary organizations committed to use innovation to address societal challenges and make the world a better place to live.</p>
    </div>
</div>
</template>
<style>
.about-me-container {
    display: flex;
    justify-content: space-between;
    padding: 60px 0px;
    background-color: #FFFFFF;
}

.about-me-image {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    perspective: 1000px;
    padding-left: 300px;
}

.about-me-image img {
    max-width: 100%;
    border-radius: 15px;
    will-change: transform;
}

.about-me-text {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-right: 300px;
    padding-left: 50px;
}

.about-me-text h2 {
    color: #147EFB;
    margin-top: 0px;
}

.about-me-text p {
    font-size: 18px;
    text-align: justify;
    margin: 25px 0px;
}
</style>