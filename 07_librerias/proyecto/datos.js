class Datos {
    constructor (datos) {
        this._datos = datos;
    }

    mostrar () {
        let result = "";
        for (let i = 0; i < this._datos.length; i++) {
            result += this._datos[i].info() + "\n";
        }
        return result;
    }

    crear(calificacion) {
        this._datos.push(calificacion);
    }

    eliminar (indice) {
        this._datos.splice(indice, 1);
    }
}

module.exports = Datos;