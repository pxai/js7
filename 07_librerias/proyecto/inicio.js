const Datos = require("./datos");
const Mensaje = require("./mensaje");
const InterfazUsuario = require("./interfaz-usuario");

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

module.exports = Inicio;
