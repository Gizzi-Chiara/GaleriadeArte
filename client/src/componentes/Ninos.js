import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css'

const Ninos = () => {

    const [museo, setMuseo] = useState({
        museo: "Museo de los Niños",
        tipo: "ciencia/interactivo",
        encargado:"Centro Costarricense de Ciencia y Cultura",
        imagen: "https://elmundo.cr/wp-content/uploads/2018/10/IMG_0480-1024x683.jpg",
        horario:"Época lectiva: martes a viernes, 8:00 a.m. a 4:30 p.m. Sábado y domingo 9:30 a.m. a 5:00 p.m. // Vacaciones: lunes a domingo: 9:30 a.m. a 5:00 p.m. ",
        paginaweb:"http://museo.museocr.org/",
        lugar:"WWR9+GR4, Av 9, Bajos de La Union, San José",
        descripcion:"Popularmente conocido como Museo de los Niños, esta bella estructura de principios del siglo XX se inauguró como tal en 1994. Es el primer museo interactivo de Centroamérica con temas relacionados con las ciencias, la historia, la tecnología y las artes. En el encontramos la Galería Nacional de Arte, el Complejo Juvenil del Conocimiento y el Auditorio Nacional.",
        lat:9.941159845786645,
        long:-84.08021091312258
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

export default Ninos;