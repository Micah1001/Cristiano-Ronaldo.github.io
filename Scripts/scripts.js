const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
});

const slides = document.querySelectorAll('.carousel img');
let index = 0;

function showSlide() {
    slides.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function next() {
    index = (index + 1) % slides.length;
    showSlide();
}

function prev() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide();
}

// Initialize carousel on page load
showSlide();