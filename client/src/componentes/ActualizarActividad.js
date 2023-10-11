import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css'

const ActualizarActividad = () => {
    const [actividad, setActividad] = useState("");
    const [organizador,setOrganizador] = useState("");
    const [imagen, setImagen] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [horario, setHorario] = useState("");
    const [fecha, setFecha] = useState("");
    const [tipo, setTipo] = useState("");
    const [lugar, setLugar] = useState("");
    const [petfriendly, setPetfriendly] = useState(false);
    const [familiar, setFamiliar] = useState(false);
    const [ventadecomidas, setVentadecomidas] = useState(false);
    const [paginaweb, setPaginaweb] = useState("");

    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [latShow, setLatShow] = useState(null);
    const [longShow, setLongShow] = useState(null);

    const { id } = useParams();

    const [showPopup, setShowPopup] = useState(true);

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    var laIncome = 0;
    var loIncome = 0;

    useEffect(() => {
        axios.get("http://localhost:8000/api/actividades/" + id)
            .then(res => {
                setActividad(res.data.actividad);
                setOrganizador(res.data.organizador);
                setImagen(res.data.imagen);
                setDescripcion(res.data.descripcion);
                setHorario(res.data.horario);
                setFecha(res.data.fecha);
                setTipo(res.data.tipo);
                setLugar(res.data.lugar);
                setPetfriendly(res.data.petfriendly);
                setFamiliar(res.data.familiar);
                setVentadecomidas(res.data.ventadecomidas);
                setPaginaweb(res.data.paginaweb);
                setLat(res.data.lat);
                setLong(res.data.long)
            })
            .catch(err => console.log(err))
    }, [id])

    const [viewState, setViewState] = React.useState({
        longitude: -84.09,
        latitude: 9.65,
        zoom: 6.1
    });

    const handleAddClick = (e) => {
        e.preventDefault();
        setLong(null);
        setLat(null);
        laIncome = e.lngLat.lat;
        loIncome = e.lngLat.lng;
        console.log(laIncome);
        console.log(loIncome);
        setLatShow(laIncome);
        setLongShow(loIncome)
    }

    const handlePin = () =>{
        laIncome=latShow;
        loIncome=longShow;
        setLat(laIncome);
        setLong(loIncome);
        setLongShow(null);
    }

    const actualizar = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/actividades/"+id, {
            actividad,
            organizador,
            imagen,
            descripcion,
            horario,
            fecha,
            tipo,
            lugar,
            petfriendly,
            familiar,
            ventadecomidas,
            paginaweb,
            lat,
            long
        }, {withCredentials: true})
            .then(res => navigate("/actividades"))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <Link to={`/actividades`}>Regresar</Link>
            <h1>Editar Actividad</h1>
            <form onSubmit={actualizar}>
                <div>
                    <label>Actividad:</label>
                    <input type="text" id="actividad" value={actividad} onChange={e => setActividad(e.target.value)} />
                    {errors.actividad ? <span>{errors.actividad.message}</span> : null}
                </div>
                <div>
                    <label>Organizador:</label>
                    <input type="text" id="organizador" value={organizador} onChange={e => setOrganizador(e.target.value)} />
                    {errors.organizador ? <span>{errors.organizador.message}</span> : null}
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="text" id="imagen" value={imagen} onChange={e => setImagen(e.target.value)} />
                    {errors.imagen ? <span>{errors.imagen.message}</span> : null}
                </div>
                <div>
                    <label>Descripcion:</label>
                    <input type="text" id="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                    {errors.descripcion ? <span>{errors.descripcion.message}</span> : null}
                </div>
                <div>
                    <label>Horario:</label>
                    <input type="text" id="horario" value={horario} onChange={e => setHorario(e.target.value)} />
                    {errors.horario ? <span>{errors.horario.message}</span> : null}
                </div>
                <div>
                    <label>Fecha:</label>
                    <input type="text" id="fecha" value={fecha} onChange={e => setFecha(e.target.value)} />
                    {errors.fecha ? <span>{errors.fecha.message}</span> : null}
                </div>
                <div>
                    <select name= "tipo" onChange={e => setTipo(e.target.value)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Seleccione uno</option>
                        <option value="Música">Música</option>
                        <option value="Pintura">Pintura</option>
                        <option value="Artresanías">Artesanías</option>
                        <option value="Teatro">Teatro</option>
                        <option value="Tatoos">Tatoos</option>
                        <option value="Baile">Baile</option>
                        <option value="Varios">Varios</option>
                        <option value="Otro">Otro</option>
                    </select>
                    {errors.tipo ? <span>{errors.tipo.message}</span> : null}
                </div>
                <div>
                    <label>Página web:</label>
                    <input type="text" id="paginaweb" value={paginaweb} onChange={e => setPaginaweb(e.target.value)} />
                    {errors.paginaweb ? <span>{errors.paginaweb.message}</span> : null}
                </div>
                <div>
                    <label>Lugar:</label>
                    <input type="text" id="lugar" value={lugar} onChange={e => setLugar(e.target.value)} />
                    {errors.lugar ? <span>{errors.lugar.message}</span> : null}
                    <div>
                        <div id='map'>
                            <Map
                                mapboxAccessToken='pk.eyJ1IjoibW9uaWNhbHVjaWExOTk0IiwiYSI6ImNsbmkwNHVvczFiODkybG1zcmFoMXQ1eHIifQ.X4HfG7hokZo_mNBg3Dxs3Q'
                                {...viewState}
                                onMove={evt => setViewState(evt.viewState)}
                                mapStyle="mapbox://styles/mapbox/streets-v9"
                                style={{ width: 400, height: 350 }}
                                onDblClick={handleAddClick}
                                transitionDuration="200"
                            >
                                <div id='marcador'>
                                    {long ?
                                        <Marker latitude={lat} longitude={long} offsetLeft={-20} offsetTop={-10}>
                                            <img src={PinImagen} style={{ fontSize: viewState.zoom * 5 }} />
                                        </Marker> : null
                                    }
                                </div>
                                {long ?
                                    <div>
                                        {showPopup && (
                                            <Popup latitude={lat} longitude={long}
                                                anchor="left"
                                                onClose={() => setShowPopup(false)}>
                                                <div className='card'>
                                                    <label className='cardTitle'>Actividad: </label>
                                                    <h4 className='cardDesc museo'>{actividad}</h4>
                                                    <label className='cardTitle'>Horario: </label>
                                                    <h4 className='cardDesc'>{horario}</h4>
                                                    <label className='cardTitle'>Tipo: </label>
                                                    <h4 className='cardDesc'>{tipo}</h4>
                                                </div>
                                            </Popup>)}
                                    </div>
                                    :
                                    null
                                }
                                {longShow && (
                                    <Popup longitude={longShow} latitude={latShow}
                                        anchor="left"
                                        onClose={() => setLongShow(null)}>
                                        <div className='card'>
                                            <label className='cardTitle'>Actividad: </label>
                                            <h4 className='cardDesc museo'>{actividad}</h4>
                                            <label className='cardTitle'>Horario: </label>
                                            <h4 className='cardDesc'>{horario}</h4>
                                            <label className='cardTitle'>Tipo: </label>
                                            <h4 className='cardDesc'>{tipo}</h4>
                                            <button type='button' onClick={handlePin}>Añadir Pin</button>
                                        </div>
                                    </Popup>
                                )}
                            </Map>
                            {errors.lat ? <span>{errors.lat.message}</span> : null}
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id='petfriendly' name="petfriendly" checked={petfriendly} onChange={e => setPetfriendly(e.target.checked)} />
                    <label htmlFor='petfriendly'>Pet Friendly</label>
                </div>
                <div>
                    <input type="checkbox" id='familiar' name="familiar" checked={familiar} onChange={e => setFamiliar(e.target.checked)} />
                    <label htmlFor='familiar'>Familiar</label>
                </div>
                <div>
                    <input type="checkbox" id='ventadecomidas' name="ventadecomidas" checked={ventadecomidas} onChange={e => setVentadecomidas(e.target.checked)} />
                    <label htmlFor='ventadecomidas'>Venta de Comidas</label>
                </div>
                <input type="submit" value="Actualizar" />
            </form>
        </div>
    )
}

export default ActualizarActividad;