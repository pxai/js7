class Jugador {
    constructor (nombre, dorsal) {
        this._nombre = nombre;
        this._dorsal = dorsal;
    }

    get nombre () {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    get dorsal () {
        return this._dorsal;
    }

    set dorsal (dorsal) {
        this._dorsal = dorsal;
    }

    info () {
        return `${this._nombre} ${this._dorsal}`;
    }
}

module.exports = Jugador;