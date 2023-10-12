import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Footer from "./Footer";
import Nav from "./Nav";

const MisObras = () => {
    const [obras, setObras] = useState([]);

    //PERfil
    const [foto, setFoto] = useState(''); // para la URL de la foto
    const [descripcion, setDescripcion] = useState('');
    const [editingFoto, setEditingFoto] = useState(false); // para gestionar la edición de la foto
    const [editingDescripcion, setEditingDescripcion] = useState(false);
    const [isAddingNewFoto, setIsAddingNewFoto] = useState(false); // para agregar una nueva foto
    const [newFoto, setNewFoto] = useState(''); //para la nueva URL de la foto
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/misObras", { withCredentials: true })
            .then(res => setObras(res.data))
            .catch(err => {
                if (err.response.status === 401) {
                    navigate("/login");
                } else {
                    console.log(err);
                }
            })
    }, [])

    ///PERFIL
    useEffect(() => {
        cargarDatosPerfil();
    }, []);

    const cargarDatosPerfil = () => {
        axios.get('http://localhost:8000/api/usuario/perfil/perfil', { withCredentials: true })
            .then((response) => {
                const perfil = response.data;
                setFoto(perfil.foto || ''); // Inicializa la URL de la foto
                setDescripcion(perfil.descripcion || 'Aquí va tu descripción');
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleEditarDescripcion = () => {
        setEditingDescripcion(true);
    };

    const handleGuardarDescripcion = () => {
        setEditingDescripcion(false);

        axios.put('http://localhost:8000/api/usuario/perfil/descripcion', { descripcion }, { withCredentials: true })
            .then((response) => {
                console.log('Descripción actualizada correctamente');
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleAgregarFoto = () => {
        console.log('Handle Agregar Foto');
        setIsAddingNewFoto(true);
    };

    const handleGuardarNuevaFoto = () => {
        axios.put('http://localhost:8000/api/usuario/perfil/foto', { foto: newFoto }, { withCredentials: true })
            .then((response) => {
                console.log('Nueva foto de perfil guardada correctamente');
                setFoto(newFoto);
                setIsAddingNewFoto(false);
                setNewFoto('');
            })
            .catch((error) => {
                setError(error);
            });
    };

    const handleActualizarFoto = () => {
        setIsAddingNewFoto(true);
    };

    const handleFotoChange = (e) => {
        console.log('Handle Foto Change');
        setNewFoto(e.target.value);
    };


        return (
            <div>
                <Nav />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-2">
                            {/* Espacio para la foto */}
                            {isAddingNewFoto ? (
                                <>
                                    <input
                                        type="text"
                                        placeholder="URL de la foto de perfil"
                                        value={newFoto}
                                        onChange={handleFotoChange}
                                    />
                                    <button className="btn btn-outline-info mt-2" onClick={handleGuardarNuevaFoto}>
                                        Guardar
                                    </button>
                                </>
                            ) : (
                                <>
                                    {foto ? (
                                        <>
                                            <img src={foto} alt="Foto de Perfil" className="img-fluid imagen-perfil" />
                                            <div className="icon-container"><i className="bi bi-gear editar-icon iconofoto" onClick={handleActualizarFoto}>Actualizar Avatar</i></div>
                                            
                                        </>
                                    ) : (
                                        <>
                                            <button className="btn btn-outline-info mt-2" onClick={handleAgregarFoto}>Agregar Foto</button>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                        <div className="col-md-9 descripcion">
                            {/* Cuadro de descripción */}
                            {editingDescripcion ? (
                                <>
                                    <textarea
                                        className="form-control"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    />
                                    <button className="btn btn-outline-info mt-2" onClick={handleGuardarDescripcion}>
                                        Guardar
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Mi Descripción</h5>
                                            <p className="card-text">{descripcion}</p>
                                        </div>
                                    </div>
                                    <div className="icon-container"><i className="bi bi-gear editar-icon iconofoto" onClick={handleEditarDescripcion}>Actualizar Descripcion</i></div>
                                    
                                </>
                            )}
                        </div>
                    </div>
                    <h1 className="text-center mt-3">Mis Obras:</h1>
                    <div className="tarjeta d-flex misObras">
                        {
                            obras.map((obra, index) => (
                                <div className="card-image m-3 pb-1" key={index}>
                                    <div>
                                        <img src={obra.imagen} className="img-thumbnail" alt="imagen" onClick={() => navigate(`/detalle/${obra._id}`)} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
                    <div>
                        <Footer />
                    </div>
            </div>
        );
    }
    
    export default MisObras;