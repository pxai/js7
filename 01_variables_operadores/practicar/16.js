const valor = prompt("Introduce un número");

const positivoYPar = (valor >= 0) && (valor % 2 === 0);
const resultado = !positivoYPar;
console.log("Es par y positivo?", resultado);