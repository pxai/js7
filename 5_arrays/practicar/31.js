
const clientes = [
    {
        nombre: "Juan",
        email: "jj@terra.com",
        edad: 39
    },
    {
        nombre: "Pedro",
        email: "pp@ozu.es",
        edad: 42
    },
    {
        nombre: "Ana",
        email: "ana@ole.com",
        edad: 37
    }
];

for (let i = 0; i < clientes.length; i++) {
    console.log(`${clientes[i].nombre} ${clientes[i].edad}`);
}