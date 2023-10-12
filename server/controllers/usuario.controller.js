const Usuario = require("../models/usuario.model");
const jwt = require("jsonwebtoken");
const secret_key = "Clave secreta";
const bcrypt = require("bcrypt");
const { RevealContent } = require("semantic-ui-react");

module.exports.registro = (req, res) => {
    const user = new Usuario(req.body);
    user.save()
        .then(usuario => {
            /res.json(usuario);/

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

module.exports.onsesion = (req,res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken,secret_key);
    res.json({_id:usertoken_decoded._id})
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

module.exports.update_foto = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    // Actualizar la imagen de perfil en la base de datos para el usuario actual
    Usuario.findOneAndUpdate({ _id: usertoken_decoded._id }, { $set: {foto:  req.body.foto} }, { new: true })
        .then(perfil => res.json(perfil))
        .catch(err => {
            res.status(400).json(err);
        });
};

module.exports.update_descripcion = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    // Actualizar la descripción en la base de datos para el usuario actual
    Usuario.findOneAndUpdate({ _id: usertoken_decoded._id }, { $set: {descripcion:  req.body.descripcion} }, { new: true })
        .then(perfil => res.json(perfil))
        .catch(err => {
            res.status(400).json(err);
        });
};
///usuario
module.exports.info_sesion = (req, res) => {
    usertoken_decoded = jwt.verify(req.cookies.usertoken, secret_key);
    Usuario.findOne({_id: usertoken_decoded._id})
        .then(perfil => res.json(perfil))
        .catch(err => {
            res.status(400).json(err);
        });
}