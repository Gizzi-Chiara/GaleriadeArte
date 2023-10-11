import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css'

const BancoCentral = () => {

    const [museo, setMuseo] = useState({
        museo: "Museos del Banco Central de Costa Rica",
        tipo: "patrimonio arqueológico, numismático y artístico",
        encargado:"Banco Central de Costa Rica",
        imagen: "https://costaricacc.com/wp-content/uploads/2019/05/Los-Museos-del-Banco-Central-de-Costa-Rica.jpg",
        horario:"Todos los días de 9:15 a.m. a 5:00 p.m.",
        paginaweb:"www.museosdelbancocentral.org",
        lugar:"Bajos de la Plaza de la Cultura. Avenida Central. Calle 5 San José Centro San José CR 10104, Av. Central, San José",
        descripcion:"Museo que cuenta con artefactos de oro, incluidas figuras y monedas, en un espacio moderno y subterráneo.",
        lat:9.933692652697783,
        long:-84.07678940517243
    });
    const [showPopup, setShowPopup] = useState(true);

    const [viewState, setViewState] = React.useState({
        longitude: -84.09,
        latitude: 9.65,
        zoom: 6.1
    });

    return (
        <div>
            <Link to={`/museos`}>Regresar</Link>
            <div className='informacionPrincipal'>
                <h1>Museo: {museo.museo}</h1>
                <h2>Tipo: {museo.tipo}</h2>
                <h2>Encargado: {museo.encargado}</h2>
                <h2>Imagen: </h2>
                <img src={museo.imagen} alt='museo'/>
                <h2>Horario: {museo.horario}</h2>
                <h2>Página web: {museo.paginaweb}</h2>
                <h2>Lugar: {museo.lugar}</h2>
                <p>Descripcion:
                    {museo.descripcion}
                </p>
            </div>
            <label>Lugar:</label>
            <div>
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
                                <img src={PinImagen} style={{ fontSize: viewState.zoom * 5 }}/>
                            </Marker>
                        </div>
                        <div>
                            {showPopup && (
                                <Popup longitude={museo.long} latitude={museo.lat}
                                    anchor="left"
                                    onClose={() => setShowPopup(false)}>
                                    <div className='card'>
                                        <label className='cardTitle'>Museo: </label>
                                        <h4 className='cardDesc museo'>{museo.museo}</h4>
                                        <label className='cardTitle'>Horario: </label>
                                        <h4 className='cardDesc'>{museo.horario}</h4>
                                        <label className='cardTitle'>Tipo: </label>
                                        <h4 className='cardDesc'>{museo.tipo}</h4>
                                    </div>
                                </Popup>)}
                        </div>
                    </Map>
                </div>
            </div>
        </div>
    )
}

export default BancoCentral;