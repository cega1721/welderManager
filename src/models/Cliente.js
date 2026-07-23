class Cliente {
    constructor({
        nombre,
        telefono,
        direccion,
        barrio,
        ciudad,
        correo = "",
        observaciones = ""
    }){

        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.barrio = barrio;
        this.ciudad = ciudad;
        this.correo = correo;
        this.observaciones = observaciones;

    }

    actualizarTelefono(nuevoTelefono){
        this.telefono = nuevoTelefono;
    }

    actualizarDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

    obtenerInformacion(){
        return `${this.nombre} - ${this.telefono} - ${this.direccion}, ${this.barrio}, ${this.ciudad}`;

    }
}

export default Cliente;