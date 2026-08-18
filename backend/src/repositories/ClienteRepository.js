import Cliente from "../../../src/models/Cliente.js";
import pool from "../config/database.js";

class ClienteRepository {

    async agregar(cliente) {

        if (!(cliente instanceof Cliente)) {
            throw new Error(
                "Debe enviar una instancia de Cliente."
            );
        }

        const [resultado] = await pool.execute(
            `INSERT INTO clientes
            (
                nombre,
                telefono,
                direccion,
                barrio,
                ciudad,
                correo,
                observaciones
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                cliente.nombre,
                cliente.telefono,
                cliente.direccion,
                cliente.barrio,
                cliente.ciudad,
                cliente.correo,
                cliente.observaciones
            ]
        );

        return resultado.insertId;
    }
}

export default ClienteRepository;
