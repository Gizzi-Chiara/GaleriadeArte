import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Map, Marker, Popup } from 'react-map-gl';
import PinImagen from './imagenes/wing.png';
import 'mapbox-gl/dist/mapbox-gl.css';
import logo from './logo/logo.png';
import Footer from './Footer';
import { uploadFile } from "../credenciales/firebase";

const ActualizarActividad = () => {
    const [actividad, setActividad] = useState("");
    const [organizador, setOrganizador] = useState("");
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

    const [archivo, setArchivo] = useState(null);

    const [errors, setErrors] = useState({});

    const [ano, setAno] = useState(new Date().getFullYear());
    const [mes, setMes] = useState((new Date().getMonth() + 1));
    const [dia, setDia] = useState(new Date().getDate());

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
                if (mes < 10) {
                    setMes("0" + mes.toString)
                } else {
                    setMes(mes);
                }
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

    const handlePin = () => {
        laIncome = latShow;
        loIncome = longShow;
        setLat(laIncome);
        setLong(loIncome);
        setLongShow(null);
    }

    const actualizar = async (e) => {
        e.preventDefault();
        const result = await uploadFile(archivo);
        console.log(result)
        setImagen(result);
        console.log(imagen)
        axios.put("http://localhost:8000/api/actividades/" + id, {
            actividad,
            organizador,
            imagen: result,
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
        }, { withCredentials: true })
            .then(res => navigate("/actividades"))
            .catch(err => setErrors(err.response.data.errors));
    }

    return (
        <div>
            <div className='lista_actividades'>
                <div className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
                    <div className='nav_act'>
                        <img className='logo' src={logo} alt='logo' />
                        <h1>Actualizar Actividad</h1>
                        <ul className='link_actividades navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista'>
                            <li className="nav-item">
                                <Link to="/actividades" className="nav-link active">Regresar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <form onSubmit={actualizar} className='crear_body'>
                        <div className='form_act'>
                            <div className='act_izq'>
                                <div>
                                    <label className='izq_label'>Actividad:</label>
                                    <input type="text" className='input' id="actividad" value={actividad} onChange={e => setActividad(e.target.value)} />
                                    {errors.actividad ? <span>{errors.actividad.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Organizador:</label>
                                    <input type="text" className='input' id="organizador" value={organizador} onChange={e => setOrganizador(e.target.value)} />
                                    {errors.organizador ? <span>{errors.organizador.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Imagen:</label>
                                    <input className="form-control archivo mb-3 input" type="file" id="file" onChange={e => setArchivo(e.target.files[0])} />
                                    {errors.imagen ? <span>{errors.imagen.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Descripcion:</label>
                                    <input type="text" className='input' id="descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
                                    {errors.descripcion ? <span>{errors.descripcion.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Horario:</label>
                                    <input type="time" className='input' id="horario" value={horario} onChange={e => setHorario(e.target.value)} />
                                    {errors.horario ? <span>{errors.horario.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Fecha:</label>
                                    <input type="date" min={`${ano}-${mes}-${dia}`} className='input' id="fecha" value={fecha} onChange={e => setFecha(e.target.value)} />
                                    {errors.fecha ? <span>{errors.fecha.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Categoría: </label>
                                    <select name="tipo" className='form-select-sm mb-3 input' onChange={e => setTipo(e.target.value)} defaultValue={'DEFAULT'}>
                                        <option value="DEFAULT" disabled>Seleccione una</option>
                                        <option value="Música">Música</option>
                                        <option value="Pintura">Pintura</option>
                                        <option value="Artresanías">Artesanías</option>
                                        <option value="Teatro">Teatro</option>
                                        <option value="Tatoos">Tattoos</option>
                                        <option value="Baile">Baile</option>
                                        <option value="Varios">Varios</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                    {errors.tipo ? <span>{errors.tipo.message}</span> : null}
                                </div>
                                <div>
                                    <label className='izq_label'>Página web:</label>
                                    <input type="text" id="paginaweb" className='input' value={paginaweb} onChange={e => setPaginaweb(e.target.value)} />
                                    {errors.paginaweb ? <span>{errors.paginaweb.message}</span> : null}
                                </div>
                                <label className='izq_label'>Lugar:</label>
                                <input type="text" id="lugar" value={lugar} onChange={e => setLugar(e.target.value)} className='input' />
                                {errors.lugar ? <span>{errors.lugar.message}</span> : null}
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
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div className='map_crear'>
                                            <label>Haz doble click en la ubicación y guarda el pin:</label>
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
                                                                <div className='card tarjetaVer'>
                                                                    <label className='cardTitle tarjetaTitulo'>Actividad: </label>
                                                                    <h4 className='cardDesc museo cuerpoCard'>{actividad}</h4>
                                                                    <label className='cardTitle tarjetaTitulo'>Horario: </label>
                                                                    <h4 className='cardDesc cuerpoCard'>{horario}</h4>
                                                                    <label className='cardTitle tarjetaTitulo'>Tipo: </label>
                                                                    <h4 className='cardDesc cuerpoCard'>{tipo}</h4>
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
                                                        <div className='card tarjetaVer'>
                                                            <label className='cardTitle tarjetaTitulo'>Actividad: </label>
                                                            <h4 className='cardDesc museo cuerpoCard'>{actividad}</h4>
                                                            <label className='cardTitle tarjetaTitulo'>Horario: </label>
                                                            <h4 className='cardDesc cuerpoCard'>{horario}</h4>
                                                            <label className='cardTitle tarjetaTitulo'>Tipo: </label>
                                                            <h4 className='cardDesc cuerpoCard'>{tipo}</h4>
                                                            <button type='button' onClick={handlePin}>Añadir Pin</button>
                                                        </div>
                                                    </Popup>
                                                )}
                                            </Map>
                                            {errors.lat ? <span>{errors.lat.message}</span> : null}
                                            <label className='label_map'>*Si te equivocas, cambia la ubicación y vuelve a guardar el pin</label>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Actualizar" className='btn btn-outline-light actualizar' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ActualizarActividad;