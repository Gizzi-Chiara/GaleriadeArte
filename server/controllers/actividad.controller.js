const Actividad = require("../models/actividad.model");
const jwt = require("jsonwebtoken");
const secret_key = "Clave secreta";

module.exports.get_all = (req, res) => {
    Actividad.find().sort({actividad: 1})
    //1 ASC 1-10 -1 DES 10-1
    .then(actividades => res.json(actividades))
    .catch(err => {res.status(400).json(err)});
}

//Crear una nueva actividad
module.exports.create_actividad = (req,res) =>{
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    let nuevaActividad = req.body;
    nuevaActividad.creador = usertoken_decoded._id;
    Actividad.findOne({actividad: req.body.actividad})
    .then(actividades=>{
        if(actividades != null){
            //Ya existe una actividad con ese título
            let err = {"errors": {"actividad":{"message": "La actividad ya existe"}}};
            res.status(400).json(err);
        }
        else{
            Actividad.create(nuevaActividad)
            .then(actividades => res.json(actividades))
            .catch(err => {res.status(400).json(err)});
        }
    })
}

//Regrese una actividad en base a su ID
module.exports.get_actividad = (req,res) => {
    Actividad.findOne({_id: req.params.id})
    .then(actividad => res.json(actividad))
    .catch(err => {res.status(400).json(err)});
}

//Actualiza una actividad
module.exports.update_actividad = (req,res) =>{
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    Actividad.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true}, {runValidators:true})
    .then(actividad => res.json(actividad))
    .catch(err => {res.status(400).json(err)});
}

//Borre actividad en base a su ID
module.exports.delete_actividad = (req, res) =>{
    Actividad.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => {res.status(400).json(err)});
}