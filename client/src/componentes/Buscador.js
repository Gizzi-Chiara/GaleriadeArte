import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {

    const [obras, setObras] = useState([]);
    const [filtro, setFiltro] = useState("");


    const navigate = useNavigate();
    
    useEffect(() =>{
        axios.get("http://localhost:8000/api/obras", {withCredentials: true})
            .then( res => setObras(res.data))
            .catch( err => {
                if(err.response.status === 401){
                    navigate("/login");
                } else {
                    console.log(err);
                }
            })
    }, [])

    return(
        <div className="tarjeta d-flex container">
                <div>
                    <input type="text" className="form-control" placeholder="Buscar" value={filtro} onChange={e => setFiltro(e.target.value)}/>
                </div>
                {
                    obras.filter((obra) => obra.categoria.toLowerCase().includes(filtro)).map((obra,index) => (
                        <div className="card-image m-3 pb-1" key={index}>
                            <div>
                                <img src={obra.imagen} className="img-thumbnail" alt="imagen" onClick={() => navigate(`/obra/${obra._id}`)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
}

export default Buscador;