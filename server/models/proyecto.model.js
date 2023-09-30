const mongoose = require("mongoose");

const proyectoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Esta maravillosa obra necesita tener un nombre"]
    },
    creador:{
        type: String
    },
    imagen: {
        type: String,
    },
    archivo: {
        type: String,
        /*
        required: [true, "Ingresa un archivo"],
        validate:{
            validator: val => /^[^\s]+(\.+(png|jpg|gif))?$/.test(val),
            message: "Ingrese un archivo"
        }
        */
    },
    descripcion:{
        type: String,
        required: [true, "Por favor introduce una pequeña descripcion"]
    },
    fecha: {
        type: String,
        required: [true, "Por favor introduce la fecha"]
    },
    categoria:{
        type: String,
        required: [true, "Por favor elije una categoria"]
    },
    favorito:{
        type: String
    }
}, {timestamps: true, versionKey: false});

const Proyecto = mongoose.model("proyecto", proyectoSchema);
module.exports = Proyecto;

