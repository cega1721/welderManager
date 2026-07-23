import Material from "./Material.js";
import Foto from "./Foto.js";
import Medida from "./Medida.js"

class Proyecto {
    constructor(
        id,
        cliente,
        tipoTrabajo,
        responsable,
        fecchaInicio
    ){
        this.id = id;
        this.cliente = cliente;
        this.tipoTrabajo = tipoTrabajo;
        this.responsable = responsable;
        this.fechaInicio = fecchaInicio;
        this.estado = "Pendiente";
        this.medidas = [];
        this.materiales = [];
        this.fotos = [];
    }

    agregarMaterial(material){

        if(!(material instanceof Material)){

            console.log("Debe enviar un MAterial.");

            return;
            
        }

        this.materiales.push(material);
    
    }

    agregarFoto(foto){
        if(!(foto instanceof Foto)){
            console.log("La foto debe tener un nombre.")

            return;
        }
        this.fotos.push(foto);    
    }

    


    cambiarEstado(nuevoEstado){

        const estadosValidos = [

            "Pendiente",
            "En proceso",
            "En pintura",
            "Instalado",
            "Terminado"

        ];

        if(!estadosValidos.includes(nuevoEstado)){
            console.log("Estado no valido");
            return;
        }
        
        this.estado = nuevoEstado;
    }

}

const proyecto1 = new Proyecto(
    1,
    "Carlos",
    "Puerta",
    "John Mario Molina M",
    "2026-07-14"
);

proyecto1.agregarMaterial(material1);
console.log(proyecto1);


const proyecto = new Proyecto(
    2,
    "cliente de prueba",

    "Practica",

    "john",

    "2026-07-21",

    new Date()
);

const material1 = new Material(
    "Tubo estructural",
    "2 x 1",
    16,
    6,
    "metros",
    8
);

const cliente = new Cliente({
  nombre: "Carlos Gómez",
  telefono: "3001234567",
  direccion: "Calle 10 #25-18",
  barrio: "Belén",
  ciudad: "Medellín",
  correo: "carlos@gmail.com",
  observaciones: "Prefiere contacto por WhatsApp."
});

const UNIDADES = {
    MILIMETROS: "mm",
    CENTIMETROS: "cm",
    PULGADAS: "in"
};

const medida = new Medida({
    ancho: 900,
    alto: 2100,
    unidad: UNIDADES.MILIMETROS,
    espesor: 40,
    tipoApertura: "Derecha",
    calibreMaterial: "calibre 18",
    descuentoHolgura: 5,
    observaciones: [
        "el piso tiene una ligera pendiente."

    ]
});
console.log(cliente.obtenerInformacion());

cliente.actualizarTelefono("3119876543");



proyecto.agregarMaterial("Tubo 2x1");

proyecto.agregarMaterial("Platina");

proyecto.cambiarEstado("Terminado");

proyecto.agregarFoto(foto1);
console.log(proyecto.fotos)

console.log(proyecto.materiales);

console.log(proyecto.estado);

export default Proyecto;