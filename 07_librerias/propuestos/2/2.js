const Menu = require("./menu");
const menu = new Menu(["Mostrar", "Eliminar", "Salir"]);

menu.mostrar();

if (menu.seleccionar(1)) {
    console.log("Opción 1 presente");
} else {
    console.log("Opción 1 no presente");
}