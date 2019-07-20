let numero = prompt("Introduce un número");

if (numero <= 0) {
    console.log("Debes introducir un número mayor que 0");
} else {
    let factorial = numero;
    while (numero > 1) {
        numero--;
        factorial = factorial * numero;
    }
    console.log("Resultado: " + factorial);
}