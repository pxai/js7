function aleatorio (max) {
    return Math.round(Math.random() * max);
}

function generarPassword (longitud) {
    const caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l",
        "m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z",
        "0","1","2","3","4","5","6","7","8","9",".","-","_","!","$"];
    let password = "";

    for (let i = 0; i < longitud; i++) {
        let caracter = caracteres[aleatorio(caracteres.length)];

        password = password + caracter;
    }

    return password;
}

module.exports = generarPassword;