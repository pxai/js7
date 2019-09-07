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

module.exports = Mensaje;