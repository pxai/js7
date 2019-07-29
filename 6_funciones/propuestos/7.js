function aleatorio (max) {
    return Math.round(Math.random() * max);
}

function generarAtributos (nivelCompensacion) {
    let darPuntosA = 0;
		
    let inteligencia = 0;
    let fuerza = 0;
    let velocidad = 0;
    
    let puntosRestantes = 20;
    let puntos = 0;

    while (puntosRestantes > 0) {
        if (nivelCompensacion > puntosRestantes) {
            puntos = puntosRestantes;
            puntosRestantes = 0;
        } else {
            puntos = aleatorio(nivelCompensacion+1);
            puntosRestantes = puntosRestantes - puntos;
        }
        
        darPuntosA = aleatorio(3);

        switch (darPuntosA) {
        case 0:
            inteligencia = inteligencia + puntos;
            break;
        case 1:
            fuerza = fuerza + puntos;
            break;
        case 2:
            velocidad = velocidad + puntos;
            break;
        default:
            break;
        }
    }

    console.log("\nValores asignados por compensación: " + nivelCompensacion);
    console.log("Inteligencia: " + inteligencia);
    console.log("Fuerza: " + fuerza);
    console.log("Velocidad: " + velocidad);
}

generarAtributos (3);
