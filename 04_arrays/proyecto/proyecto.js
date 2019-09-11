let notas = [
    {
        nota: 8,
        asignatura: "Mates"
    },
    {
        nota: 5,
        asignatura: "Lengua"
    }
];

let opcion = "";

do {
    console.log("1. Mostrar todo.");
    console.log("2. Añadir nuevo elemento");
    console.log("3. Eliminar elemento");
    console.log("4. Salir");
    opcion = prompt("introduce opción");

    switch (opcion) {
        case "1":
            for (let i = 0; i < notas.length; i++) {
                console.log(`${notas[i].asignatura}: ${notas[i].nota}`);
            }
            break;

        case "2":
            let nota = prompt("Introduce una nota");
            let asignatura = prompt("Introduce una asignatura");
            let nuevaNota = { nota: parseFloat(nota), asignatura };
            notas.push(nuevaNota);
            break;

        case "3":
            let indice = prompt("Introduce un índice");
            if (indice >= 0 && indice < notas.length) {
                notas.splice(indice, 1);
            }
            break;

        case "4":
            console.log("Hasta otra");
            break;

        default:
            console.log("Opción no soportada");
            break;
    }

} while (opcion != "4");