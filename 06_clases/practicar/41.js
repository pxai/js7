class Vehiculo {
    constructor (matricula) {
        this._matricula = matricula;
    }

    get matricula () {
        return this._matricula;
    }

    set matricula (matricula) {
        this._matricula = matricula;
    }

    arrancar () {
        console.log("Arrancando ", this._matricula);
    }
}

class Coche extends Vehiculo {
    constructor (matricula, modelo, color) {
        super(matricula);
        this._modelo = modelo;
        this._color = color;
    }

    info () {
        return `${this._matricula}
            ${this._modelo}
            ${this._color}`; 
    }
}

const coche = new Coche("0042ASI", "Opel Corsa", "Blanco");
coche.arrancar();
console.log(coche.info());