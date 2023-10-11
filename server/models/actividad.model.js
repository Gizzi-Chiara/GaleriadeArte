const mongoose = require("mongoose");

const actividadSchema = new mongoose.Schema(
    {
        actividad: {
            type:String,
            required: [true, "Actividad no puede ir vacío"]
        },
        organizador: {
            type:String,
            required: [true, "Organizador no puede ir vacío"]
        },
        imagen: {
            type: String,
        },
        descripcion: {
            type: String,
            required: [true, "Descripción no puede ir vacío"]
        },
        horario: {
            type: String,
            required: [true, "Horario no puede ir vacío"]
        },
        fecha: {
            type: String,
            required: [true, "Fecha no puede ir vacío"]
        },
        tipo: {
            type: String,
            required: [true, "Tipo no puede ir vacío"]
        },
        lugar: {
            type: String,
            required: [true, "Lugar no puede ir vacío"]
        },
        petfriendly: {
            type: Boolean,
            default: false,
        },
        familiar: {
            type: Boolean,
            default: false,
        },
        ventadecomidas: {
            type: Boolean,
            default: false,
        },
        paginaweb: {
            type: String,
        },
        lat:{
            type: Number,
            required: [true, "Debe de seleccionar una ubicación en el mapa"]
        },
        long:{
            type: Number,
            required: [true, "Debe de seleccionar una ubicación en el mapa"]
        },
        creador:{
            type: String
        }
    },{timestamps: true, versionKey:false}
)

const actividad= mongoose.model("actividades", actividadSchema);
module.exports = actividad;