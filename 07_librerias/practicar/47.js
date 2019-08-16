const fs = require("fs");
const contenido = fs.readFileSync("./fichero.json", "utf8");

const alumnos = JSON.parse(contenido);

for (alumno of alumnos) {
    console.log(`${alumno.nombre} \n Notas:`);
    for (nota of alumno.notas) {
        console.log(`\t ${nota}`);
    }
}