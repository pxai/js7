const numeros = [Array(10),Array(10),Array(10),Array(10),Array(10)];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
        numeros[i][j] = Math.round(Math.random() * 30);
    }
}

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length; j++) {
      console.log(numeros[i][j]);
        if (numeros[i][j] === 15) {
            console.log("Encontrado 15 en " + i + " , " + j);
        }
    }
}