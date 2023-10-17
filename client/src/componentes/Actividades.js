import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from './logo/logo.png'
import Footer from './Footer';

const Actividades = () => {
    const [actividades, setActividades] = useState([]);
    const [creador, setCreador] = useState("");//acá es que si lo creó el usuario en sesión aparecen los botones de eliminar y modificar, o si no no.
    const [tipo, setTipo] = useState("");
    const [actividadesImprimir, setActividadesImprimir] = useState([]);

    var lista = [];
    var pretipo = "";
    var nueva = [];
    useEffect(() => {
        axios.get("http://localhost:8000/api/actividades")
            .then(res => { setActividades(res.data); setActividadesImprimir(res.data); })
            .catch(err => console.log(err));
        axios.get("http://localhost:8000/api/onsesion", { withCredentials: true })
            .then(res => { setCreador(res.data._id) })
            .catch(err => {
                if (err.response.status === 401) {
                    setCreador("");
                    console.log("Sin sesion iniciada!");
                }
            })
    }, [])
    //comentario
    const borrarActividad = id => {
        axios.delete("http://localhost:8000/api/actividades/" + id)
            .then(res => {
                let nuevaLista = actividades.filter(actividad => actividad._id !== id);
                setActividades(nuevaLista);
                let nuevasegundaLista = actividadesImprimir.filter(actividad => actividad._id !== id);
                setActividadesImprimir(nuevasegundaLista);
            })
    }
    const elegirTipo = e => {
        pretipo = e.target.value;
        setTipo(pretipo);
        lista = actividades;
        nueva = [];
        for (let i = 0; i < actividades.length; i++) {
            if (pretipo === "DEFAULT") {
                nueva = actividades;
            }
            else if (pretipo === "Todas") {
                nueva = actividades;
            }
            else if (pretipo === actividades[i].tipo) {
                nueva = [...nueva, actividades[i]];
            }
            else { }
        }
        setActividadesImprimir(nueva);
    }

    return (
        <div className='lista_actividades'>
            <div className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
                <div className='nav_act'>
                    <img className='logo' src={logo} alt='logo' />
                    <h1>Próximas actividades</h1>
                    <ul className='link_actividades navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista'>
                        <li className="nav-item">
                            <Link to="/actividades/crear" className="nav-link active">Crear Actividad</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Regresar</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='actividades_centro'>
                <div className='top_act'>
                    <div className='actividades_selector'>
                        <label>Seleccione la categoría de actividades</label>
                    </div>
                    <div>
                        <select name="tipo" className='form-select-sm mb-3' onChange={elegirTipo} defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Seleccione uno</option>
                            <option value="Todas">Todas</option>
                            <option value="Música">Música</option>
                            <option value="Pintura">Pintura</option>
                            <option value="Artresanías">Artesanías</option>
                            <option value="Teatro">Teatro</option>
                            <option value="Tatoos">Tattoos</option>
                            <option value="Baile">Baile</option>
                            <option value="Varios">Varios</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                </div>
                <table className='actividades_tabla'>
                    <div className='tabla_tabla'>
                        <thead className='tabla_content'>
                            <tr>
                                <th className='columna_a top'>Actividad</th>
                                <th className='columnas top'>Tipo</th>
                                <th className='columnas top'>Lugar</th>
                                <th className='columnas top'>Horario</th>
                                <th className='columnas top'>Fecha</th>
                                <th className='columnas top'></th>
                            </tr>
                        </thead>
                        <tbody className='tabla_content'>
                            {
                                actividadesImprimir.map((actividad, index) => (
                                    <tr key={index}>
                                        <td className='columna_a'>{actividad.actividad}</td>
                                        <td className='columnas'>{actividad.tipo}</td>
                                        <td className='columnas'>{actividad.lugar}</td>
                                        <td className='columnas'>{actividad.horario}</td>
                                        <td className='columnas'>{actividad.fecha}</td>
                                        <td className='columnas2'>
                                            <div className='buttons'>
                                                <Link to={`/actividades/ver/${actividad._id}`} className='actividadesLink btn_ver'>Ver</Link>
                                                <div>
                                                    {actividad.creador === creador ?
                                                        <div className='btn_borrar'>
                                                            <button className='actividadesLink1 btn_borrar1'><Link to={`/actividades/editar/${actividad._id}`} className='actividadesLink1 btn_borrar1'>Editar</Link></button>
                                                            <button onClick={() => borrarActividad(actividad._id)} className='actividadesLink1 btn_borrar1'>Borrar</button>
                                                        </div> : null
                                                    }
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </div>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Actividades;