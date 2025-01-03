function toggleLanguage() {
  const enTextElements = document.querySelectorAll(".en-text");
  const trTextElements = document.querySelectorAll(".tr-text");

  // Get current language or default to English
  const currentLang = localStorage.getItem("language") || "en";
  const newLang = currentLang === "en" ? "tr" : "en";

  // Save preference
  localStorage.setItem("language", newLang);

  // Apply visibility
  enTextElements.forEach((enText) => {
    enText.style.display = newLang === "en" ? "block" : "none";
  });

  trTextElements.forEach((trText) => {
    trText.style.display = newLang === "tr" ? "block" : "none";
  });
}

// Apply saved language preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "en";
  const enTextElements = document.querySelectorAll(".en-text");
  const trTextElements = document.querySelectorAll(".tr-text");

  enTextElements.forEach((enText) => {
    enText.style.display = savedLang === "en" ? "block" : "none";
  });

  trTextElements.forEach((trText) => {
    trText.style.display = savedLang === "tr" ? "block" : "none";
  });
});
