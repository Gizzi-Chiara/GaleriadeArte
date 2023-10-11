import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "./Footer";
import Nav from "./Nav";

const Obras = () => {
    const [obras, setObras] = useState([]);
    
    const [contenido, setContenido] = useState("");

    const [obraId,setObraId]=useState("");

    var idtemp="";

    const navigate = useNavigate();

    const [errores, setErrores] = useState({});//errores.ATRIBUTO.message

    useEffect(() =>{
        axios.get("http://localhost:8000/api/todasObras")
            .then( res => setObras(res.data))
            .catch( err => {
                if(err.response.status === 401){
                    navigate("/login");
                } else {
                    console.log(err);
                }
            })
    }, [])

    const guardarComentario = (e,idO) =>{
        e.preventDefault();
        idtemp=idO;
        setObraId(idtemp);
        axios.post("http://localhost:8000/api/comentarios",{
            contenido,
            obraId
        })
        .then(res => navigate("/"))
        .catch(err => setErrores(err.response.data.errors));
    }

    return(
        <div>
            <Nav/>
            <h1 className="text-center mt-3">Obras de los artistas:</h1>
            <div className="tarjeta d-flex misObras">
                {
                    obras.map((obra,index) => (
                        <div className="card-image m-3 pb-1" key={index}>
                            <div>
                                <img src={obra.imagen} className="img-thumbnail" alt="imagen" onClick={() => navigate(`/detalle/${obra._id}`)}/>
                            <div>
                                <form onSubmit={e => guardarComentario(e,obra._id)}>
                                    <label>Comentario:</label>
                                    <textarea name= 'contenido' value={contenido} onChange={e => setContenido(e.target.value)}/>
                                    {errores.contenido ? <p>{errores.contenido.message}</p>:null}
                                    <input type="submit" value="Guardar"/>
                                </form>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Obras;

//El comentario va dentro de un operador ternario {usuarioactual_id(logeado)==obra_usuario_id(creador)?null:tira para comentar}