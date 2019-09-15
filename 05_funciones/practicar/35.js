function positivo (valor) {
    if (valor < 0) {
        return -valor;
    }

    return valor;
}

function potencia (valor1, valor2) {
    let resultado = valor1;
    while (valor2 - 1 > 0) {
        resultado *= valor1;
        valor2--;
    }

    return resultado;
}

console.log(potencia(positivo(2), positivo(4)))
potencia(positivo(-5), positivo(4));