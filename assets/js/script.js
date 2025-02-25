// script.js
// Muestra el botón cuando se hace scroll hacia abajo
window.onscroll = function () {
  toggleScrollTopButton();
};

function toggleScrollTopButton() {
  const button = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Función para volver al inicio de la página
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
