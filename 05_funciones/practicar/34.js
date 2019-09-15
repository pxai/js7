function calcular (valor1, valor2, op) {
    switch (op) {
        case "+": return valor1 + valor2;
        case "-": return valor1 - valor2;
        case "*": return valor1 * valor2;
        case "/": return valor1 / valor2;
        default: return "Operación desconocida";
    }
}

let resultado = calcular(4, 6, "*");
console.log(resultado);

resultado = calcular(5, 5, "-");
console.log(resultado);

resultado = calcular(4, 3, "@");
console.log(resultado);