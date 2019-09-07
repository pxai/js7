const Calificacion = require("./calificacion");
const Lectura = require("./lectura");

class InterfazUsuario {
    mostrar (mensaje) {
        console.log(mensaje);
    }

    leerOpcion () {
        return Lectura.leer("introduce opción: ");
    }

    crear () {
        const nota = Lectura.leer("Introduce una nota: ");
        const asignatura = Lectura.leer("Introduce una asignatura: ");
        return new Calificacion(nota, asignatura);
    }

    leerIndice () {
        return Lectura.leer("indica un índice: ");
    }
}

module.exports = InterfazUsuario;