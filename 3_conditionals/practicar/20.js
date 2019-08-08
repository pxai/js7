const mes = prompt("Introduce un mes del año");

switch (mes) {
    case "Enero":
            console.log("31 días");
            break;
    case "Febrero":
            console.log("28/29 días");
            break;
    case "Marzo":
            console.log("31 días");
            break;
    case "Abril":
            console.log("30 días");
            break;
    case "Mayo":
            console.log("31 días");
            break;
    case "Junio":
            console.log("30 días");
            break;
    case "Julio":
            console.log("31 días");
            break;
    case "Agosto":
            console.log("31 días");
            break;
    case "Septiembre":
            console.log("30 días");
            break;
    case "Octubre":
            console.log("31 días");
            break;
    case "Noviembre":
            console.log("30 días");
            break;
    case "Diciembre":
            console.log("31 días");
            break;
    default:
            console.log("Mes desconocido");
            break;
}

// Agrupando case
switch (mes) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
            console.log("31 días");
            break;
    case "Febrero":
            console.log("28/29 días");
            break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
            console.log("30 días");
            break;
    default:
            console.log("Mes desconocido");
            break;
}