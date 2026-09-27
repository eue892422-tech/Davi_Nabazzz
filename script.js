const artworks = [
  {
    title: "Frieren, Especial seleção brasileira",
    category: "Ilustração tradicional",
    image: "images/arte-1.png",
    alt: "Desenho de Frieren em especial com tema da seleção brasileira, por Davi Nabazzz"
  },
  {
    title: "Maomao",
    category: "Ilustração tradicional",
    image: "images/arte-2.png",
    alt: "Desenho de Maomao, personagem de Diário de uma Apotecária, por Davi Nabazzz"
  }, 
  {
    title: "Pomni",
    category: "Ilustração digital",
    image: "images/digital1.jpg",
    alt: "Desenho de Pomni, personagem de The Amazing Digital Circus, por Davi Nabazzz"
  },
  {
    title: "Hatsune miku e Rem",
    category: "Ilustração digital",
    image: "images/digital2.jpg",
    alt: "Desenho de Hatsune Miku e Rem, por Davi Nabazzz"
  },
  {
    title: "Hatsune miku",
    category: "Ilustração digital",
    image: "images/digital3.jpg",
    alt: "Desenho de Hatsune Miku, por Davi Nabazzz"
  },
  {
    title: "Rem (Re:zero)",
    category: "Ilustração digital",
    image: "images/digital4.jpg",
    alt: "Desenho de Rem, personagem de Re:Zero, por Davi Nabazzz"
  },
  {
    title: "Ilustracão infantil",
    category: "Ilustração digital",
    image: "images/digital5.jpg",
    alt: "Ilustração infantil criada por Davi Nabazzz"
  },
  {
    title: "Toji fushiguro",
    category: "Ilustração tradicional",
    image: "images/desenho.jpg",
    alt: "Desenho de Toji Fushiguro, personagem de Jujutsu Kaisen, por Davi Nabazzz"
  },
  {
    title: "Bocchi (de bocchi the rock)",
    category: "Ilustração tradicional",
    image: "images/desenho1.jpg",
    alt: "Desenho de Bocchi, personagem de Bocchi the Rock!, por Davi Nabazzz"
  },
  {
    title: "Beatrice",
    category: "Ilustração tradicional",
    image: "images/desenho2.jpg",
    alt: "Desenho de Beatrice, personagem de Re:Zero, por Davi Nabazzz"
  },
  {
    title: "Santa rita de cássia",
    category: "Ilustração tradicional",
    image: "images/desenho3.jpg",
    alt: "Desenho de Santa Rita de Cássia por Davi Nabazzz"
  },
  {
    title: "Santa joana d'arc",
    category: "Ilustração tradicional",
    image: "images/desenho4.jpg",
    alt: "Desenho de Santa Joana d'Arc por Davi Nabazzz"
  },
  {
    title: "Frieren",
    category: "Ilustração tradicional",
    image: "images/desenho5.jpg",
    alt: "Desenho de Frieren, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Comemoração dia de pentecostes",
    category: "Ilustração tradicional",
    image: "images/desenho6.jpg",
    alt: "Ilustração artística para comemoração do dia de Pentecostes, por Davi Nabazzz"
  },
  {
    title: "Kaoruko waguri",
    category: "Ilustração tradicional",
    image: "images/desenho7.jpg",
    alt: "Desenho de Kaoruko Waguri por Davi Nabazzz"
  },
  {
    title: "Hu tao",
    category: "Ilustração tradicional",
    image: "images/desenho8.jpg",
    alt: "Desenho de Hu Tao, personagem de Genshin Impact, por Davi Nabazzz"
  },
  {
    title: "Griffith",
    category: "Ilustração tradicional",
    image: "images/desenho9.jpg",
    alt: "Desenho de Griffith, personagem de Berserk, por Davi Nabazzz"
  },
  {
    title: "Rei ayanami",
    category: "Ilustração tradicional",
    image: "images/desenho10.jpg",
    alt: "Desenho de Rei Ayanami, personagem de Evangelion, por Davi Nabazzz"
  },
  {
    title: "Marin kitagawa",
    category: "Ilustração tradicional",
    image: "images/desenho11.jpg",
    alt: "Desenho de Marin Kitagawa, personagem de My Dress-Up Darling, por Davi Nabazzz"
  },
  {
    title: "Frieren",
    category: "Ilustração tradicional",
    image: "images/desenho12.jpg",
    alt: "Desenho de Frieren, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Nobara kugisaki",
    category: "Ilustração tradicional",
    image: "images/desenho13.jpg",
    alt: "Desenho de Nobara Kugisaki, personagem de Jujutsu Kaisen, por Davi Nabazzz"
  },
  {
    title: "Frieren",
    category: "Ilustração tradicional",
    image: "images/desenho14.jpg",
    alt: "Desenho de Frieren, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Obanai iguro e Mitsuri kanroji",
    category: "Ilustração tradicional",
    image: "images/desenho15.jpg",
    alt: "Desenho de Obanai Iguro e Mitsuri Kanroji, personagens de Demon Slayer, por Davi Nabazzz"
  },
  {
    title: "Cyborg",
    category: "Ilustração tradicional",
    image: "images/desenho16.jpg",
    alt: "Ilustração de um personagem ciborgue por Davi Nabazzz"
  },
  {
    title: "Marcille donato",
    category: "Ilustração tradicional",
    image: "images/desenho17.jpg",
    alt: "Desenho de Marcille Donato, personagem de Delicious in Dungeon, por Davi Nabazzz"
  },
  {
    title: "Stark (frieren)",
    category: "Ilustração tradicional",
    image: "images/desenho18.jpg",
    alt: "Desenho de Stark, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Maomao (diário de uma apotecária)",
    category: "Ilustração tradicional",
    image: "images/desenho19.jpg",
    alt: "Desenho de Maomao, personagem de Diário de uma Apotecária, por Davi Nabazzz"
  },
  {
    title: "Mambo",
    category: "Ilustração tradicional",
    image: "images/desenho20.jpg",
    alt: "Desenho de Mambo por Davi Nabazzz"
  },
  {
    title: "Makima",
    category: "Ilustração tradicional",
    image: "images/desenho21.jpg",
    alt: "Desenho de Makima, personagem de Chainsaw Man, por Davi Nabazzz"
  },
  {
    title: "Mandy",
    category: "Ilustração tradicional",
    image: "images/desenho22.jpg",
    alt: "Desenho de Mandy por Davi Nabazzz"
  },
  {
    title: "Santissima trindade",
    category: "Ilustração tradicional",
    image: "images/desenho23.jpg",
    alt: "Ilustração da Santíssima Trindade por Davi Nabazzz"
  },
  {
    title: "Fern (Frieren)",
    category: "Ilustração tradicional",
    image: "images/desenho24.jpg",
    alt: "Desenho de Fern, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Comemoração do dia coração de Jesus",
    category: "Ilustração tradicional",
    image: "images/desenho25.jpg",
    alt: "Ilustração para comemoração do Sagrado Coração de Jesus, por Davi Nabazzz"
  },
  {
    title: "Power (Chainsaw Man)",
    category: "Ilustração tradicional",
    image: "images/desenho26.jpg",
    alt: "Desenho de Power, personagem de Chainsaw Man, por Davi Nabazzz"
  },  
  {
    title: "Yor Forger (SPY x FAMILY)",
    category: "Ilustração tradicional",
    image: "images/desenho27.jpg",
    alt: "Desenho de Yor Forger, personagem de SPY x FAMILY, por Davi Nabazzz"
  },
  {
    title: "Joseph Joestar (JOJO´s Bizarre Adventure)",
    category: "Ilustração tradicional",
    image: "images/desenho28.jpg",
    alt: "Desenho de Joseph Joestar, personagem de JoJo's Bizarre Adventure, por Davi Nabazzz"
  },
  {
    title: "São Carlos Acutis",
    category: "Ilustração tradicional",
    image: "images/desenho29.jpg",
    alt: "Desenho de São Carlo Acutis por Davi Nabazzz"
  },
  {
    title: "Jesus Transfigurado",
    category: "Ilustração tradicional",
    image: "images/desenho30.jpg",
    alt: "Ilustração de Jesus Transfigurado por Davi Nabazzz"
  },
  {
    title: "São Maximiliano (Maria Kolbe)",
    category: "Ilustração tradicional",
    image: "images/desenho31.jpg",
    alt: "Desenho de São Maximiliano Maria Kolbe por Davi Nabazzz"
  },
  {
    title: "Mikasa (Attack on Titan)",
    category: "Ilustração tradicional",
    image: "images/desenho32.jpg",
    alt: "Desenho de Mikasa, personagem de Attack on Titan, por Davi Nabazzz"
  },
  {
    title: "Marcille Donato",
    category: "Ilustração tradicional",
    image: "images/desenho33.jpg",
    alt: "Desenho de Marcille Donato, personagem de Delicious in Dungeon, por Davi Nabazzz"
  },
  {
    title: "Kyojuro Rengoku",
    category: "Ilustração tradicional",
    image: "images/desenho34.jpg",
    alt: "Desenho de Kyojuro Rengoku, personagem de Demon Slayer, por Davi Nabazzz"
  },
  {
    title: "Fern (Frieren)",
    category: "Ilustração tradicional",
    image: "images/desenho35.jpg",
    alt: "Desenho de Fern, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Goku (Super Sayajin)",
    category: "Ilustração tradicional",
    image: "images/desenho36.jpg",
    alt: "Desenho de Goku em Super Saiyajin por Davi Nabazzz"
  },
  {
    title: "Yuta (Jujutsu Kaisen)",
    category: "Ilustração tradicional",
    image: "images/desenho37.jpg",
    alt: "Desenho de Yuta, personagem de Jujutsu Kaisen, por Davi Nabazzz"
  },
  {
    title: "Nossa Senhora das Dores",
    category: "Ilustração tradicional",
    image: "images/desenho38.jpg",
    alt: "Desenho de Nossa Senhora das Dores por Davi Nabazzz"
  },
  {
    title: "Kasane teto",
    category: "Ilustração tradicional",
    image: "images/desenho39.jpg",
    alt: "Desenho de Kasane Teto por Davi Nabazzz"
  },
  {
    title: "Jonathan Joestar",
    category: "Ilustração tradicional",
    image: "images/desenho40.jpg",
    alt: "Desenho de Jonathan Joestar, personagem de JoJo's Bizarre Adventure, por Davi Nabazzz"
  },
  {
    title: "Ichigo Kurosaki",
    category: "Ilustração tradicional",
    image: "images/desenho41.jpg",
    alt: "Desenho de Ichigo Kurosaki, personagem de Bleach, por Davi Nabazzz"
  },
  {
    title: "Santo Agostinho e Santa Mônica",
    category: "Ilustração tradicional",
    image: "images/desenho42.jpg",
    alt: "Desenho de Santo Agostinho e Santa Mônica por Davi Nabazzz"
  },
  {
    title: "Nossa Senhora do Carmo",
    category: "Ilustração tradicional",
    image: "images/desenho43.jpg",
    alt: "Desenho de Nossa Senhora do Carmo por Davi Nabazzz"
  },
  {
    title: "Shinobu Kocho",
    category: "Ilustração digital",
    image: "images/desenho44.jpg",
    alt: "Desenho de Shinobu Kocho, personagem de Demon Slayer, por Davi Nabazzz"
  },
  {
    title: "Maomao",
    category: "Ilustração tradicional",
    image: "images/desenho45.jpg",
    alt: "Desenho de Maomao, personagem de Diário de uma Apotecária, por Davi Nabazzz"
  },
  {
    title: "Hatsune Miku",
    category: "Ilustração tradicional",
    image: "images/desenho46.jpg",
    alt: "Desenho de Hatsune Miku por Davi Nabazzz"
  },
  {
    title: "Frieren",
    category: "Ilustração tradicional",
    image: "images/desenho47.jpg",
    alt: "Desenho de Frieren, personagem de Frieren e a Jornada para o Além, por Davi Nabazzz"
  },
  {
    title: "Santa Clara de Assis",
    category: "Ilustração tradicional",
    image: "images/desenho48.jpg",
    alt: "Desenho de Santa Clara de Assis por Davi Nabazzz"
  },
  {
    title: "Rem (RE: Zero)",
    category: "Ilustração digital",
    image: "images/desenho49.jpg",
    alt: "Desenho de Rem, personagem de Re:Zero, por Davi Nabazzz"
  }
];


const galleryGrid = document.getElementById("galleryGrid");
const currentYear = document.getElementById("currentYear");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const mediaTabs = document.querySelectorAll(".media-tab");
const videosSection = document.getElementById("videosSection");
const videoCategories = document.getElementById("videoCategories");
const videosGrid = document.getElementById("videosGrid");
const videoLightbox = document.getElementById("videoLightbox");
const videoLightboxPlayer = document.getElementById("videoLightboxPlayer");
const videoLightboxClose = document.getElementById("videoLightboxClose");


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


/* Categorias de vídeos */
/*
  Para adicionar uma nova pasta/categoria de vídeos no futuro,
  basta adicionar um novo objeto nesta lista, seguindo o mesmo formato:

    {
      id: "nome-da-pasta",        // identificador único da categoria
      label: "Nome exibido",      // texto mostrado no botão da categoria
      videos: [                   // lista de vídeos da categoria
        { src: "videos/nome-do-video.mp4", title: "Título do vídeo" }
      ]
    }
*/
const videoCategoriesData = [
  {
    id: "Trend: Anatomia identica a minha",
    label: "Trend: Anatomia identica a minha",
    videos: [
      { src: "videos/trend/video1.mp4", title: "Himmel" },
      { src: "videos/trend/video2.mp4", title: "Frieren" },
      { src: "videos/trend/video3.mp4", title: "Frieren" },
      { src: "videos/trend/video4.mp4", title: "Himmel" }
    ]
  }
];

let activeVideoCategory = null;


function renderVideoCategories() {
  videoCategories.innerHTML = videoCategoriesData
    .map(
      (cat) => `
        <button
          class="video-category${cat.id === activeVideoCategory ? " active" : ""}"
          type="button"
          role="tab"
          aria-selected="${cat.id === activeVideoCategory}"
          data-video-category="${cat.id}"
        >
          ${cat.label}
        </button>
      `
    )
    .join("");
}


function renderVideos() {
  const category = videoCategoriesData.find((cat) => cat.id === activeVideoCategory);

  if (!category || category.videos.length === 0) {
    videosGrid.innerHTML = `
      <p class="videos-empty">Nenhum vídeo nesta pasta ainda.</p>
    `;
    return;
  }

  videosGrid.innerHTML = category.videos
    .map(
      (video) => `
        <article class="video-card">
          <div class="video-wrap">
            <video
              class="video-player"
              src="${video.src}"
              controls
              playsinline
              preload="metadata"
            ></video>
            <div class="video-overlay">
              <div class="video-meta">
                <div class="video-info">
                  <h3>${video.title}</h3>
                </div>
                <button
                  class="view-btn video-expand-btn"
                  type="button"
                  data-video="${video.src}"
                  data-title="${video.title}"
                  aria-label="Ampliar vídeo ${video.title}"
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


function selectVideoCategory(categoryId) {
  activeVideoCategory = categoryId;
  renderVideoCategories();
  renderVideos();
}


videoCategories.addEventListener("click", (event) => {
  const button = event.target.closest(".video-category");
  if (!button) return;

  selectVideoCategory(button.dataset.videoCategory);
});


renderVideoCategories();


/* Abas Galeria | Vídeos */
function selectMediaTab(tabName) {
  const isGaleria = tabName === "galeria";

  mediaTabs.forEach((tab) => {
    const isActive = tab.dataset.mediaTab === tabName;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  galleryGrid.hidden = !isGaleria;
  videosSection.hidden = isGaleria;

  if (!isGaleria && !activeVideoCategory && videoCategoriesData.length > 0) {
    selectVideoCategory(videoCategoriesData[0].id);
  }
}


mediaTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectMediaTab(tab.dataset.mediaTab);
  });
});


/* Lightbox de vídeo */
document.addEventListener("click", (event) => {
  const button = event.target.closest(".video-expand-btn");
  if (!button) return;

  videoLightboxPlayer.src = button.dataset.video;
  videoLightbox.classList.add("active");
  videoLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  videoLightboxPlayer.play().catch(() => {});
});


function closeVideoLightbox() {
  videoLightbox.classList.remove("active");
  videoLightbox.setAttribute("aria-hidden", "true");
  videoLightboxPlayer.pause();
  videoLightboxPlayer.removeAttribute("src");
  videoLightboxPlayer.load();
  document.body.style.overflow = "";
}


videoLightboxClose.addEventListener("click", closeVideoLightbox);


videoLightbox.addEventListener("click", (event) => {
  if (event.target === videoLightbox) {
    closeVideoLightbox();
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


    if (videoLightbox.classList.contains("active")) {
      closeVideoLightbox();
    }
  }
});
