function generateNumber() {
  const min = Number(document.getElementById("min").value) || 20;
  const max = Number(document.getElementById("max").value) || 30;
  const resultEl = document.getElementById("result");
  const dadoEl = document.querySelector("img");

  if (min > max) {
    resultEl.textContent = "O valor mínimo não pode ser maior que o máximo!";
    return;
  }

  // dispara a animação
  dadoEl.classList.add("girando");

  // remove a classe depois que a animação termina
  dadoEl.addEventListener(
    "animationend",
    () => {
      dadoEl.classList.remove("girando");

      // só mostra o número depois que o dado parar de girar
      const number = Math.floor(Math.random() * (max - min + 1)) + min;
      resultEl.textContent = `Número sorteado: ${number}`;
    },
    { once: true },
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("sortBtn");
  btn.addEventListener("click", generateNumber);
});
