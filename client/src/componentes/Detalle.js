import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";


const Detalle = () => {
    const {id} = useParams();
    const [obras, setObras] = useState([]);
    const [usuario, setUsuario] = useState("");
    const [creador, setCreador] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/obra/"+ id, {withCredentials: true})
            .then(res => {
                setObras(res.data);
                setCreador(res.data.creador);
            })
            .catch(err => console.log(err));
    }, [id])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/usuario/${creador}`) //En la terminal del navegador sale que no lo encuentra pero esta funcionando
            .then(res => {
                setUsuario(res.data);
            })
            .catch(err => console.log(err));
    }, [creador])

    /*const borrarObra = id =>{
        if(usuario._id === creador){
            console.log(creador);
            console.log(usuario._id);
            axios.delete("http://localhost:8000/api/borrar/obra/" + id, {withCredentials:true})
                .then(res => {
                    let nuevaLista = obras.filter(obras._id !== id); //Sale que algo type error
                    setObras(nuevaLista);
                })
                .catch( err => {
                    if(err.response === 401){
                        navigate("/login")
                    }else{
                        console.log(err)
                    }
                })
        } else{
            alert("No eres el creador")
        }
    }*/

    /*const actualizar = () => {
        if(usuario._id === creador){
            navigate(`/actualizar/obra/${obras._id}`)
        } else {
            alert("Solo el creador de esta obra puede acceder")
        }
    }*/

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
                            <p>Descripcion: {obras.descripcion}</p>
                            <p>Fecha: {obras.fecha}</p>
                            <p>Tipo: {obras.categoria}</p>
                            <div className="botones">
                                <Link to="/" className="btn btn-outline-info">Regresar</Link>
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