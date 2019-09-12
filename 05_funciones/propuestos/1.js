function saludo (momentoDelDia) {
    switch (momentoDelDia) {
        case "mañana": return "Buenos días";
        case "tarde": return "Buenas tardes";
        case "noche": return "Buenas noches";
        default: break;
    }
}

console.log(momentoDelDia("tarde"));

const momentoDelDia2 = momento => ({ 
    "mañana": "Buenos Días", 
    "tarde":  "Buenas tardes", 
    "noche": "Buenas noches"}[momento]);
    
    
console.log(momentoDelDia2("tarde"));
