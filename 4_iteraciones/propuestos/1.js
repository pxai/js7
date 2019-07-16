let numero = prompt("Introduce un número");

if (numero <= 0) {
    console.log("Debes introducir un número mayor que 0");
    
} else {
  while (numero > 0) {
    console.log("Hola!");
    numero--;
  }
}