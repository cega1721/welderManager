import Cliente from "../../../src/models/Cliente.js";
import Proyecto from "../../../src/models/Proyecto.js";


const obtenerProyectos = (repositorio) => {

    return (req, res, next) => {

        try {

            const proyectos = repositorio.obtenerTodos();

            res.json(proyectos);

        } catch (error) {

            next(error);

        }
    };
};


const obtenerProyectoPorId = (repositorio) => {

    return (req, res, next) => {

        try {

            const proyecto = repositorio.buscarPorId(req.params.id);

            res.json(proyecto);

        } catch (error) {

            next(error);

        }
    };
};


const crearProyecto = (repositorio) => {

    return (req, res, next) => {

        try {

            const datos = req.body;

            const cliente = new Cliente(datos.cliente);

            const proyecto = new Proyecto({
                id: 0,
                cliente,
                tipoTrabajo: datos.tipoTrabajo,
                responsable: datos.responsable
            });

            repositorio.agregar(proyecto);

            res.status(201).json({
                message: "Proyecto creado correctamente",
                proyecto
            });

        } catch (error) {

            next(error);

        }
    };
};

const actualizarProyecto = (repositorio) => {

    return (req, res, next) => {

        try {

            const proyecto = repositorio.buscarPorId(req.params.id);

            const resultado = proyecto.actualizarProyecto(req.body);

            res.json({
                message: resultado.mensaje,
                proyecto
            });

        } catch (error) {

            next(error);

        }
    };
};

const eliminarProyecto = (repositorio) => {

    return (req, res, next) => {

        try {

            const proyectoEliminado =
                repositorio.eliminarPorId(req.params.id);

            res.json({
                message: "Proyecto eliminado correctamente",
                proyecto: proyectoEliminado
            });

        } catch (error) {

            next(error);

        }
    };
};


export {
    obtenerProyectos,
    obtenerProyectoPorId,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto
};