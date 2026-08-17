import Proyecto from "../models/Proyecto.js";
import AppError from "../../backend/src/middlewares/AppError.js";

class ProyectoRepository {
    constructor() {
        this.proyectos = [];
        this.siguienteId = 1;
    }

     agregar(proyecto) {

    if (!(proyecto instanceof Proyecto)) {
        throw new Error("Debe enviar una instancia de Proyecto.");
    }

    proyecto.id = this.siguienteId;

    this.siguienteId++;

    this.proyectos.push(proyecto);
}

    obtenerTodos() {
        return [...this.proyectos];
    }

   buscarPorId(id) {

    const proyectoEncontrado = this.proyectos.find(
        proyecto => proyecto.id === id
    );

    if (!proyectoEncontrado) {
        throw new AppError(
            "No se encontró el proyecto.",
            404
        );
    }

    return proyectoEncontrado;
}

   buscarPorCliente(clienteBuscado) {
    return this.proyectos.filter(
        proyecto => proyecto.cliente.nombre.toLowerCase().includes(
            clienteBuscado.toLowerCase())
    );

}

eliminarPorId(id) {
    const indice = this.proyectos.findIndex(
        proyecto => proyecto.id === id
    );

    if (indice === -1) {
        throw new AppError("No se encontró el proyecto.", 404);
    }

    return this.proyectos.splice(indice, 1)[0];
}

}

export default ProyectoRepository;