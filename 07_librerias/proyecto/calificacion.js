class Calificacion {
    constructor (nota, asignatura) {
        this._nota = nota;
        this._asignatura = asignatura;
    }

    info() {
        return `${this._asignatura}: ${this._nota} `;
    }
}

module.exports = Calificacion;