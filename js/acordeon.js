document.addEventListener("DOMContentLoaded", function() {
    const preguntas = document.querySelectorAll(".pregunta");
  
    preguntas.forEach(function(pregunta) {
      pregunta.addEventListener("click", function() {
        this.classList.toggle("activa");
        const respuesta = this.querySelector(".respuesta");
        respuesta.classList.toggle("active");
      });
    });
  });
  