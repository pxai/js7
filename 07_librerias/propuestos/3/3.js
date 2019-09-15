const Fichero = require("./fichero");

const fichero = new Fichero("./3.txt");

console.log("Contenido anterior: ", fichero.leer());

fichero.escribir("Contenido cambiado!!! " + new Date().toString());
console.log("Conten", fichero.leer());