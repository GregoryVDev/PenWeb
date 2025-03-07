let index = 0;
const images = document.querySelectorAll(".illustration img");
let interval;

// Fonction pour changer d'image
function changeImage() {
  if (window.innerWidth <= 768) {
    // Activer uniquement en mobile
    images.forEach((img) => img.classList.remove("active"));
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }
}

// Fonction pour gérer l'activation/désactivation du carrousel
function checkCarousel() {
  clearInterval(interval); // Stopper l'interval existant

  if (window.innerWidth <= 768) {
    images.forEach((img) => img.classList.remove("active"));
    images[0].classList.add("active"); // S'assurer que la première image est affichée
    interval = setInterval(changeImage, 6000); // Relancer l'animation
  } else {
    images.forEach((img) => img.classList.add("active")); // Afficher toutes les images en tablette
  }
}

// Lancer au chargement
checkCarousel();

// Écouter les changements de taille d'écran
window.addEventListener("resize", checkCarousel);
