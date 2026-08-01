
class Foto {
        constructor(
            nombre,
            etapa,
            fecha,
            descripcion
        ) {

            this.nombre = nombre;
            this.etapa = etapa;
            this.fecha = fecha;
            this.descripcion = descripcion;
            
        }
    }

    const foto1 = new Foto(
        "cordon_inicial.jpg",

        "Antes",

        "2026-07-20",

        "Estado inicial"
    );

    export default Foto;