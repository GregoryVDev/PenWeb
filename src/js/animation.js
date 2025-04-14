const options = document.querySelectorAll(".option");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3, // déclenche quand 30% est visible
  }
);

options.forEach((option, index) => {
  option.style.animationDelay = `${0.2 + index * 0.2}s`;
  observer.observe(option);
});

// Sélectionne tous les éléments .option et .service
const elements = document.querySelectorAll(".service");

const view = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3, // quand 30% visible
  }
);

// Applique une animation différée à chacun
elements.forEach((el, index) => {
  el.style.animationDelay = `${0.2 + index * 0.2}s`;
  view.observe(el); // Observe chaque élément
});

// Sélectionne tous les éléments .avantage
const avantages = document.querySelectorAll(".avantage");

const obsview = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3, // 30% de l'élément visible avant d'activer l'animation
  }
);

// Applique l'animation différée à chacun
avantages.forEach((avantage, index) => {
  avantage.style.animationDelay = `${0.2 + index * 0.2}s`;
  obsview.observe(avantage); // Observe chaque élément
});
