const numeros = [3, 5, 2, 4, 0, 1];
numeros.forEach(function (numero, indice) {
	console.log(indice + " : " + numero);
});

function procesar (numero) {
	console.log(numero);
}

numeros.forEach(procesar);