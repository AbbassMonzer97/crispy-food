function toggleLanguage() {
  const enText = document.getElementById("en-text");
  const trText = document.getElementById("tr-text");

  if (enText.style.display === "none") {
    enText.style.display = "block";
    trText.style.display = "none";
  } else {
    enText.style.display = "none";
    trText.style.display = "block";
  }
}
