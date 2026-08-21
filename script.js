document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

/* Image loader: add `.loaded` class when images finish so they fade in */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.hero-photo img, .panel figure img, .cards img, .gallery img').forEach(function (img) {
    // preserve existing behavior if already loaded
    if (img.complete && img.naturalWidth !== 0) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', function () { img.classList.add('loaded'); });
      img.addEventListener('error', function () { img.classList.add('loaded'); });
    }
    // encourage lazy loading where missing
    if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy');
  });
});
