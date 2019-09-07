const personas = [
    {
     "nombre": "Juan",
     "apellido": "Palomo",
     "edad": "34"
    },
    {
     "nombre": "Eugene",
     "apellido": "Krabs",
     "edad": "35"
    },
    {
     "nombre": "Pedro",
     "apellido": "Gata",
     "edad": "50"
    }
   ];

   const ordenados = personas.sort(function (persona1, persona2) {
    return persona1.apellido > persona2.apellido;
   });

   console.log(ordenados);