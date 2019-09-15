class Comida {
    constructor (nombre, peso) {
        this._nombre = nombre;
        this._peso = peso;
    }

    get nombre () {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    get peso () {
        return this._peso;
    }

    set peso (peso) {
        this._peso = peso;
    }

    toString () {
        return `${this._nombre} ${this._peso}`;
    }
}

class Fruta extends Comida {
    constructor (nombre, peso, vitamina) {
        super(nombre, peso);
        this._vitamina = vitamina;
    }

    get vitamina () {
        return this._vitamina;
    }

    set vitamina (vitamina) {
        this._vitamina = vitamina;
    }

    toString () {
        return `${super.toString()} ${this._vitamina}`;
    }
}

class Caramelo extends Comida {
    constructor (nombre, peso, calorias) {
        super(nombre, peso);
        this._calorias = calorias;
    }

    get calorias () {
        return this._calorias;
    }

    set calorias (calorias) {
        this._calorias = calorias;
    }

    toString () {
        return `${super.toString()} ${this._calorias}`;
    }
}

class Cesta {
    constructor () {
        this._alimentos = [];
    }

    meterComida (comida) {
        this._alimentos.push(comida);
    }

    pesoTotal () {
        let total = 0;
        for (let i = 0; i < this._alimentos.length; i++) {
            total += this._alimentos[i].peso;
        }
        return total;
    }

    toString () {
        let info = "";
        for (let i = 0; i < this._alimentos.length; i++) {
            info += this._alimentos[i].toString() + "\n";
        }
        return info;
    }
}

const chicle = new Caramelo("Cheiw", 0.2, 100);
const gominola = new Caramelo("Fresa", 0.3, 210);
const pera = new Fruta("Pera", 0.1, "B");
const manzana = new Fruta("Manzana", 0.15, "A");

const cesta = new Cesta();
cesta.meterComida(chicle);
cesta.meterComida(gominola);
cesta.meterComida(pera);
cesta.meterComida(manzana);

console.log("Contenido cesta: ", cesta.toString());
console.log("Peso total:", cesta.pesoTotal());