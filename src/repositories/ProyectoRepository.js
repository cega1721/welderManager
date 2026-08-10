import Proyecto from "../models/Proyecto.js";

class ProyectoRepository {
    constructor() {
        this.proyectos = [];
    }

     agregar(proyecto) {

        if (!(proyecto instanceof Proyecto)) {
            throw new Error("Debe enviar una instancia de Proyecto.");
        }

        const existeProyecto = this.proyectos.some(
            p => p.id === proyecto.id
        );

        if (existeProyecto) {
            throw new Error("Ese proyecto ya fue agregado al repositorio.");
        }

        this.proyectos.push(proyecto);
    }

    obtenerTodos() {
        return [...this.proyectos];
    }

    buscarPorId(id){


        const proyectoEncontrado = this.proyectos.find(
            proyecto => proyecto.id === id
                
        );

        if (!proyectoEncontrado) {
            throw new Error("No se encontro el proyecto");
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
        throw new Error("No se encontró el proyecto.");
    }

    return this.proyectos.splice(indice, 1)[0];
}

}

export default ProyectoRepository;