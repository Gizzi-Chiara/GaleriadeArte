const ProyectoController = require("../controllers/proyecto.controller");
const {authenticate} = require("../config/jwt.config");
const ActividadController = require("../controllers/actividad.controller");

module.exports = app => {
    app.get('/api/obras', authenticate, ProyectoController.todos); 
    app.get('/api/misObras', authenticate, ProyectoController.misObras); 
    app.post('/api/nueva/obra', authenticate, ProyectoController.nuevo);
    app.get('/api/obra/:id', authenticate,  ProyectoController.buscar);
    app.get('/api/miObra/:id', authenticate,  ProyectoController.miObra);
    app.put('/api/actualizar/miObra/:id', authenticate, ProyectoController.actualizar);
    app.delete('/api/borrar/obra/:id', authenticate, ProyectoController.borrar);

    app.get('/api/actividades', ActividadController.get_all);
    app.post('/api/actividades', ActividadController.create_actividad);
    app.get('/api/actividades/:id', ActividadController.get_actividad);
    app.put('/api/actividades/:id', ActividadController.update_actividad);
    app.delete('/api/actividades/:id', ActividadController.delete_actividad);
}