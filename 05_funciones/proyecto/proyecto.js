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

function menu() {
    console.log("1. Mostrar todo.");
    console.log("2. Añadir nuevo elemento");
    console.log("3. Eliminar elemento");
    console.log("4. Salir");
}

function ejecutar (opcion, notas) {
    switch (opcion) {
            case "1":   
                mostrar(notas);
                break;

            case "2":   
                let nuevaNota = crear();
                notas.push(nuevaNota);
                break;

            case "3":
                eliminar(notas);
                break;

            case "4":
                salir();
                break;

            default:
                console.log("Opción no soportada");
                break;
        }
}

function mostrar(notas) {
    for (let i = 0; i < notas.length; i++) {
        console.log(`${notas[i].asignatura}: ${notas[i].nota}`);
    }
}

function crear () {
    let nota = prompt("Introduce una nota");
    let asignatura = prompt("Introduce una asignatura");
    let nuevaNota = { nota: parseFloat(nota), asignatura };
    return nuevaNota;
}

function eliminar (notas) {
    let indice = prompt("Introduce un índice");
    if (indice >= 0 && indice < notas.length) {
       notas.splice(indice, 1);
    }
}

function salir () {
    console.log("Hasta otra");
}

function bucle(notas) {
 do {
        menu();
        opcion = prompt("introduce opción");
        ejecutar(opcion, notas);            

    } while (opcion != "4");
}


bucle(notas);