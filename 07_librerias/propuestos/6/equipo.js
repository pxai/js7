const fs = require("fs");
const Jugador = require("./jugador");

class Equipo {
    cargar () {
        const contenido = fs.readFileSync("./jugadores.json");
        const jugadores = JSON.parse(contenido);
        this._jugadores = [];

        this._jugadores = jugadores.map(function (jugador) {
            return new Jugador(jugador.nombre, jugador.dorsal);
        });
    }

    fichaje (nombre, dorsal) {
        const nuevoFichaje = new Jugador(nombre, dorsal);

        this._jugadores.push(nuevoFichaje);
    }

    mostrar () {
        this._jugadores.forEach(function (jugador) {
            console.log(jugador.info());
        });
    }
}

module.exports = Equipo;