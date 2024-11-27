const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showNextSlide() {
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    const width = carousel.offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

setInterval(showNextSlide, 3000);

document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const jsonData = JSON.stringify(Object.fromEntries(formData));
    
    google.script.run
        .withSuccessHandler(() => alert("¡Formulario enviado con éxito!"))
        .withFailureHandler((error) => alert("Error: " + error))
        .procesarFormulario(jsonData);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}
