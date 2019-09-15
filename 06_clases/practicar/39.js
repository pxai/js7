class Sumador {
    constructor (valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    get valor1 () {
        return this._valor1;
    }

    set valor1 (valor1) {
        if (valor1 > 0) {
            this._valor1 = valor1;
        } else {
            this._valor1 = 0;
        }
    }

    get valor2 () {
        return this._valor2;
    }

    set valor2 (valor2) {
        if (valor2 > 0) {
            this._valor2 = valor2;
        } else {
            this._valor2 = 0;
        }
    }

    sumar () {
        return this._valor1 + this._valor2;
    }
}

const sumadorMalo = new Sumador(-4, "");
console.log(sumadorMalo.sumar());

const sumador = new Sumador(28, 14);
console.log(sumador.sumar());