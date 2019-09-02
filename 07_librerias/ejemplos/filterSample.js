const numeros = [7, 5, 3, 0, 4];
const pares = numeros.filter (function (n) {
    return n % 2 === 0;
});
console.log (pares); // pares = [ 0, 4 ]