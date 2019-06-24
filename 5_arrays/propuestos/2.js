const numeros = [3.4, 2.7, 4.3, 6.6, 8.3];
let suma = 0.0;

for (let i = 0; i< numeros.length; i++) {
    suma = suma + numeros[i];
}

const media = suma / numeros.length;

console.log("La media es: ", media);