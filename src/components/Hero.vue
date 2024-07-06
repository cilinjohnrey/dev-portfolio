<template>
    <div id="home" class="hero-container">
        <div class="hero-text">
            <p class="hello-text">Hello, I'm</p>
            <h1 class="firstname-text">John Rey, <span class="lastname-text">Cilin</span></h1>
            <p class="a-text">
                <span>A</span>
                <VueWriter class="skill-text" :array="arr" :eraseSpeed="50" :typeSpeed="100" :delay="1000" />
            </p>
            <div class="buttons">
                <router-link to="#contact-me" class="hire-me">
                    HIRE ME
                </router-link>
                <router-link to="#portfolio" class="portfolio">
                    VIEW MY PORTFOLIO
                </router-link>
            </div>
            <div class="social-icons">
                <a class="social-icon" href="https://www.linkedin.com/in/john-rey-cilin-418485238/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="tabler-icon tabler-icon-brand-linkedin">
                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z">
                        </path>
                        <path d="M8 11l0 5"></path>
                        <path d="M8 8l0 .01"></path>
                        <path d="M12 16l0 -5"></path>
                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                    </svg>
                </a>
                <a class="social-icon" href="https://github.com/cilinjohnrey" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="tabler-icon tabler-icon-brand-github">
                        <path
                            d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="hero-image">
            <img src="/JC.png" alt="John Rey">
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { arr: ["Web Developer"] };
    },
};
</script>
<style>
.hero-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 300px;
    padding-top: 120px;
    background-color: #F9F9F9;
    box-shadow: 0 2px 4px rgba(85, 0, 0, 0.1);
}

.hero-text {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.hero-text p, h1 {
    margin: 10px 0;
    color: #2D2E32;
}

.hero-text .hello-text {
    font-size: 32px;
    font-weight: bold;
}

.hero-text .firstname-text {
    font-size: 48px;
    font-weight: 900;
}

.hero-text .lastname-text {
    font-size: 48px;
    font-weight: 900;
    color: #147EFB;
}

.hero-text .a-text {
    display: flex;
    align-items: center;
    font-size: 29px;
    font-weight: bold;
}

.hero-text .a-text span {
    margin-right: 10px;
}

.hero-text .skill-text {
    font-size: 32px;
    font-weight: bold;
}

.buttons {
    margin: 20px 0;
}

.hire-me {
    display: inline-block;
    margin-right: 10px;
    padding: 14px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    background-color: #147EFB;
    color: white;
    text-decoration: none;
    text-align: center;
}

.hire-me:hover {
    background-color: darkblue;
}

.portfolio {
    display: inline-block;
    color: #2D2E32;
    margin: 0 15px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
}

.portfolio:hover {
    color: #147EFB;
}

.social-icons {
    display: flex;
    align-items: center;
    margin: 10px 0;
}

.social-icons a {
    margin-right: 10px;
}

.social-icons .social-icon {
    color: #2D2E32;
}

.social-icons .social-icon:hover {
    color: #147EFB;
}

.tech-stack {
    display: flex;
    align-items: center;
    margin: 20px 0;
}

.tech-stack p {
    font-size: 20px;
    font-weight: bold;
    color: #147EFB;
}

.tech-stack .techstack-border {
    margin: 0 15px;
    height: 30px;
    flex-grow: 1;
    border-right: 2px solid #2D2E32;
}

.icons img {
    width: 100%;
    height: auto;
}

.hero-image {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-image img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid #147EFB;
    animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
    0% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    25% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    50% {
        border-radius: 60% 30% 50% 60% / 30% 50% 60% 30%;
    }
    75% {
        border-radius: 50% 60% 30% 50% / 30% 50% 30% 50%;
    }
    100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
}
</style>