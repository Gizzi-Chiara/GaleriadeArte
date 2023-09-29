const UsuarioController = require("../controllers/usuario.controller");

module.exports = app => {
    app.post("/api/registro", UsuarioController.registro);
    app.post("/api/login", UsuarioController.login);
    app.get("/api/logout", UsuarioController.logout);
    app.get('/api/usuario/:id', UsuarioController.usuario); 
}