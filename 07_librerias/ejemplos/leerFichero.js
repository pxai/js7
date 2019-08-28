const fs = require("fs");

const datos = fs.readFileSync("./fichero.txt","utf8");
console.log(datos);

const lineas = datos.split(/[\n\r]/);

lineas.forEach( function (linea) {
    console.log(linea);
});

// Para escribir
fs.writeFileSync("./fichero.txt", datos)