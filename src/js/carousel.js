const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
const gap = 20; // même que dans ton CSS
let currentIndex = 0;

function getItemsPerSlide() {
  // Si l'écran est petit (mobile), on affiche 1 article, sinon 3
  return window.innerWidth <= 768 ? 1 : 3;
}

function slideCarousel() {
  const itemsPerSlide = getItemsPerSlide();
  const itemWidth = items[0].offsetWidth + gap;

  currentIndex += itemsPerSlide;
  if (currentIndex >= itemCount) {
    currentIndex = 0;
  }

  const offset = itemWidth * currentIndex;
  track.style.transform = `translateX(-${offset}px)`;
}

setInterval(slideCarousel, 6000); // toutes les 6 secondes

// Pour que le carrousel se repositionne bien si l'utilisateur change la taille de l'écran
window.addEventListener("resize", () => {
  currentIndex = 0;
  track.style.transform = `translateX(0px)`;
});
