const mongoose = require("mongoose");

const proyectoSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: [true, "Esta maravillosa obra necesita tener un nombre"]
    },
    creador:{
        type: String
    },
    usuario:{
        type:String
    },
    imagen: {
        type: String,
    },
    archivo: {
        type: String,
        validate:{
            validator: val => (/.(gif|jpe?g|tiff?|png|webp|bmp)$/i).test(val),
            message: "Ingrese un archivo"
        }
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
    like:{
        type: Boolean
    },
    contador:{
        type: Number
    }
}, {timestamps: true, versionKey: false});

const Proyecto = mongoose.model("proyecto", proyectoSchema);
module.exports = Proyecto;

