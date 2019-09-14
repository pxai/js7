class Inicio {
    constructor (notas) {
        this._datos = new Datos(notas);
        this._mensaje = new Mensaje();
        this._iu = new InterfazUsuario();
    }

    bucle() {
        let opcion = "";
        do {
            this._iu.mostrar(this._mensaje.menu());
            opcion = this._iu.leerOpcion();
            this.ejecutar(opcion);            

        } while (opcion != "4");
    }

    ejecutar (opcion) {
    switch (opcion) {
            case "1":   
                this._iu.mostrar(this._datos.mostrar());
                break;

            case "2":   
                this._datos.crear(this._iu.crear());
                break;

            case "3":
                this._datos.eliminar(this._iu.leerIndice());
                break;

            case "4":
                this._iu.mostrar(this._mensaje.salir());
                break;

            default:
                this._iu.mostrar(this._mensaje.opcionIncorrecta());
                break;
        }
    }
}
    
class InterfazUsuario {
    mostrar (mensaje) {
        console.log(mensaje);
    }

    leerOpcion () {
        return Lectura.leer("introduce opción");
    }

    crear () {
        const nota = Lectura.leer("Introduce una nota");
        const asignatura = Lectura.leer("Introduce una asignatura");
        return new Calificacion(nota, asignatura);
    }

    leerIndice () {
        return Lectura.leer("indica un índice");
    }
}

class Mensaje {
    menu () {
        return "1. Mostrar todo.\n" +
                "2. Añadir nuevo elemento.\n" +
                "3. Eliminar elemento.\n" +
                "4. Salir\n";
    }

    salir () {
        return "Hasta otra";
    }

    opcionIncorrecta () {
        return "Opción no soportada";
    }
}

class Lectura {
    static leer(mensaje) {
        return prompt(mensaje);
    }
}

class Datos {
    constructor (datos) {
        this._datos = datos;
    }

    mostrar () {
        let result = "";
        console.log(this._datos)
        for (let i = 0; i < this._datos.length; i++) {
            result += this._datos[i].info() + "\n";
        }
        return result;
    }

    crear(calificacion) {
        this._datos.push(calificacion);
    }

    eliminar (indice) {
        this._datos.splice(indice, 1);
    }
}

class Calificacion {
    constructor (nota, asignatura) {
        this._nota = nota;
        this._asignatura = asignatura;
    }

    info() {
        return `${this._asignatura}: ${this._nota} `;
    }
}

let notas = [
    new Calificacion(5, "Lengua"),
    new Calificacion(8, "Matemáticas"),
];

new Inicio(notas).bucle();