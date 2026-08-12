/* ── Wil'le portfolio — interactions ───────────────────────────────────── */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Only apply scroll-reveal hiding when JS is on AND motion is allowed,
  // so content is never stuck invisible.
  if (!reducedMotion) {
    document.documentElement.classList.add("js");
  }

  var nav = document.getElementById("nav");

  // Frosted nav bar once scrolled past the hero.
  function onScroll() {
    if (window.scrollY > 24) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll-reveal: fade + rise each element into view once.
  if (!reducedMotion && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
      observer.observe(el);
    });
  }

  // Art tiles are placeholders today; clicking shows a gentle hint.
  document.querySelectorAll(".art-tile").forEach(function (tile) {
    tile.addEventListener("click", function () {
      tile.classList.add("is-visible"); // safe no-op; reserved for real images
    });
  });

  // Keep the footer year current.
  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
