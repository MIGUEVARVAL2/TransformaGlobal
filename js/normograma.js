(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  var buttons = document.querySelectorAll(".nav-link");

  // Agrega el evento de clic a cada botón
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Aquí va el código que quieres ejecutar cuando se hace clic en el botón
      for (var i = 1; i < items.length; i++) {
        items[i].classList.remove("in-view");
      }
      setTimeout(function () { for (var i = 0; i < items.length; i++) { if (isElementInViewport(items[i])) { items[i].classList.add("in-view"); } } }, 2000);

    });
  });

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

