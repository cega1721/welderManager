const validarId = (req, res, next) => {

    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "El ID del proyecto debe ser un número entero positivo."
        });
    }

    req.params.id = id;

    next();
};

export default validarId;