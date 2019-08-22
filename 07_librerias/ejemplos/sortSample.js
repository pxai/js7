const numeros = [4, 5, 6, 3, 2];
const ordenados = numeros.sort(function (a, b) { 
    return a > b 
});
console.log(ordenados); // [2, 3, 4, 5, 6]