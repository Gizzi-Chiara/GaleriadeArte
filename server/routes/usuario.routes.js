const UsuarioController = require("../controllers/usuario.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.post("/api/registro", UsuarioController.registro);
    app.post("/api/login", UsuarioController.login);
    app.get("/api/logout", UsuarioController.logout);
    app.get('/api/usuario/:id', UsuarioController.usuario); 
    app.get('/api/onsesion',authenticate, UsuarioController.onsesion);

    // Ruta para actualizar la imagen de perfil del usuario
    app.put('/api/usuario/perfil/foto', authenticate, UsuarioController.update_foto);
    // Ruta para actualizar la descripción del usuario
    app.put('/api/usuario/perfil/descripcion', authenticate, UsuarioController.update_descripcion);
    app.get('/api/usuario/perfil/perfil', authenticate, UsuarioController.info_sesion);
}