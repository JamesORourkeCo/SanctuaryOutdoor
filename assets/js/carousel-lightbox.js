// Gallery carousels
document.querySelectorAll(".carousel").forEach(carousel => {
  const track = carousel.querySelector(".carousel-track");
  const arrows = carousel.querySelectorAll(".carousel-arrow");

  if (!track) return;

  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const direction = arrow.dataset.direction;
      const scrollAmount = track.clientWidth * 0.9;
      track.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
      });
    });
  });
});

// Lightbox / full-screen viewer
(function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeButtons = document.querySelectorAll("[data-lightbox-close]");

  const prevBtnLb = document.querySelector("[data-lightbox-prev]");
  const nextBtnLb = document.querySelector("[data-lightbox-next]");
  let currentProject = null;
  let currentIndex = 0;

  function updateLightboxImage() {
    if (!currentProject || !lightboxImg) return;
    const track = document.querySelector(`.carousel-track[data-project="${currentProject}"]`);
    if (!track) return;
    const imgs = track.querySelectorAll(".carousel-image");
    if (!imgs.length) return;
    const safeIndex = ((currentIndex % imgs.length) + imgs.length) % imgs.length;
    currentIndex = safeIndex;
    const img = imgs[currentIndex];
    lightboxImg.src = img.getAttribute("src");
    lightboxImg.alt = img.alt || "Project image";
  }

  function openLightbox(project, index) {
    currentProject = project;
    currentIndex = index;
    updateLightboxImage();
    if (!lightbox) return;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".carousel-track .carousel-image").forEach(img => {
    img.addEventListener("click", () => {
      const track = img.closest(".carousel-track");
      if (!track) return;
      const project = track.dataset.project;
      const index = parseInt(img.dataset.index || "0", 10);
      openLightbox(project, index);
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  if (prevBtnLb) {
    prevBtnLb.addEventListener("click", () => {
      currentIndex--;
      updateLightboxImage();
    });
  }

  if (nextBtnLb) {
    nextBtnLb.addEventListener("click", () => {
      currentIndex++;
      updateLightboxImage();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("open")) return;
    if (e.key === "ArrowLeft") {
      currentIndex--;
      updateLightboxImage();
    } else if (e.key === "ArrowRight") {
      currentIndex++;
      updateLightboxImage();
    }
  });
})();
