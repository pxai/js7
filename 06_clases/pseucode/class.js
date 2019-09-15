class NombreClase {
    nombreFunción () {
    }
}

let objeto = new NombreClase();
objeto.nombreFunction();


class NombreClase {
    constructor (parámetro) {
        this.atributo = parámetro;
    }

    nombreFunción () {
        this.otraFunción();
    }

    otraFunción () {

    }
}

let objeto = new NombreClase(parámetro);