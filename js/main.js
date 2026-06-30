(function () {
  var fadeElements = document.querySelectorAll(".fade-in");
  if (!fadeElements.length) return;

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    fadeElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  fadeElements.forEach(function (el, index) {
    window.setTimeout(function () {
      el.classList.add("is-visible");
    }, 150 + index * 200);
  });
})();
