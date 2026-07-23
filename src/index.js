import Cliente from "./models/Cliente.js";
import Proyecto from "./models/Proyecto.js";
import Material from "./models/Material.js";
import Foto from "./models/Foto.js";
import Medida from "./models/Medida.js";

const cliente = new Cliente({
    nombre: "Carlos Gómez",
    telefono: "3001234567",
    direccion: "Calle 10 #25-18",
    barrio: "Belén",
    ciudad: "Medellín"
});

const proyecto = new Proyecto(
     1,
    cliente,
    "Puerta",
    "John Mario Molina Martínez",
    new Date()
);

const material = new Material();

const foto = new Foto();

const medida = new Medida();