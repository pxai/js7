const Inicio = require("./inicio");
const Calificacion = require("./calificacion");

let notas = [
    new Calificacion(5, "Lengua"),
    new Calificacion(8, "Matemáticas"),
];

new Inicio(notas).bucle();