import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css'

const VerActividad = () => {

    const { id } = useParams();
    const [actividad, setActividad] = useState({
        lat:9.65,
        long:-84.09
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
            <Link to={`/actividades`}>Regresar</Link>
            <div className='informacionPrincipal'>
                <h1>Actividad: {actividad.actividad}</h1>
                <h2>Tipo: {actividad.tipo}</h2>
                <h2>Organizador: {actividad.organizador}</h2>
                <h2>Imagen: </h2>
                <img src={actividad.imagen} alt='actividad'/>
                <h2>Horario: {actividad.horario}</h2>
                <h2>Fecha: {actividad.fecha}</h2>
                <h2>Página web: {actividad.paginaweb}</h2>
                <h2>Lugar: {actividad.lugar}</h2>
                <p>Descripcion:
                    {actividad.descripcion}
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
                            <Marker longitude={actividad.long} latitude={actividad.lat} offsetLeft={-20} offsetTop={-10}>
                                <img src={PinImagen} style={{ fontSize: viewState.zoom * 5 }}/>
                            </Marker>
                        </div>
                        <div>
                            {showPopup && (
                                <Popup longitude={actividad.long} latitude={actividad.lat}
                                    anchor="left"
                                    onClose={() => setShowPopup(false)}>
                                    <div className='card'>
                                        <label className='cardTitle'>Actividad: </label>
                                        <h4 className='cardDesc museo'>{actividad.actividad}</h4>
                                        <label className='cardTitle'>Horario: </label>
                                        <h4 className='cardDesc'>{actividad.horario}</h4>
                                        <label className='cardTitle'>Tipo: </label>
                                        <h4 className='cardDesc'>{actividad.tipo}</h4>
                                    </div>
                                </Popup>)}
                        </div>
                    </Map>
                </div>
            </div>
            <h2>Pet Friendly</h2>
            {
                actividad.petfriendly ? <span>SI</span> : <span>NO</span>
            }
            <h2>Familiar</h2>
            {
                actividad.familiar ? <span>SI</span> : <span>NO</span>
            }
            <h2>Venta de comidas</h2>
            {
                actividad.ventadecomidas ? <span>SI</span> : <span>NO</span>
            }
        </div>
    )
}

export default VerActividad;