const express = require("express");
const app = express();

const cors = require("cors");

const cookieParser = require("cookie-parser");
//npm install jsonwebtoken cookie-parser 

app.use(express.json(), express.urlencoded({extended:true}));

//para usar cookies
app.use(cookieParser());

//hace publicas las imagenes
app.use(
    cors({
        //URL React
        origin:"http://localhost:3000",
        //Credenciales
        credentials: true
    })
)

//Inicia DB
require("./server/config/mongoose.config");

//Importacion de rutas
const misRutas = require("./server/routes/proyecto.routes");
misRutas(app);

const rutasUsuario = require("./server/routes/usuario.routes");
rutasUsuario(app);

app.listen(8000, () => console.log("Server listo!"));
