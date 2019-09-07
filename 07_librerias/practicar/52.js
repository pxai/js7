const pajar = ["Navaja", "Aguas", "Aguja", "Dolor", "Glosa"];

const filtrado = pajar.filter(function (palabra) {
    return palabra.length === 5;
});

const encontrado = filtrado.find(function (palabra) {
    return palabra === "Aguja";
});

console.log(encontrado);

// En un solo paso, uniendo las llamadas filter y find
const resultado = pajar.filter(function (palabra) {
    return palabra.length === 5;
}).find(function (palabra) {
    return palabra === "Aguja";
});

console.log(resultado);