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
    } else {
      typingTarget.textContent = text;
    }
  }

  type();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("keyboard-navigation");
  }
});
