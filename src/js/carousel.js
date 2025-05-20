const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const total = items.length;
let index = 0;
let startX = 0;
let isDragging = false;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  showSlide(index);
}

// Auto slide every 6 seconds
let autoSlide = setInterval(nextSlide, 6000);

// Swipe support
track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
  clearInterval(autoSlide); // stop auto during swipe
});

track.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (diff > 50) {
    index = (index + 1) % total;
  } else if (diff < -50) {
    index = (index - 1 + total) % total;
  }

  showSlide(index);
  autoSlide = setInterval(nextSlide, 6000); // resume auto
  isDragging = false;
});

// Optional: swipe with mouse (for desktop)
track.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
  clearInterval(autoSlide);
});

track.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  const endX = e.clientX;
  const diff = startX - endX;

  if (diff > 50) {
    index = (index + 1) % total;
  } else if (diff < -50) {
    index = (index - 1 + total) % total;
  }

  showSlide(index);
  autoSlide = setInterval(nextSlide, 6000);
  isDragging = false;
});
