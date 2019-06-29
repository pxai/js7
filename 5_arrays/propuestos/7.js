const numeros = [4, 7, -3, 7, 1, 11, 9, 0, 5, 8];

console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    let indiceAleatorio = Math.round(Math.random() * numeros.length);
    let anterior = numeros[i];
    numeros[i] = numeros[indiceAleatorio];
    numeros[indiceAleatorio] = anterior;
}

console.log(numeros);