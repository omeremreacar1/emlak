const galleryLightbox = GLightbox({
  selector: ".glightbox",
  touchNavigation: true,
  loop: true,
  zoomable: true,
  closeButton: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const fullscreenBtn = document.getElementById("fullscreenBtn");

  if (!fullscreenBtn) return;

  fullscreenBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const images = document.querySelectorAll(".carousel-item img");
    if (!images.length) return;

    const elements = [];
    let startIndex = 0;

    images.forEach((img, index) => {
      elements.push({
        href: img.src,
        type: "image",
      });

      if (img.closest(".carousel-item").classList.contains("active")) {
        startIndex = index;
      }
    });

    const fullscreenLightbox = GLightbox({
      elements: elements,
      startAt: startIndex,
      touchNavigation: true,
      loop: true,
      zoomable: true,
      closeButton: true,
    });

    fullscreenLightbox.open();
  });
});
