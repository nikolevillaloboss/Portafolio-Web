//las funciones se pueden llamar desde arriba


//Boton .portalio
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el botón por su ID
    var button = document.getElementById("portafoliop");

    // Agregamos un evento click al botón
    button.addEventListener("click", function () {
        // URL de la página externa
        var urlExterna = "https://www.behance.net/nikolevillalo";

        // Redirigir a la página externa
        window.open(urlExterna, "_blank");
    });
});

//cartas imagenes
const images= document.querySelectorAll('.carta')
images.forEach(image => {
    image.addEventListener('mouseover', () => {
    
      image.style.transform = 'scale(1.2)';
    });
    image.addEventListener('mouseout', () => {
        
        image.style.transform = 'scale(1)';
      });
    });