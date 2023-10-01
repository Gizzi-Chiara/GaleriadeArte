const Proyecto = require("../models/proyecto.model");
const jwt = require("jsonwebtoken");
const secret_key = "Clave secreta";

module.exports.todos = (req, res) => {
    Proyecto.find().collation({locale: "en"}).sort({fecha: 1})
        .then(obras => res.json(obras))
        .catch(err => {
            res.status(400).json(err);
        });
}

module.exports.nuevo = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    console.log(usertoken_decoded);
    let nuevaObra = req.body;
    nuevaObra.creador = usertoken_decoded._id;
    Proyecto.findOne({nombre: req.body.nombre})
        .then(obra =>{
            if(obra != null){
                //Ya existe un obra con ese nombre
                let err = {"errors": 
                            {"nombre": 
                                {"message": "Lo sentimos, este nombre ya existe"}
                            }
                        };
                res.status(400).json(err);
            } else {
                Proyecto.create(nuevaObra)
                    .then(obra => res.json(obra))
                    .catch(err => {res.status(400).json(err)});
            }
        })
}

module.exports.buscar = (req, res) => {
    Proyecto.findOne({_id: req.params.id})
    .then(obra => res.json(obra))
    .catch(err => {
            res.status(400).json(err);
        });
    }
    
module.exports.actualizar = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    Proyecto.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true}).collation({locale: "en"})
        .then(obra => res.json(obra))
        .catch(err => {
            res.status(400).json(err);
        });
}

module.exports.borrar = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    Proyecto.deleteOne({creador:usertoken_decoded._id},{_id: req.params.id}).collation({locale: "en"})
        .then(result => res.json(result))
        .catch(err => {
            res.status(400).json(err);
        });
}

/*usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
{creador:usertoken_decoded._id},*/

//MIS OBRAS

module.exports.misObras = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    Proyecto.find({creador:usertoken_decoded._id}).collation({locale: "en"}).sort({fecha: 1})
        .then(obras => res.json(obras))
        .catch(err => {
            res.status(400).json(err);
        });
}

module.exports.miObra = (req, res) => {
    Proyecto.findOne({_id: req.params.id})
    .then(obra => res.json(obra))
    .catch(err => {
            res.status(400).json(err);
        });
}