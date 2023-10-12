const UsuarioController = require("../controllers/usuario.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/registro", UsuarioController.registro);
    app.post("/api/login", UsuarioController.login);
    app.get("/api/logout", UsuarioController.logout);
    app.get('/api/usuario/:id', UsuarioController.usuario); 
    app.get('/api/onsesion',authenticate, UsuarioController.onsesion);
}