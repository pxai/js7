const numeros = [4, 5, 6, 3, 2];
const suma = numeros.reduce (function (a, b) {   
    return a + b; 
}, 0);
console.log (suma); //20