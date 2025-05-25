const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const itemCount = items.length;
const itemsPerSlide = 3;
const gap = 20; // correspond à ton gap en CSS
let currentIndex = 0;

function slideCarousel() {
  const itemWidth = items[0].offsetWidth + gap;

  currentIndex += itemsPerSlide;
  if (currentIndex >= itemCount) {
    currentIndex = 0;
  }

  const offset = itemWidth * currentIndex;
  track.style.transform = `translateX(-${offset}px)`;
}

setInterval(slideCarousel, 6000); // change tous les 6 secondes
