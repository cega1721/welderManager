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
}

export default ProyectoRepository;