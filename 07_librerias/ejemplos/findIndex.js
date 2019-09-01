const numeros = [4, 5, 6, 3, 2];
const index = numeros.findIndex (function (elemento) {
    return elemento === 6
});
console.log (index); //2