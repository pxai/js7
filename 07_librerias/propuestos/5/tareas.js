const fs = require("fs");

class Tareas {
    constructor () {
        const contenido = fs.readFileSync("./tareas.json", "utf-8");
        this._tareas = JSON.parse(contenido);
    }

    crear (id, tarea) {
        const nueva = { id, tarea }; // Equivale a {id: id, tarea: tarea}
        this._tareas.push(nueva);
    }

    guardar () {
        const contenido = JSON.stringify(this._tareas, null, 1);
        fs.writeFileSync("./tareas.json", contenido);
        this._tareas = JSON.parse(contenido);
    }

    eliminar(id) {
        this._tareas = this._tareas.filter(function (tarea) {
            return tarea.id !== id;
        });
    }

    mostrar () {
        return this._tareas.map (function (tarea) {
            return `${tarea.id} ${tarea.tarea}`;
         }).join("\n");
    }
}

module.exports = Tareas;