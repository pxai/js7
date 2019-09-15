class Numero {
    static aleatorio (max) {
      return Math.round(Math.random() * max);
    }
}

for (let i = 0; i < 100; i ++)
    console.log(Numero.aleatorio(10));
