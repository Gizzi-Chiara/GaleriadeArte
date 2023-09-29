import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Nav from "./Nav";
import Footer from "./Footer";

const Principal = () =>{
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
        <div>
            <Nav/>
            <div className="card text-bg-dark">
                <img src="https://wallpapercrafter.com/th8006/1692032-digital-painting-landscape-night-sky-clouds-animals.jpg" className="card-img principal" alt="Animals BisBiswas"/>
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small>Last updated 3 mins ago</small></p>
                <div>
                    <input type="text" className="form-control w-25" placeholder="Buscar categoria" value={filtro} onChange={e => setFiltro(e.target.value)}/>
                </div>
                </div>
            </div>
            <div className="tarjeta d-flex">
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
            <Footer/>
        </div>
    );
}

export default Principal;