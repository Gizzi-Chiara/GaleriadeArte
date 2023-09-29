const ProyectoController = require("../controllers/proyecto.controller");
const {authenticate} = require("../config/jwt.config");

module.exports = app => {
    app.get('/api/obras', authenticate, ProyectoController.todos); 
    app.post('/api/nueva/obra', authenticate, ProyectoController.nuevo);
    app.get('/api/obra/:id', authenticate,  ProyectoController.buscar);
    app.put('/api/actualizar/obra/:id', authenticate, ProyectoController.actualizar);
    app.delete('/api/borrar/obra/:id', authenticate, ProyectoController.borrar);
}