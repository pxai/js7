class Piloto {
    constructor (nombre) {
        this._nombre = nombre;
    }

    get nombre () {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }
}

class Aeroplano {
    constructor (modelo, piloto, copiloto) {
        this._modelo = modelo;
        this._piloto = piloto;
        this._copiloto = copiloto;
    }

    get modelo () {
        return this._modelo;
    }

    set modelo (modelo) {
        this._modelo = modelo;
    }

    volar () {
        console.log("Volando ", this._modelo, this._piloto, this._copiloto);
    }
}




const piloto1 = new Piloto("Han Solo");
const piloto2 = new Piloto("Murdock");

const avioneta = new Aeroplano("AirBluff 727", piloto1, piloto2);
console.log(avioneta.volar());