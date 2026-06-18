const artworks = [
  {
    title: "Frieren",
    category: "Ilustração tradicional",
    image: "images/arte-9.png",
    alt: "Obra artística de Davi Nabas com visual moderno"
  },
  {
    title: "Maomao",
    category: "Ilustração tradicional",
    image: "images/arte-2.png",
    alt: "Ilustração artística de Davi Nabas em destaque"
  }
];

const galleryGrid = document.getElementById("galleryGrid");
const currentYear = document.getElementById("currentYear");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

currentYear.textContent = new Date().getFullYear();

function renderGallery() {
  galleryGrid.innerHTML = artworks
    .map(
      (art) => `
        <article class="art-card">
          <div class="art-image-wrap">
            <img
              class="art-image"
              src="${art.image}"
              alt="${art.alt}"
              loading="lazy"
            />
            <div class="art-overlay">
              <div class="art-meta">
                <div class="art-info">
                  <h3>${art.title}</h3>
                  <p>${art.category}</p>
                </div>
                <button
                  class="view-btn"
                  type="button"
                  data-image="${art.image}"
                  data-alt="${art.alt}"
                >
                  Ampliar
                </button>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

renderGallery();

document.addEventListener("click", (event) => {
  const button = event.target.closest(".view-btn");
  if (!button) return;

  const image = button.dataset.image;
  const alt = button.dataset.alt;

  lightboxImage.src = image;
  lightboxImage.alt = alt;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});
