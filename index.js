const carousel = document.querySelector('.carousel');
let currentIndex = 0;

function showNextSlide() {
    const totalSlides = carousel.children.length;
    currentIndex = (currentIndex + 1) % totalSlides; // Va al siguiente y reinicia al final
    const width = carousel.offsetWidth;
    carousel.style.transform = `translateX(-${currentIndex * width}px)`;
}

setInterval(showNextSlide, 3000); // Cambia cada 3 segundos

document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); // Evitar recargar la página
    const formData = new FormData(e.target); // Capturar los datos del formulario
    const jsonData = JSON.stringify(Object.fromEntries(formData)); // Convertir a JSON

    // Llamar al Apps Script
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
