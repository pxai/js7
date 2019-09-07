const personas = [
    {
     nombre: "Juan",
     apellido: "Palomo",
     edad: 34
    },
    {
     nombre: "Eugene",
     apellido: "Krabs",
     edad: 35
    },
    {
     nombre: "Pedro",
     apellido: "Gata",
     edad: 50
    }
   ];

   const total = personas.reduce(function (persona1, persona2) {
    return {edad: persona1.edad + persona2.edad};
   });

   console.log(total.edad / personas.length);