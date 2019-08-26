
class Logger {
    constructor (prefijo = "> ") {
        this._prefijo = prefijo;
    }

    log (mensaje) {
        console.log(this._prefijo, mensaje);
    }
}

module.exports = Logger;