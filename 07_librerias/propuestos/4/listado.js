const fs = require("fs");

class Listado {
    constructor (fichero) {
        const contenido = fs.readFileSync(fichero, "utf-8");
        this._datos = JSON.parse(contenido);
    }

    existe (nombre) {
        return this._datos.find(function (dato) {
            return nombre === dato.nombre;
        });
    }

    aMinusculas () {
        this._datos = this._datos.map(function (dato) {
            return {id: dato.id, nombre: dato.nombre.toLowerCase()};
        });
    }

    posicion (nombre) {
        return this._datos.findIndex(function(dato) {
            return dato.nombre === nombre;
        });
    }
}

module.exports = Listado;