const Equipo = require("./equipo");
const equipo = new Equipo();

equipo.cargar();
equipo.mostrar();
equipo.fichaje("Pele", 10);
equipo.mostrar();