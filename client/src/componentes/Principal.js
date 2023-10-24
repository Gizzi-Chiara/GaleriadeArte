import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "./Modal/Modal";


const Principal = () => {
    const [obras, setObras] = useState([]);
    const [filtro, setFiltro] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/obras", { withCredentials: true })
            .then(res => setObras(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate("/login");
                } else {
                    console.log(err);
                }
            })
    }, [])

    return (
        <div>
            <Nav />
            <div className="principal_center">
                <div className="card text-bg-dark">
                    <img src="https://wallpapercrafter.com/th8006/1692032-digital-painting-landscape-night-sky-clouds-animals.jpg" className="card-img principal" alt="Animals BisBiswas" />
                    <div className="card-img-overlay">
                        <h3 className="card-title">Bienvenidos a Galería de Arte</h3>
                        <p className="card-text">¿Buscas una categoría en especifico?</p>
                        <p className="card-text"><small>Pintura | Dibujo | Grabado | Diseño 3D | Diseño Digital | Fotografía | Animación | Tatuaje</small></p>
                        <div>
                            <input type="text" className="w-25 buscador" placeholder="Buscar categoría" value={filtro} onChange={e => setFiltro(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div>
                    <Link to="/nueva/obra" className="btn btn-outline-light agregar m-2" >Agregar Obra</Link>
                    <Link to="/misObras" className="btn btn-outline-light agregar m-2">Mis Obras</Link>
                </div>
                <div>
                    <div className="grid-gallery">
                        {
                            obras.filter((obra) => obra.categoria.toLowerCase().includes(filtro)).map((obra, index) => (
                                <div className="grid-gallery__item" key={index}>
                                    <img src={obra.imagen} className="grid-gallery__image" alt="imagen" onClick={() => navigate(`/obra/${obra._id}`)} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <Modal />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Principal;