const numeros = [3, 5, -4, 2, 1, 4, 0, 6, 9, 8, 3];

for (let i = 0; i< numeros.length; i++) {
    console.log(numeros[i]);
}

for (let i = 0; i< numeros.length; i++) {
    numeros[i]++;
    // o si no: numeros[i] = numeros[i] + 1
}

for (let i = 0; i< numeros.length; i++) {
    console.log(numeros[i]);
}

// Alternativa para la suma:
numerosIncrementados = numeros.map( numero => numero++ );