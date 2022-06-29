const button1 = document.getElementById("b01");
const button2 = document.getElementById("b02");

function directExchange() {
  button1.textContent = "ON";
  button2.textContent = "OFF";
}

function leftExchange() {
  button1.textContent = "OFF";
  button2.textContent = "ON";
}

button1.addEventListener("click", directExchange);
button2.addEventListener("click", leftExchange);