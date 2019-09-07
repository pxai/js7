const nombres = ["Mia", "Sara", "Eugene", "Ana", "Anne", "Luz"];

const cortos = nombres.filter(function (nombre) {
    return nombre.length < 4;
});

console.log(cortos);