const numeros = [];
let opcion = -1;

do {
    console.log("Elige opción");
    console.log("1. Meter elemento.");
    console.log("2. Sacar elemento.");
    console.log("3. Mostrar array.");
    console.log("4. Salir.");
    opcion = prompt("Elige opción: ");
    
    switch (opcion) {
        case "1":
                numeros.push(0);
                break;
        case "2":
                numeros.pop();
                break;
        case "3":
                console.log(numeros);
                break;
        case "4":
                console.log("Hasta otra");
                break;
        default: 
                console.log("Opción desconocida");
                break;
    }
} while (opcion !== "4");


