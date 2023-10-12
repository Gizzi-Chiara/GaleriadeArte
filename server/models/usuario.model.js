const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const EsquemaUsuario = new mongoose.Schema({
    usuario:{
        type: String,
        required: [true, "Nombre de usuario obligatorio"]
    },
    creador: {
        type:String
    },
    email:{
        type: String,
        required: [true, "Correo obligatorio"],
        validate:{
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingrese un correo válido"
        },
        unique: true
    },
    password:{
        type: String,
        required: [true, "Contraseña obligatoria"],
        minlength: [8, "La contraseña debe terner al menos 8 caracteres"]
    }, 
    foto: {
        type: String,
    },
    descripcion:{
        type: String
    }
    
}, {timestamps: true, versionKey: false})

//No gusradar en DB
EsquemaUsuario.virtual('confirmPassword')
    .get( () => this._confirmPassword )
    .set( value => this._confirmPassword = value );

//Revisa si coinciden las contraseñas
EsquemaUsuario.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas no coinciden');
    }
    next();
});

//npm install bcrypt
EsquemaUsuario.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const Usuario = mongoose.model("usuarios", EsquemaUsuario);
module.exports = Usuario;