import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from './logo/logo.png';
import Footer from './Footer';
import Check from "./imagenes/check.png";
import No from "./imagenes/no.png";

const VerActividad = () => {

    const { id } = useParams();
    const [actividad, setActividad] = useState({
        lat: 9.65,
        long: -84.09
    });
    const [showPopup, setShowPopup] = useState(true);

    const [viewState, setViewState] = React.useState({
        longitude: -84.09,
        latitude: 9.65,
        zoom: 6.1
    });

    useEffect(() => {
        axios.get("http://localhost:8000/api/actividades/" + id)
            .then(res => {
                setActividad(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
                <div className='nav_act'>
                    <img className='logo' src={logo} alt='logo' />
                    <h1>Detalles de la actividad</h1>
                    <ul className='link_actividades navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista'>
                        <li className="nav-item">
                            <Link to="/actividades" className="nav-link active">Regresar</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='informacionPrincipal'>
                <div className='ver'>
                    <div className='ver_izq'>
                            <div>
                                <img src={actividad.imagen} alt='actividad' className='img-fluid ver_img'/>
                            </div>
                        <div className='info_act'>
                            <div>
                                <p><span>Actividad:</span>{actividad.actividad}</p>
                                <p><span>Tipo:</span>{actividad.tipo}</p>
                                <p><span>Organizador:</span>{actividad.organizador}</p>
                                <p><span>Horario:</span>{actividad.horario}</p>
                                <p><span>Fecha:</span>{actividad.fecha}</p>
                                <span>Página web:</span>
                                <div className='link_act'>
                                    <Link to={actividad.paginaweb} className='link_actmus'>{actividad.paginaweb}</Link>
                                </div>
                            </div>
                            <div>
                                <p><span>Lugar: </span>{actividad.lugar}</p>
                                <p><span>Descripción: </span>
                                    {actividad.descripcion}
                                </p>
                                <div>
                                    <label><span>Pet Friendly: </span></label>
                                    {
                                        actividad.petfriendly ? <img src={Check} alt='check' className='check'/> : <img src={No} alt='check' className='check2'/>
                                    }
                                </div>
                                <div>
                                    <label><span>Familiar: </span></label>
                                    {
                                        actividad.familiar ? <img src={Check} alt='check' className='check'/> : <img src={No} alt='check' className='check2'/>
                                    }
                                </div>
                                <div>
                                    <label><span>Venta de Comidas: </span></label>
                                    {
                                        actividad.ventadecomidas ? <img src={Check} alt='check' className='check'/> : <img src={No} alt='check' className='check2'/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='ver_derecha'>
                            <div>
                                <div className='mapa_ver'>
                                <span>Ubicación:</span>
                                    <Map
                                        mapboxAccessToken='pk.eyJ1IjoibW9uaWNhbHVjaWExOTk0IiwiYSI6ImNsbmkwNHVvczFiODkybG1zcmFoMXQ1eHIifQ.X4HfG7hokZo_mNBg3Dxs3Q'
                                        {...viewState}
                                        onMove={evt => setViewState(evt.viewState)}
                                        mapStyle="mapbox://styles/mapbox/streets-v9"
                                        style={{ width: 400, height: 350 }}
                                    >
                                        <div id='marcador'>
                                            <Marker longitude={actividad.long} latitude={actividad.lat} offsetLeft={-20} offsetTop={-10}>
                                                <img src={PinImagen} style={{ fontSize: viewState.zoom * 5 }} />
                                            </Marker>
                                        </div>
                                        <div>
                                            {showPopup && (
                                                <Popup longitude={actividad.long} latitude={actividad.lat}
                                                    anchor="left"
                                                    onClose={() => setShowPopup(false)}>
                                                    <div className='card tarjetaVer'>
                                                        <label className='cardTitle tarjetaTitulo'>Actividad: </label>
                                                        <h4 className='cardDesc museo cuerpoCard'>{actividad.actividad}</h4>
                                                        <label className='cardTitle tarjetaTitulo'>Horario: </label>
                                                        <h4 className='cardDesc cuerpoCard'>{actividad.horario}</h4>
                                                        <label className='cardTitle tarjetaTitulo'>Tipo: </label>
                                                        <h4 className='cardDesc cuerpoCard'>{actividad.tipo}</h4>
                                                    </div>
                                                </Popup>)}
                                        </div>
                                    </Map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default VerActividad;