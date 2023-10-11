import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css'

const Jade = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo del Jade y de la Cultura Precolombina",
        tipo: "patrimonio arqueológico",
        encargado:"INS",
        imagen: "https://3.bp.blogspot.com/-jwpUeM5IaYE/UaaHI7tQk7I/AAAAAAAAAmE/NUtb7mmaSww/s1600/JADE+010.jpg",
        horario:"De lunes a domingo de 8:00 a.m. a 5:00 p.m.",
        paginaweb:"https://museodeljade.grupoins.com/",
        lugar:"13 bis, y, Av. Central, San José",
        descripcion:"Museo con exhibiciones de objetos antropológicos, geológicos y arqueológicos, y una gran colección de jade.",
        lat:9.933299157570007,
        long:-84.07271401484465
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

export default Jade;