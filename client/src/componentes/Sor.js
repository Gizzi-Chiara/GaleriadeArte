import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from './logo/logo.png';
import Footer from './Footer';

const Sor = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo Sor María Romero",
        tipo: "Histórico",
        encargado:"NI",
        imagen: "data:image/jpeg;base64,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",
        horario:"Lunes a sábado, de 8:00 a.m. a 5:00 p.m.",
        paginaweb:"NI",
        lugar:"WWM4+HGG, Sor María Romero, San Bosco, San José",
        descripcion:"Se encuentra en la Casa de María Auxiliadora. Se exhiben objetos personales de Sor María Romero, así como fotografías antiguas, libros y algunos dibujos elaborados por la religiosa, que desde 1931 fue enviada a Costa Rica por la Congregación de Las Hijas de María Auxiliadora, donde se dedicó a servir a los necesitados durante 46 años.",
        lat:9.939454173839497,
        long:-84.0939411755452
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

export default Sor;