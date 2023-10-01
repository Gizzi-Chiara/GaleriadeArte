import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Footer from "./Footer";
import Nav from "./Nav";

const MisObras = () => {
    const [obras, setObras] = useState([]);
    
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get("http://localhost:8000/api/misObras", {withCredentials: true})
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
            <h1 className="text-center">Mis Obras:</h1>
            <div className="tarjeta d-flex misObras">
                {
                    obras.map((obra,index) => (
                        <div className="card-image m-3 pb-1" key={index}>
                            <div>
                                <img src={obra.imagen} className="img-thumbnail" alt="imagen" onClick={() => navigate(`/detalle/${obra._id}`)}/>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </div>
    );
}

export default MisObras;