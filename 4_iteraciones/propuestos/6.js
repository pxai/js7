let numero = prompt("Introduce un número");

if (numero <= 0) {
    console.log("Debes introducir un número mayor que 0");
} else {
    let divisible = false;
    const original = numero;
    numero--;
    
    while (numero > 1 && !divisible) {
        if (original % numero === 0) {
            divisible = true;
        }
      numero--;
    }
  
    if (!divisible) {
      console.log(original + " es primo.");
    } else {
      console.log(original + " NO es primo.");
    }
}