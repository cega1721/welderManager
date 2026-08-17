import express, { json } from "express";
import ProyectoRepository from "../../src/repositories/ProyectoRepository.js";

const app = express();

app.use(express.json());

const PORT = 3000;

const repositorio = new ProyectoRepository();

app.get("/", (req, res) => {
    res.json({
        message: "WeldManager API funcionando"
    });
});

app.get("/api/proyectos",(req,res) => {
    res.json(repositorio.obtenerTodos());
});

app.post("/api/proyectos",(req,res) => {
    console.log("Datos recibidos: ",req.body);

    res.status(201)-json({
        message: "Proyecto recibido correctamente",datos: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Servidor WeldManager corriendo en el puerto ${PORT}`);
});
