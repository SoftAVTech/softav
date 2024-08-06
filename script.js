// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
