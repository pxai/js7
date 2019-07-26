function aleatorio (max) {
    return Math.round(Math.random() * max);
}

function generarNombre (silabas) {
    const vocales = ["a", "e", "i", "o", "u"];
    const consonantes = ["b","c","d","f","g","h","j","k","l",
        "m","n","ñ","p","q","r","s","t","v","w","x","y","z"];
    let nombre = "";

    for (let i = 0; i < silabas; i++) {
        let consonante = consonantes[aleatorio(consonantes.length)];
        let vocal = vocales[aleatorio(vocales.length)];

        nombre = nombre + consonante + vocal;
    }

    return nombre;
}

console.log(generarNombre(3))