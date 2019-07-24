function iniciarConNumero (numeros, numero) {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numero;
    }

    return numeros;
}

const iniciarConNumero1 = (numeros, numero) => { numeros.fill(numero); }
const iniciarConNumero2 = (numeros, numero) => numeros.forEach( n => { n = numero; } );
const iniciarConNumero3 = (numeros, numero) => numeros.map( () => numero );
