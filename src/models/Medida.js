class Medida {
    constructor({
        ancho,
        alto,
        unidad = "mm",
        espesor = null,
        tipoApertura = null,
        calibreMaterial = null,
        descuentoHolgura = 0,
        observaciones = [],

    }){
        this.ancho = ancho;
        this.alto = alto;
        this.unidad = unidad;
        this.espesor = espesor;
        this.tipoApertura = tipoApertura;
        this.calibreMaterial = calibreMaterial;
        this.descuentoHolgura = descuentoHolgura;
        this.observaciones = observaciones;
    }
    obtenerAnchoFinal(){
    return this.ancho - this.descuentoHolgura;
}

    obtenerAltoFinal(){
        return this.alto - this.descuentoHolgura;

    }

    agregarObservacion(texto){
        this.observaciones.push(texto);

    }

    actualizarEspesor(espesor){
        this.espesor = espesor;
    }

};