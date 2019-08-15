const fs = require("fs");
const contenido = fs.readFileSync("./entrada.txt", "utf8");

const lineas = contenido.split(/\n/);
const datos = [];

for (let i = 0; i < lineas.length; i++) {
    let linea = lineas[i].split(":");
    let persona = { 
        nombre: linea[0],
        apellido: linea[1],
        edad: linea[2]
    };
    datos.push(persona);
}

const textoDatos = JSON.stringify(datos, null, 1);
fs.writeFileSync("./salida.json", textoDatos);