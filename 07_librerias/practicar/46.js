const fs = require("fs");
const contenido = fs.readFileSync("./fichero.txt", "utf8");

const palabras = contenido.split(/[\s\n\r]/);

for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i]);
}

console.log("Total palabras: ", palabras.length);