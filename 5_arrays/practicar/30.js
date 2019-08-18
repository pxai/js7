const frase = prompt("Escribe una frase");
const palabra = prompt("Escribe una palabra de esa frase");

const posicion = frase.indexOf(palabra);

if (posicion !== -1) {
    const inicio = frase.substring(0, posicion);
    const final = frase.substring(posicion + palabra.length, frase.length);
    const resultado = `${inicio}${palabra.toUpperCase()}${final}`;

    console.log(resultado);
} else {
    console.log(`${palabra} no está en la frase.`);
}
