import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import {BsBalloonHeart, BsBalloonHeartFill} from "react-icons/bs";

const Detalle = () => {
    const {id} = useParams();
    const [obras, setObras] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [creador, setCreador] = useState("");

    const [like, setLike] = useState(false);
    const [contador, setContador] = useState(0);


    const likes = () =>{
        if(!like){
            setLike(true);
            setContador(contador + 1);
        }else{
            setLike(false);
            setContador(contador - 1);
        }
    }


    useEffect(() => {
        axios.get("http://localhost:8000/api/obra/"+ id, {withCredentials: true})
            .then(res => {
                setObras(res.data);
                setLike(res.data.like)
                setCreador(res.data.creador);
            })
            .catch(err => console.log(err));
    }, [id])

    useEffect(() => {
        if(creador !== ""){
            axios.get(`http://localhost:8000/api/usuario/`+ creador) 
                .then(res => {
                    setUsuario(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [creador])

    return(
        <div>
            <Nav/>
            <div className="card text-light detalle">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid" src={obras.imagen} alt="Obra"/>
                    </div>
                
                    <div className="col-md-8">
                        <div className="card-body m-2 info">
                            <h1>{obras.nombre}</h1>
                            <h3>Creado por: {usuario.usuario}</h3>
                            <p>Descripción: {obras.descripcion}</p>
                            <p>Fecha: {obras.fecha}</p>
                            <p>Categoría: {obras.categoria}</p>
                            <div className="botones">
                                <Link to="/principal" className="btn btn-outline-info">Regresar</Link>
                                <div className="d-flex likes">
                                    {
                                        like ? <BsBalloonHeartFill size={36} className="text-danger" onClick={likes} /> : <BsBalloonHeart size={36} onClick={likes} />
                                    }
                                    <p>{contador}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Detalle;