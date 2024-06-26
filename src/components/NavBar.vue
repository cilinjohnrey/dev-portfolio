<template>
    <div class="navbar-container">
        <div class="brand">
            Cilin
        </div>
        <div class="navbar-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Contact</a>
        </div>
    </div>
</template>
<style>
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 300px;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* Para naay shadow effect */
    height: 80px;
}

.brand {
    font-size: 24px;
    font-weight: bold;
    color: #2D2E32;
}

.navbar-links a {
    text-decoration: none;
    color: #2D2E32;
    margin: 0 10px;
    font-size: 18px;
}

.navbar-links a:hover {
    color: #147EFB;
}
</style>