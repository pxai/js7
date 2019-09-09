let numero = prompt("Introduce un número");

if (numero >= 0 && numero % 2 === 0) {
    console.log(numero + " es par y positivo");
} else if (numero < 0 && numero % 2 !== 0) {
    console.log(numero + " es impar y negativo");
} else if (numero < 0) {
    console.log(numero + " es negativo");
} else {
    console.log(numero + " es impar");
}
