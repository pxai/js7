let numero = prompt("Introduce un número");

if (numero <= 0 || numero % 2 !== 0) {
    console.log("Debes introducir un número par mayor que 0");
} else {
    let secuencia = "";
    numero = numero / 2;
    while (numero > 0) {
        secuencia  = secuencia + "*-";
      numero--;
    }
    secuencia = secuencia + "*";
    
    console.log(secuencia);
}