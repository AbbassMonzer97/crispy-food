function toggleLanguage() {
  const enTextElements = document.querySelectorAll(".en-text");
  const trTextElements = document.querySelectorAll(".tr-text");

  enTextElements.forEach((enText, index) => {
    const trText = trTextElements[index];

    if (enText.style.display === "none") {
      enText.style.display = "block";
      trText.style.display = "none";
    } else {
      enText.style.display = "none";
      trText.style.display = "block";
    }
  });
}
