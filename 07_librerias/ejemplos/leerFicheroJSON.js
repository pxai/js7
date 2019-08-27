const fs = require("fs");

const datos = fs.readFileSync("./fichero.json","utf8");
const personas =JSON.parse(datos);

personas.forEach(function (persona) {
    console.log(persona.nombre);
});

personas[1].nombre = "Krabs";

const nuevosDatos = JSON.stringify(personas, null, 2);
console.log(nuevosDatos);
fs.writeFileSync("./fichero2.json", nuevosDatos); 

