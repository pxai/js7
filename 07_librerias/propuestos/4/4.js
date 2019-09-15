const Listado = require("./listado");
const listado = new Listado("./4.json");

if (listado.existe("eugene")) {
    console.log("Existe!");
}

listado.aMinusculas();

if (listado.existe("eugene")) {
    console.log("Existe!");
    console.log(listado.posicion("eugene"));
}