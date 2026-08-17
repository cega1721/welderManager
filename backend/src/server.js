import express from "express";
import ProyectoRepository from "../../src/repositories/ProyectoRepository.js";
import Cliente from "../../src/models/Cliente.js";
import Proyecto from "../../src/models/Proyecto.js";
import errorHandler from "./middlewares/errorHandler.js";
import validarId from "./middlewares/validarId.js";
import {
    obtenerProyectos,
    obtenerProyectoPorId,
    crearProyecto,
    actualizarProyecto,
    eliminarProyecto
} from "./controllers/proyecto.controller.js";

const app = express();

app.use(express.json());

const PORT = 3000;

const repositorio = new ProyectoRepository();

app.get("/", (req, res) => {
    res.json({
        message: "WeldManager API funcionando"
    });
});

app.get(
    "/api/proyectos",
    obtenerProyectos(repositorio)
);

app.get(
    "/api/proyectos/:id",
    validarId,
    obtenerProyectoPorId(repositorio)
);

app.post(
    "/api/proyectos",
    crearProyecto(repositorio)
);

app.put(
    "/api/proyectos/:id",
    validarId,
    actualizarProyecto(repositorio)
);

app.delete(
    "/api/proyectos/:id",
    validarId,
    eliminarProyecto(repositorio)
);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Servidor WeldManager corriendo en el puerto ${PORT}`);
});