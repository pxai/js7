function aleatorio (max) {
    return Math.round(Math.random() * max);
}

class Moneda {
    tirar () {
        const lados = ["cara", "cruz"];
        const numero =  aleatorio(2);

        return lados[numero];
    }
}

const moneda = new Moneda();

for (let i = 0; i < 10; i++) {
    console.log(moneda.tirar());
}
