// Ano automático no rodapé
document.addEventListener("DOMContentLoaded", () => {
  const yearText = document.getElementById("year");
  yearText.textContent = new Date().getFullYear();
});

// Efeito de digitação
document.addEventListener("DOMContentLoaded", () => {
  const text = "A vida parece muito melhor para quem ri com a boca lambuzada de chocolate!";
  const typingTarget = document.getElementById("typing-text");
  let i = 0;

  function type() {
    if (i < text.length) {
      typingTarget.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }

  type();
});