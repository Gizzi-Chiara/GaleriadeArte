import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from './logo/logo.png';
import Footer from './Footer';

const Jade = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo del Jade y de la Cultura Precolombina",
        tipo: "Patrimonio arqueológico",
        encargado: "INS",
        imagen: "https://3.bp.blogspot.com/-jwpUeM5IaYE/UaaHI7tQk7I/AAAAAAAAAmE/NUtb7mmaSww/s1600/JADE+010.jpg",
        horario: "De lunes a domingo de 8:00 a.m. a 5:00 p.m.",
        paginaweb: "https://museodeljade.grupoins.com/",
        lugar: "13 bis, y, Av. Central, San José",
        descripcion: "Museo con exhibiciones de objetos antropológicos, geológicos y arqueológicos, y una gran colección de jade.",
        lat: 9.933299157570007,
        long: -84.07271401484465
    });
    const [showPopup, setShowPopup] = useState(true);

    const [viewState, setViewState] = React.useState({
        longitude: -84.09,
        latitude: 9.65,
        zoom: 6.1
    });

    return (
        <div>
            <div className='lista_actividades'>
                <div className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
                    <div className='nav_act'>
                        <img className='logo' src={logo} alt='logo' />
                        <h1>Museos</h1>
                        <ul className='link_actividades navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista'>
                            <li className="nav-item">
                                <Link to="/museos" className="nav-link active">Regresar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='todo_museo'>
                <h1 className='nombre_museo'>{museo.museo}</h1>
                <div className='body_museo'>
                    <div className='informacionPrincipal'>
                        <div>
                            <img src={museo.imagen} alt='museo' className='museo_foto' />
                        </div>
                        <div className='museo_bottom'>
                            <p><span>Tipo:</span>{museo.tipo}</p>
                            <p><span>Encargado:</span>{museo.encargado}</p>
                            <p><span>Horario:</span>{museo.horario}</p>
                            <span>Página web:</span><Link to={museo.paginaweb} className='link_actmus'>{museo.paginaweb}</Link>
                            <p><span>Ubicación:</span>{museo.lugar}</p>
                            <p><span>Descripción:</span><br></br>
                                {museo.descripcion}
                            </p>
                        </div>
                    </div>
                    <div className='informacionPrincipal'>
                        <div id='map'>
                            <Map
                                mapboxAccessToken='pk.eyJ1IjoibW9uaWNhbHVjaWExOTk0IiwiYSI6ImNsbmkwNHVvczFiODkybG1zcmFoMXQ1eHIifQ.X4HfG7hokZo_mNBg3Dxs3Q'
                                {...viewState}
                                onMove={evt => setViewState(evt.viewState)}
                                mapStyle="mapbox://styles/mapbox/streets-v9"
                                style={{ width: 400, height: 350 }}
                            >
                                <div id='marcador'>
                                    <Marker longitude={museo.long} latitude={museo.lat} offsetLeft={-20} offsetTop={-10}>
                                        <img src={PinImagen} style={{ fontSize: viewState.zoom * 5 }} />
                                    </Marker>
                                </div>
                                <div>
                                    {showPopup && (
                                        <Popup longitude={museo.long} latitude={museo.lat}
                                            anchor="left"
                                            onClose={() => setShowPopup(false)}>
                                            <div className='card tarjetaVer'>
                                                <label className='cardTitle tarjetaTitulo'>Museo: </label>
                                                <h4 className='cardDesc museo cuerpoCard'>{museo.museo}</h4>
                                                <label className='cardTitle tarjetaTitulo'>Horario: </label>
                                                <h4 className='cardDesc cuerpoCard'>{museo.horario}</h4>
                                                <label className='cardTitle tarjetaTitulo'>Tipo: </label>
                                                <h4 className='cardDesc cuerpoCard'>{museo.tipo}</h4>
                                            </div>
                                        </Popup>)}
                                </div>
                            </Map>
                        </div>

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Jade;