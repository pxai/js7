const cantidad = prompt("Introduzca una cantidad en euros");
const moneda = prompt("Introduzca una moneda para la conversion dolar, libra o yen (d/l/y)");
let resultado;

switch (moneda) {
    case "d":   
        resultado = cantidad * 1.2;
        console.log(`${cantidad}€ son ${resultado} dolares`);
        break;
    case "l":   
        resultado = cantidad * 0.8;
        console.log(`${cantidad}€ son ${resultado} libras`);
    case "y":
        resultado = cantidad * 3;
        console.log(`${cantidad}€ son ${resultado} yenes`);
    default:
        console.log("Moneda no soportada");
        break;
}