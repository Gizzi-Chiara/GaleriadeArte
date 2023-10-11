const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/proyecto2", { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("La conexion a la base de datos lista!"))
    .catch(err => console.log("Algo salio mal al conectarse", err));