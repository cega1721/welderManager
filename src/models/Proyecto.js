import Cliente from "./Cliente.js";
import Material from "./Material.js";
import Foto from "./Foto.js";
import Medida from "./Medida.js";
import ESTADOS_PROYECTO from "../constants/estadosProyecto.js";

class Proyecto {

    constructor({
        id,
        cliente,
        tipoTrabajo,
        responsable,
        fechaInicio = new Date(),
        estado = "Pendiente"
    }) {

        // Validar ID
        if (id === undefined || id === null) {
            throw new Error("El proyecto debe tener un id.");
        }

        // Validar que exista un cliente
        if (!cliente) {
            throw new Error("El proyecto debe tener un cliente.");
        }

        // Validar que sea una instancia de Cliente
        if (!(cliente instanceof Cliente)) {
            throw new Error(
                "cliente debe ser una instancia de Cliente."
            );
        }

        // Validar tipo de trabajo
        if (!tipoTrabajo) {
            throw new Error(
                "El proyecto debe tener un tipo de trabajo."
            );
        }

        // Validar responsable
        if (!responsable) {
            throw new Error(
                "Debe indicar un responsable."
            );
        }

        // Validar estado inicial
        if (!ESTADOS_PROYECTO.includes(estado)) {
            throw new Error(
                "El estado inicial del proyecto no es válido."
            );
        }

        // Propiedades principales
        this.id = id;
        this.cliente = cliente;
        this.tipoTrabajo = tipoTrabajo;
        this.responsable = responsable;

        this.fechaInicio = fechaInicio;
        this.fechaActualizacion = null;

        this.estado = estado;

        // Colecciones
        this.medidas = [];
        this.materiales = [];
        this.fotos = [];
    }


    agregarMaterial(material) {

        if (!(material instanceof Material)) {
            throw new Error(
                "Debe enviar una instancia de Material."
            );
        }

        const existe = this.materiales.some(
            m =>
                m.nombre === material.nombre &&
                m.perfil === material.perfil &&
                m.calibre === material.calibre
        );

        if (existe) {
            throw new Error(
                "Ese material ya fue agregado al proyecto."
            );
        }

        this.materiales.push(material);

        this.registrarActualizacion();
    }


    agregarMedida(medida) {

        if (!(medida instanceof Medida)) {
            throw new Error(
                "Debe enviar una instancia de Medida."
            );
        }

        this.medidas.push(medida);

        this.registrarActualizacion();
    }


    agregarFoto(foto) {

        if (!(foto instanceof Foto)) {
            throw new Error(
                "Debe enviar una instancia de Foto."
            );
        }

        this.fotos.push(foto);

        this.registrarActualizacion();
    }


    cambiarEstado(nuevoEstado) {

        if (!ESTADOS_PROYECTO.includes(nuevoEstado)) {
            throw new Error(
                "Estado no válido."
            );
        }

        this.estado = nuevoEstado;

        this.registrarActualizacion();
    }


    cambiarTipoTrabajo(nuevoTipoTrabajo) {

        if (!nuevoTipoTrabajo) {
            throw new Error(
                "El tipo de trabajo es obligatorio."
            );
        }

        this.tipoTrabajo = nuevoTipoTrabajo;

        this.registrarActualizacion();
    }


    cambiarResponsable(nuevoResponsable) {

        if (!nuevoResponsable) {
            throw new Error(
                "El responsable es obligatorio."
            );
        }

        this.responsable = nuevoResponsable;

        this.registrarActualizacion();
    }


    registrarActualizacion() {

        this.fechaActualizacion = new Date();
    }


    actualizarProyecto(datos) {

        if (!datos || typeof datos !== "object") {
            throw new Error(
                "Los datos de actualización deben ser un objeto."
            );
        }

        // Propiedades que NO se pueden modificar

        if ("id" in datos) {
            throw new Error(
                "El id del proyecto no se puede modificar."
            );
        }

        if ("cliente" in datos) {
            throw new Error(
                "El cliente del proyecto no se puede modificar."
            );
        }

        if ("fechaInicio" in datos) {
            throw new Error(
                "La fecha de inicio no se puede modificar."
            );
        }


        // Colecciones que tienen sus propios métodos

        if ("materiales" in datos) {
            throw new Error(
                "Los materiales deben modificarse mediante agregarMaterial()."
            );
        }

        if ("medidas" in datos) {
            throw new Error(
                "Las medidas deben modificarse mediante agregarMedida()."
            );
        }

        if ("fotos" in datos) {
            throw new Error(
                "Las fotos deben modificarse mediante agregarFoto()."
            );
        }


        // Propiedades que SÍ pueden modificarse

        if ("tipoTrabajo" in datos) {
            this.cambiarTipoTrabajo(datos.tipoTrabajo);
        }

        if ("responsable" in datos) {
            this.cambiarResponsable(datos.responsable);
        }

        if ("estado" in datos) {
            this.cambiarEstado(datos.estado);
        }


        return {
            mensaje: "Proyecto actualizado correctamente.",
            fechaActualizacion: this.fechaActualizacion
        };
    }
}

export default Proyecto;