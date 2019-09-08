let numero = prompt("Introduce un número");

if (numero >= 0) {
 console.log(numero + " es positivo");
} else {
 console.log(numero + " es negativo");
} 

numero = -numero;

console.log("Conversión: " + numero);