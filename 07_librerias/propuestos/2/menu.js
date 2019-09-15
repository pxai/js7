class Menu {
    constructor (opciones) {
        this._opciones = opciones;
    }

    mostrar () {
        this._opciones.forEach(function (opcion, i) {
            console.log(`${i+1} ${opcion}`);
        })
    }

    seleccionar (numero) {
        return numero > 0 && numero <= this._opciones.length;
    }
}

module.exports = Menu;