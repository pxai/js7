const numeros = [3, 5, -4, 2, 1, 4, 0, 6, 9, 8, 3];
let repetido = false;
let i = 0;
let j = 0;

while (i < numeros.length && !repetido) {
    while (j < numeros.length) {
        if (numeros[i] === numeros[j]) {
            repetido = true;
            break;
        }
        j++;
    }
    i++;
}

if (repetido) {
    console.log("Hay un número repetido");
} else {
    console.log("No hay un número repetido");
}