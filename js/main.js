const botao1 = document.getElementById("b01");
const botao2 = document.getElementById("b02");

function trocaDireita() {
  botao1.textContent = "ON";
  botao2.textContent = "OFF";
}

function trocaEsquerda() {
  botao1.textContent = "OFF";
  botao2.textContent = "ON";
}

botao1.addEventListener("click", trocaDireita);
botao2.addEventListener("click", trocaEsquerda);
