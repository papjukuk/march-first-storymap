// Global behavior only: page progress, section dots, language toggle, smooth scroll, and shared data loading.
const geojsonUrl = "./data/march-first.geojson";
const sections = [...document.querySelectorAll("[data-section]")];
const dots = [...document.querySelectorAll(".dot")];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function setLanguage(lang) {
  document.body.classList.toggle("lang-en", lang === "en");
  document.body.classList.toggle("lang-ko", lang === "ko");

  document.querySelectorAll("#lang-toggle button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
}

function updatePageProgressAndDots() {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  document.getElementById("progress-bar").style.width = `${progress}%`;

  const active = sections.reduce((current, section) => {
    const distance = Math.abs(section.getBoundingClientRect().top);
    return distance < current.distance ? { id: section.id, distance } : current;
  }, { id: sections[0]?.id, distance: Infinity });

  dots.forEach((dot) => {
    dot.classList.toggle("active", dot.dataset.target === active.id);
  });
}

async function loadGeoJSON() {
  const response = await fetch(geojsonUrl);
  if (!response.ok) throw new Error(`GeoJSON load failed: ${response.status}`);
  return response.json();
}

document.addEventListener("DOMContentLoaded", () => {
  updatePageProgressAndDots();

  document.querySelectorAll("#lang-toggle button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => scrollToSection(button.dataset.scrollTarget));
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", () => scrollToSection(dot.dataset.target));
  });

  window.addEventListener("scroll", updatePageProgressAndDots, { passive: true });

  loadGeoJSON()
    .then((geojson) => window.Section2ScrollytellingMap?.init(geojson))
    .catch((error) => {
      console.error("Application initialization failed:", error);
      window.Section2ScrollytellingMap?.setError?.("지도 데이터를 불러오지 못했습니다. 로컬 서버에서 실행 중인지 확인하세요.");
    });
});
