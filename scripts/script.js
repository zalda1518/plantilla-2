// Parallax para montañas
const back = document.getElementById("mountain-back");
const front = document.getElementById("mountain-front");

/* preloader */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("fade-out");
  setTimeout(() => preloader.style.display = "none", 600);
});

/* preloader */

window.addEventListener("scroll", () => {
  let value = window.scrollY;
 /*  back.style.transform = `translateY(${value * 0.2}px)`;   // más lento
  front.style.transform = `translateY(${value * 0.5}px)`;  */ // más rápido
});

// Animación de imágenes al hacer scroll (reveal)
const images = document.querySelectorAll('.content-block img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

images.forEach(img => observer.observe(img));


/* ocultar header con scroll */

let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scroll down → ocultar
    header.classList.add("hidden");
  } else {
    // scroll up → mostrar
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // evitar valores negativos
});

