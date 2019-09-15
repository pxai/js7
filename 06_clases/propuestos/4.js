class Jugador {
    constructor (nombre, posicion, dorsal) {
        this._nombre = nombre;
        this._posicion = posicion;
        this._dorsal = dorsal;
    }

    informe () {
        return `${this._nombre} ${this._posicion} ${this._dorsal}`;
    }
}

class Equipo {
    constructor (nombre, fundacion, presupuesto) {
        this._nombre = nombre;
        this._fundacion = fundacion;
        this._presupuesto = presupuesto;
        this._jugadores = [];
    }

    ficharJugador (jugador) {
        this._jugadores.push(jugador);
    }

    mostrarJugadores () {
        for (let i = 0; i < this._jugadores.length; i++) {
            console.log(this._jugadores[i].informe());
        }
    }
}

const jugador1 = new Jugador("Maradona", "Delantero", 10);
const jugador2 = new Jugador("Beckenbauer", "Defensa", 4);

console.log(jugador1.informe());

const equipo = new Equipo("New Team", 1983, 39944.45);
equipo.ficharJugador(jugador1);
equipo.ficharJugador(jugador2);

equipo.mostrarJugadores();