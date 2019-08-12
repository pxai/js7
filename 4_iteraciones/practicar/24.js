// noprotect
let valor = "";

do {
  valor = prompt("Introduce un numero");
  if (valor < 0) {
      break;
  }
  for (let i = 0; i < valor; i++) {
    console.log("Hola");
  }
} while (valor !== 0);