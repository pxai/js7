const numeros = [3, 5, -4, 2, 1, 4, 0, 6, -9, 8, 3];

let positivos = 0;
let negativos = 0;
let ceros = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        positivos++;
    } else if (numeros[i] < 0) {
        negativos++;
    } else {
        ceros++;
    }
}

console.log("Positivos: " + positivos);
console.log("Negativos: " + negativos);
console.log("Ceros: " + ceros);