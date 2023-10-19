import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from 'axios';
import Footer from "./Footer";
import Nav from "./Nav";

const MiObraD = () => {
    const {id} = useParams();
    const [obras, setObras] = useState([]);
    const [lista, setLista] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [creador, setCreador] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/miObra/"+ id, {withCredentials: true})
            .then(res => {
                setObras(res.data);
                setCreador(res.data.creador);
            })
            .catch(err => console.log(err));
    }, [id])
    
    useEffect(() => {
        if(creador !== ""){
            axios.get(`http://localhost:8000/api/usuario/${creador}`) 
                .then(res => {
                    setUsuario(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [creador])

    const borrarObra = id_borrar =>{
        axios.delete("http://localhost:8000/api/borrar/obra/" + id_borrar, {withCredentials:true})
            .then(res => {
                let nuevaLista = lista.filter(obras => obras._id !== id); //Sale que algo type error
                setObras(nuevaLista);
            })
            .catch( err => {
                if(err.response === 401){
                    navigate("/login")
                }else{
                    console.log(err)
                }
            })
    }
    return(
        <div>
            <Nav/>
            <div className="card text-light detalle">
                <div className="row g-0 \">
                    <div className="col-md-4">
                        <img className="img-fluid" src={obras.imagen} alt="Obra"/>
                    </div>
                
                    <div className="col-md-8">
                        <div className="card-body m-2 info">
                            <h1>{obras.nombre}</h1>
                            <h3>Creado por: {usuario.usuario}</h3>
                            <p>Descripcion: {obras.descripcion}</p>
                            <p>Fecha: {obras.fecha}</p>
                            <p>Tipo: {obras.categoria}</p>
                            <div className="botones">
                                <Link to="/misObras" className="btn btn-outline-info">Regresar</Link>
                                <Link to="/misObras" className="btn btn-outline-danger" onClick={()=>borrarObra(obras._id)}>Borrar</Link>
                            <Link to={`/actualizar/miObra/${obras._id}`} className="btn btn-outline-warning">Editar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_obras">
                <Footer/>
            </div>
        </div>
    );
}

export default MiObraD;