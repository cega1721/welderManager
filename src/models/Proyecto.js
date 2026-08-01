import Cliente from "./Cliente.js";
import Material from "./Material.js";
import Foto from "./Foto.js";
import Medida from "./Medida.js"
import ESTADOS_PROYECTO from "../constants/estadosProyecto.js";

class Proyecto {
    constructor({
        id,
        cliente,
        tipoTrabajo,
        responsable,
        fechaInicio = new Date(),
        estado = "Pendiente",
       

    }){

        if (id === undefined || id === null) {
            throw new Error("El proyecto debe tener un id.");
        
        }

        //Validar que exista un cliente 

        if(!cliente){
            throw new Error("El proyecto debe tener un cliente.");
        }

        // Validar que sea una instancia de Cliente

        if (!(cliente instanceof Cliente)) {
            throw new Error("cliente debe ser una instancia de Cliente.");
            
        }

        // Validar tipo de trabajo 

        if (!tipoTrabajo){
            throw new Error("El proyecto debe tener un tipo de trabajo.");

        }

        if (!responsable) {
            throw new Error("Debe indicar un responsable.");
        
        }

        

        this.id = id;
        this.cliente = cliente;
        this.tipoTrabajo = tipoTrabajo;
        this.responsable = responsable;
        this.fechaInicio = fechaInicio;
        this.estado = estado;

        this.medidas = [];
        this.materiales = [];
        this.fotos = [];
    }


    agregarMaterial(material){

        if(!(material instanceof Material)){

            throw new Error("Debe de enviar una instancia de Material.");
            
        }

        const existe = this.materiales.some(
            m =>
                 m.nombre === material.nombre &&
                 m.perfil === material.perfil &&
                 m.calibre === material.calibre
        );

        if (existe) {
            throw new Error("Ese material ya fue agregado al proyecto");
        }

        this.materiales.push(material);
    
    }

    agregarMedida(medida){

        if (!(medida instanceof Medida)){
            throw new Error("Debe de enviar una instancia de Medida.");

        }
        this.medidas.push(medida);
    }

    agregarFoto(foto){
        if(!(foto instanceof Foto)){
            throw new Error("Debe de enviar una instancia de Foto.");
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
            throw new Error("Estado no valido.")
        }
        
        this.estado = nuevoEstado;
    }

    

};



export default Proyecto;