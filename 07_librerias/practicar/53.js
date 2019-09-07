const nombres = ["Gandalf", "Eugene", "Bilbo", "Saruman", "", "Gimli"];

const indice = nombres.findIndex(function (nombre) {
    return nombre === "";
});

if (indice === -1) {
    console.log("No hay cadenas vacías!");
} else {
    console.log("Hay una cadena vacía en: ", indice);
}
