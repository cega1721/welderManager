import express from "express";
import ProyectoRepository from "../../src/repositories/ProyectoRepository.js";
import Cliente from "../../src/models/Cliente.js";
import Proyecto from "../../src/models/Proyecto.js";

const app = express();

app.use(express.json());

const PORT = 3000;

const repositorio = new ProyectoRepository();

app.get("/", (req, res) => {
    res.json({
        message: "WeldManager API funcionando"
    });
});

app.get("/api/proyectos", (req, res) => {
    res.json(repositorio.obtenerTodos());
});

app.get("/api/proyectos/:id", (req, res) => {

    try {

        const id = Number(req.params.id);

        const proyecto = repositorio.buscarPorId(id);

        res.json(proyecto);

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }
});

app.delete("/api/proyectos/:id", (req, res) => {

    try {

        const id = Number(req.params.id);

        const proyectoEliminado = repositorio.eliminarPorId(id);

        res.json({
            message: "Proyecto eliminado correctamente",
            proyecto: proyectoEliminado
        });

    } catch (error) {

        res.status(404).json({
            message: error.message
        });

    }
});

app.put("/api/proyectos/:id", (req, res) => {

    try {

        const id = Number(req.params.id);

        const proyecto = repositorio.buscarPorId(id);

        const resultado = proyecto.actualizarProyecto(req.body);

        res.json({
            message: resultado.mensaje,
            proyecto
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });

    }
});

app.post("/api/proyectos", (req, res) => {

    const datos = req.body;

    const cliente = new Cliente(datos.cliente);

    const proyecto = new Proyecto({
        id: 1,
        cliente,
        tipoTrabajo: datos.tipoTrabajo,
        responsable: datos.responsable
    });

    repositorio.agregar(proyecto);

    console.log("Datos recibidos:", req.body);
    console.log("Cliente creado:", cliente);
    console.log("Proyecto creado:", proyecto);

    res.status(201).json({
        message: "Proyecto creado correctamente",
        proyecto
    });
});

app.listen(PORT, () => {
    console.log(`Servidor WeldManager corriendo en el puerto ${PORT}`);
});