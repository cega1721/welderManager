import Cliente from "./models/Cliente.js";
import Proyecto from "./models/Proyecto.js";
import Material from "./models/Material.js";

import ProyectoRepository from "./repositories/ProyectoRepository.js";



const cliente = new Cliente({
    nombre: "Carlos Gómez",
    telefono: "3001234567",
    direccion: "Calle 10 #25-18",
    barrio: "Belén",
    ciudad: "Medellín"
});

const proyecto = new Proyecto({
     id: 1,
    cliente,
    tipoTrabajo: "Puerta",
    responsable: "John Mario Molina Martínez"
});

const material = new Material(

    "Tubo estructural",
    "2x1",
    16,
    6,
    "metros",
    8
);

proyecto.agregarMaterial(material);

const repositorio = new ProyectoRepository();

repositorio.agregar(proyecto);

console.log(repositorio.obtenerTodos());



    

/*
const foto = new Foto();

const medida = new Medida();
*/
