const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showNextSlide() {
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + 1) % totalSlides; // Va al siguiente y reinicia al final
    const width = carousel.offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}