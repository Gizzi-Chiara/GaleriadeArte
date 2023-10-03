const Usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");
const secret_key = "Clave secreta";
const bcrypt = require("bcrypt");

module.exports.registro = (req, res) => {
    const user = new Usuario(req.body);
    user.save()
        .then(usuario => {
            /*res.json(usuario);*/

            const payload = {
                _id: user._id
            }
            //Guardar usuario en cookie
            const myJWT = jwt.sign(payload, secret_key);

            res
                .cookie("usertoken", myJWT, secret_key, {
                    httpOnly: true
                })
                .json(usuario)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.login = (req, res) => {
    Usuario.findOne({email: req.body.email})
        .then(user => {
            if(user === null){
                res.json({error: true, message: "Necesitas estar registrado"});
            } else{
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if(passwordValid){
                            const payload = {
                                _id: user.id
                            }

                            const myJWT = jwt.sign(payload, secret_key);

                            res
                                .cookie("usertoken", myJWT, secret_key, {
                                    httpOnly: true
                                })
                                .json({error: false, message:"Sesion iniciada"})

                        } else{
                            res.json({error:true, message:"La contraseña es incorrecta"})
                        }
                    })
                    .catch()
            }
        })
        .catch(err => res.json(err));
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.status(200).json({message: "Sesion cerrada"})
}

module.exports.usuario = (req, res) => {
    Usuario.findOne({_id: req.params.id})
        .then(obras => res.json(obras))
        .catch(err => {
            res.status(400).json(err);
        });
}
