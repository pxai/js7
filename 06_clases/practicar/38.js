class NombreFormateado {
    constructor (nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    formatear () {
        return this._corregir(this._nombre) + " " + this._corregir(this._apellido);
    }

    _corregir (cadena) {
        return this._primero(cadena) + this._resto(cadena);
    }

    _primero (cadena) {
        return cadena.charAt(0).toUpperCase();
    }

    _resto (cadena) {
        return cadena.substring(1, cadena.length).toLowerCase();
    }
}

const formateador = new NombreFormateado("JUAN", "PÉREZ");
console.log(formateador.formatear());