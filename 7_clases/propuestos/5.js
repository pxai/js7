class Dispositivo {
    constructor (nombre, precio) {
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre () {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    get precio () {
        return this._precio;
    }

    set precio (precio) {
        this._precio = precio;
    }

    toString () {
        return `${this._nombre} ${this._precio}`; 
    }
}

class Movil extends Dispositivo {
    constructor (nombre, precio, numero) {
        super(nombre, precio);
        this._numero = numero;
    }

    get numero () {
        return this._numero;
    }

    set numero (numero) {
        this._numero = numero;
    }

    toString () {
        return `${super.toString()} ${this._numero}`;
    }

    llamar (numero) {
        console.log(`Llamando a ${numero}`)
    }
}

class Ordenador extends Dispositivo {
    constructor (nombre, precio, procesador) {
        super(nombre, precio);
        this._procesador = procesador;
    }

    get procesador () {
        return this._procesador;
    }

    set procesador (procesador) {
        this._procesador = procesador;
    }

    toString () {
        return `${super.toString()} ${this._procesador}`;
    }
}

const ordenador = new Ordenador("Dell", 4553.4, "Lentium 4");
const telefono = new Movil("Chanmhung", 434.4, 665745345);

console.log("Ordenador: " + ordenador);
console.log("Telefono: ", telefono.toString());