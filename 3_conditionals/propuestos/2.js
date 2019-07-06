const numero1 = prompt("Introduce un número");
const numero2 = prompt("Introduce otro número");

const resto = parseInt(numero1) % parseInt(numero2);

if (resto === 0) {
  console.log(numero1 + " es múltiplo de " + numero2);
} else {
  console.log(numero1 + " NO es múltiplo de " + numero2);
}