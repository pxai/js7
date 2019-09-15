const numero1 = prompt("Introduce un número");
const numero2 = prompt("Introduce otro número");

if (numero1 > numero2) {
  console.log(numero1 + " es mayor que " + numero2);
} else if (numero1 < numero2) {
  console.log(numero1 + " es menor que " + numero2);
} else {
  console.log(numero1 + " es igual que " + numero2);
}