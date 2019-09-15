const nombre = prompt("Introduce tu nombre");
const edad = prompt("Introduce tu edad");
const sueldo = prompt("Introduce tu salario mensual");

const jubilacion = 67 - edad;
const esJubilado = edad >= 67;
const salarioAnual = sueldo * 12;

console.log(`Nombre: ${nombre}`);
console.log(`Años hasta la jubilación: ${jubilacion}`);
console.log(`Jubilado: ${esJubilado}`);
console.log(`Salario anual: ${salarioAnual}`);