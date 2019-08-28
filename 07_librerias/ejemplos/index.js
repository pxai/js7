const dato = require("./dato");
console.log(dato);


const suma = require("./suma");
console.log(suma(40, 2));


const Logger = require("./logger");
const logger = new Logger();
logger.log("Este es un mensaje");