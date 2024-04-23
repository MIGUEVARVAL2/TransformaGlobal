document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', function () {
      // Toggle de la clase 'active' para mostrar/ocultar el contenido
      this.classList.toggle('active');
    });
  });
});


setTimeout(function() {
  document.getElementById("instruction-message").classList.add("fade");
  setTimeout(function() {
      document.getElementById("instruction-message").remove();
  }, 1000);
}, 8000);