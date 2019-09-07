const numeros1 = [4, 5, 7, 9, 2];
const numeros2 = [0, -2, 5, 3, 1];

const resultado = numeros1.map(function (numero) {
    return numeros2.includes(numero);
});

if (resultado.length > 0) {
    console.log("Si hay números repetidos");
} else {
    console.log("Todos los elementos son distintos");
}