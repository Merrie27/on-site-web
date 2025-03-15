let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides[currentIndex].classList.remove('active');
  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add('active');
  updateDots();
}

function changeSlide(step) {
  showSlide(currentIndex + step);
}

function currentSlide(index) {
  showSlide(index - 1);
}

function updateDots() {
  let dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.style.background = (idx === currentIndex) ? '#A51C30' : 'white';
  });
}

// Slider automatique toutes les 5 secondes
setInterval(() => {
  changeSlide(1);
}, 5000);

updateDots();

/* Intersection Observer (animation) */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

const animElements = document.querySelectorAll('.fade-in-left, .fade-in-right');
animElements.forEach(el => {
  observer.observe(el);
});












