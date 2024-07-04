<template>
    <div class="navbar-container">
        <div class="brand">
            <router-link to="/" class="brand">Cilin</router-link>
        </div>
        <div class="hamburger-menu" @click="toggleMenu">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </div>
        <div :class="['navbar-links', { open: isMenuOpen }]">
            <div class="close" v-if="isMenuOpen" @click="toggleMenu"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></div>
            <router-link to="#home" @click.native="toggleMenu()">Home</router-link>
            <router-link to="#about-me" @click.native="toggleMenu()">About</router-link>
            <router-link to="#portfolio" @click.native="toggleMenu()">Portfolio</router-link>
            <router-link to="#contact-me" @click.native="toggleMenu()">Contact</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>

<style>
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 300px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    height: 80px;
}

.brand {
    font-size: 24px;
    font-weight: bold;
    color: #2D2E32;
    text-decoration: none;
}

.hamburger-menu {
    display: none;
    cursor: pointer;
}

.hamburger-menu svg {
    width: 24px;
    height: 24px;
    fill: #2D2E32;
}

.navbar-links {
    display: flex;
    transition: all 0.3s ease;
}

.navbar-links a {
    text-decoration: none;
    color: #2D2E32;
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.3s;
}

.navbar-links a:hover {
    color: #147EFB;
}

@media only screen and (max-width: 1150px) {
    .navbar-container {
        padding: 10px 60px;
    }

    .hamburger-menu {
        display: block;
    }

    .navbar-links {
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 1000;
    }

    .navbar-links.open {
        display: flex;
    }

    .navbar-links .close {
        position: absolute;
        top: 40px;
        right: 40px;
        cursor: pointer;
    }

    .navbar-links svg {
        width: 24px;
        height: 24px;
        fill: #2D2E32;
    }

    .navbar-links a {
        margin: 20px 0;
        font-size: 24px;
    }

    .navbar-links a:hover {
        color: #147EFB;
    }
}

@media only screen and (max-width: 600px) {
    .navbar-container {
        padding: 10px 60px;
    }

    .navbar-links a {
        font-size: 20px;
    }
}

@media only screen and (max-width: 300px) {
    .navbar-container {
        padding: 10px 60px;
    }

    .navbar-links a {
        font-size: 18px;
    }
}
</style>