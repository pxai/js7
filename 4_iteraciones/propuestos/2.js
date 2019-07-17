let numero = prompt("Introduce un número");

if (numero <= 0 || numero % 2 !== 0) {
    console.log("Debes introducir un número par mayor que 0");
} else {
    let estrellas = "";
    while (numero > 0) {
        estrellas  = estrellas + "*";
      numero--;
    }
    console.log(estrellas);
}