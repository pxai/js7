let suma = 0;
let contador = 0;
let valor = 0;
let convertido = 0;

do {
    valor = prompt("Introduzca un número");
    convertido = parseFloat(valor);
    
    if (isNaN(convertido)) {
        console.log("Debes introducir un número");
        continue;
    }

    if (convertido !== 0) {
      suma = suma + convertido;
      contador++;
    }

} while(convertido !== 0);

if (contador > 0) {
    const media = suma / contador;
    console.log(`La media es: ${media}`);
} else {
    console.log("No hay números para hacer media");
}