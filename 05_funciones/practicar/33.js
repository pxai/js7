function diferencia (valor1, valor2) {
    let diferencia = 0;

    if (valor1 > valor2) {
        diferencia = valor1 - valor2;
    } else {
        diferencia = valor2 - valor1;
    }

    console.log("La diferencia es: ", diferencia);
}

diferencia(10, 5);
diferencia(4, 12);
