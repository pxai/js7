let numero = prompt("Introduce un número");

if (numero <= 0) {
    console.log("Debes introducir un número mayor que 0");
} else {
    let estrellas = "\n";
    for (let i=0; i< numero;i++) {
      for (let j=0; j< numero;j++) {
        estrellas = estrellas + "*";
      }
      estrellas = estrellas + "\n";
    }
  console.log(estrellas);
}