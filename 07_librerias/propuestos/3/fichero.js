const fs = require("fs");

class Fichero {
    constructor (fichero) {
        this._fichero = fichero;
    }

    leer () {
        const datos = fs.readFileSync(this._fichero, "utf-8");

        return datos;
    }

    escribir (contenido) {
        fs.writeFileSync(this._fichero, contenido);
    }
}

module.exports = Fichero;