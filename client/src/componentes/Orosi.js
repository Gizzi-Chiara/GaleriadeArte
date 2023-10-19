import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css'
import Footer from './Footer';
import logo from './logo/logo.png';

const Orosi = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo de Arte Religioso San José de Orosi",
        tipo: "Histórico",
        encargado:"Ministerio de CUktura y Juventud",
        imagen: "data:image/jpeg;base64,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",
        horario:"Lunes a domingo, de 9:00 a.m. a 5:00 p.m.",
        paginaweb:"SI",
        lugar:"Costado norte de la Iglesia Colonial de Orosi, 224, Provincia de Cartago, Orosí",
        descripcion:"El Museo de Arte Religioso de San José de Orosí, ofrece una vista hermosa de la historia religiosa de Costa Rica y del Valle de Orosí. Se encuentra en lo que fue un convento de Padres Franciscanos, junto a la Iglesia Colonial de Orosí, una de las más antiguas que se encuentran en Costa Rica, cuya construcción se remonta al año de 1743.",
        lat:9.798925913438257,
        long:-83.8555386313213
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

export default Orosi;