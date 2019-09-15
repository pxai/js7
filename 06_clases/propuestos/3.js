function aleatorio (max) {
    return Math.round(Math.random() * max);
}

class Dado {
    constructor (lados = 6, admiteCero = false) {
        this._lados = lados;
        this._admiteCero = admiteCero;
    }

    set lados (lados) {
        this._lados = lados;
    }

    set admiteCero (admiteCero) {
        this._admiteCero = admiteCero;
    }

    tirar () {
        let numero =  aleatorio(this._lados);

        if (!this._admiteCero) {
            numero++;
        }

        return numero;
    }
}

const dado = new Dado();
