let frase = "";

do {
    let palabra = prompt("Escribe una palabra");

    if (palabra !== "." || palabra !== "") {
        frase = frase + " " + palabra;
    }
} while (palabra !== ".");