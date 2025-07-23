// Ano automático no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const yearText = document.getElementById("year");
  yearText.textContent = new Date().getFullYear();
});