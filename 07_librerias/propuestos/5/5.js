const Tareas = require("./tareas");
const tareas = new Tareas();

console.log(tareas.mostrar(), "\n---");

tareas.crear(2, "Comer");
console.log(tareas.mostrar(), "\n---");

tareas.eliminar(2);
console.log(tareas.mostrar(), "\n---");

tareas.crear(66, "Leer");
console.log(tareas.mostrar(), "\n---");
tareas.guardar();
