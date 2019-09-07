const readline = require("readline-sync");

class Lectura {
    static leer(mensaje) {
        return readline.question(mensaje);
    }
}

module.exports = Lectura;