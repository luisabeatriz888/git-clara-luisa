const footer = document.querySelector("footer p");
const today = new Date().toLocaleDateString("pt-BR");
footer.textContent += ` | Atualizado em: ${today}`;