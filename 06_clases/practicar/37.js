class Instrumento {
    constructor (nombre, tipo) {
        this._nombre = nombre;
        this._tipo = tipo;
    }

    tocar () {
        console.log("Tocando ", this._nombre);
    }

    info () {
        return `${this._nombre} ${this._tipo}`;
    }
}

const miGuitarra = new Instrumento("Guitarra", "cuerda");
miGuitarra.tocar();
console.log(miGuitarra.info());