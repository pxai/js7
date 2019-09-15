const peso = prompt("Introduce tu peso");
const altura = prompt("Introduce tu altura");

const imc = peso / (altura * altura);

const imcRedondeado = (imc * 10000).toFixed(2);
console.log("Tu imc: " + imcRedondeado);

if (imcRedondeado < 16 ) {
  console.log("Necesitas comer más");
} else if (imcRedondeado >= 16 &&  imcRedondeado < 25) {
  console.log("Estás bien");
} else if (imcRedondeado >= 25 && imcRedondeado < 30) {
  console.log("Tienes sobrepeso");
} else {
  console.log("Tienes un problema de obesidad");
}