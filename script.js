const artworks = [
  {
    title: "Frieren",
    category: "Ilustração tradicional",
    image: "images/arte-1.png",
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

const accessibilityToggle = document.getElementById("accessibilityToggle");
const accessibilityPanel = document.getElementById("accessibilityPanel");
const accessibilityClose = document.getElementById("accessibilityClose");
const themeButtons = document.querySelectorAll(".a11y-mode");

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
                  aria-label="Ampliar imagem ${art.title}"
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
  document.body.style.overflow = "hidden";
});

function closeLightbox() {
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/* Painel de acessibilidade */
function openAccessibilityPanel() {
  accessibilityPanel.classList.add("active");
  accessibilityPanel.setAttribute("aria-hidden", "false");
  accessibilityToggle.setAttribute("aria-expanded", "true");
}

function closeAccessibilityPanel() {
  accessibilityPanel.classList.remove("active");
  accessibilityPanel.setAttribute("aria-hidden", "true");
  accessibilityToggle.setAttribute("aria-expanded", "false");
}

accessibilityToggle.addEventListener("click", () => {
  const isOpen = accessibilityPanel.classList.contains("active");

  if (isOpen) {
    closeAccessibilityPanel();
  } else {
    openAccessibilityPanel();
  }
});

accessibilityClose.addEventListener("click", closeAccessibilityPanel);

document.addEventListener("click", (event) => {
  const clickedInsidePanel = accessibilityPanel.contains(event.target);
  const clickedToggle = accessibilityToggle.contains(event.target);

  if (!clickedInsidePanel && !clickedToggle && accessibilityPanel.classList.contains("active")) {
    closeAccessibilityPanel();
  }
});

/* Temas de acessibilidade visual */
const availableThemes = [
  "default",
  "contrast",
  "protanopia",
  "deuteranopia",
  "tritanopia"
];

function applyTheme(theme) {
  const safeTheme = availableThemes.includes(theme) ? theme : "default";

  document.body.classList.remove(
    "theme-contrast",
    "theme-protanopia",
    "theme-deuteranopia",
    "theme-tritanopia"
  );

  if (safeTheme !== "default") {
    document.body.classList.add(`theme-${safeTheme}`);
  }

  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === safeTheme;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("davi-nabas-theme", safeTheme);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.theme);
  });
});

const savedTheme = localStorage.getItem("davi-nabas-theme") || "default";
applyTheme(savedTheme);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (lightbox.classList.contains("active")) {
      closeLightbox();
    }

    if (accessibilityPanel.classList.contains("active")) {
      closeAccessibilityPanel();
    }
  }
});
