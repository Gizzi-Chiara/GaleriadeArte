import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            .then(res => {setActividades(res.data)})
            .catch(err => console.log(err));
    }, [])

    const borrarActividad = id => {
        axios.delete("http://localhost:8000/api/actividades/" + id)
            .then(res => {
                let nuevaLista = actividades.filter(actividad => actividad._id !== id);
                setActividades(nuevaLista);
                let nuevasegundaLista = actividadesImprimir.filter(actividad => actividad._id !== id);
                setActividadesImprimir(nuevasegundaLista);
            })
    }
    const elegirTipo = e =>{
        pretipo=e.target.value;
        setTipo(pretipo);
        lista=actividades;
        nueva=[];
        for(let i=0;i<actividades.length;i++){
            if(pretipo==="Todas"){
                nueva=actividades;
            }
            else if(pretipo===actividades[i].tipo){
                nueva=[...nueva,actividades[i]];
            }
            else{}
        }
        setActividadesImprimir(nueva);
    }

    return (
        <div>
            <Link to="/actividades/crear" className='actividadesLink'>Crear Actividad</Link>
            <Link to="/" className='actividadesLink'>Regresar</Link>
            <div>
                <label>Seleccione la categoría de actividades</label>
                <select name= "tipo" onChange={elegirTipo} defaultValue={'DEFAULT'}>
                    <option value="DEFAULT" disabled>Seleccione uno</option>
                    <option value="Todas">Todas</option>
                    <option value="Música">Música</option>
                    <option value="Pintura">Pintura</option>
                    <option value="Artresanías">Artesanías</option>
                    <option value="Teatro">Teatro</option>
                    <option value="Tatoos">Tatoos</option>
                    <option value="Baile">Baile</option>
                    <option value="Varios">Varios</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Actividad</th>
                        <th>Tipo</th>
                        <th>Lugar</th>
                        <th>Horario</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        actividadesImprimir.map((actividad, index) => (
                            <tr key={index}>
                                <td>{actividad.actividad}</td>
                                <td>{actividad.tipo}</td>
                                <td>{actividad.lugar}</td>
                                <td>{actividad.horario}</td>
                                <td>{actividad.fecha}</td>
                                <td>
                                    <Link to={`/actividades/ver/${actividad._id}`} className='actividadesLink'>Ver</Link>
                                    <Link to={`/actividades/editar/${actividad._id}`} className='actividadesLink'>Editar</Link>
                                    <button onClick={() => borrarActividad(actividad._id)}>Borrar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Actividades;