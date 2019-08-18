class Prueba {
    constructor (atributo) {
        this._atributo = atributo;
    }

    metodo () {
        console.log(this._atributo);
    }
}

module.exports = Prueba;