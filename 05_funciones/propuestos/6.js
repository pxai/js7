function factura(productos, cantidades, precios) {
    let factura = "FACTURA\n-------------------\n";
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        factura = factura + productos[i];
        factura = factura + " x " + cantidades[i];
        factura = factura + " : " + precios[i] + "\n";

        total = total + (cantidades[i] * precios[i]);
    }

    factura = factura + "\n-----------------------\n";
    factura = factura + "Total: " + total;

    return factura;
}

// Ejemplo de llamada
const totalFactura = factura(["Pan","Huevos","Harina"],[1,6,2],[1.2, 0.2, 0.8]);
console.log(totalFactura);