import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo/logo.png'

const Museos = () => {
    const [museos, setMuseos] = useState([{ museo: "Museo Nacional de Costa Rica", tipo: "Histórico", lugar: "Cuesta de Moras, Av. Central, Bella Vista, San José", horario: "Martes a Sábado: de 8:30 a.m. a 4:30 p.m.//Domingo: de 9:00 a.m. a 4:30 p.m.", descripcion: "Museo nacional costarricense que tiene exhibiciones arqueológicas, culturales, militares y de vida silvestre.", id: "nacional" }, { museo: "Museo del Jade y de la Cultura Precolombina", tipo: "Patrimonio arqueológico", lugar: "13 bis, y, Av. Central, San José", horario: "De lunes a domingo de 8:00 a.m. a 5:00 p.m.", descripcion: "Museo con exhibiciones de objetos antropológicos, geológicos y arqueológicos, y una gran colección de jade.", id: "jade" }, { museo: "Museos del Banco Central de Costa Rica", tipo: "Patrimonio arqueológico, numismático y artístico", lugar: "Bajos de la Plaza de la Cultura. Avenida Central. Calle 5 San José Centro San José CR 10104, Av. Central, San José", horario: "Todos los días de 9:15 a.m. a 5:00 p.m.", descripcion: "Museo que cuenta con artefactos de oro, incluidas figuras y monedas, en un espacio moderno y subterráneo.", id: "bancocentral" }, { museo: "Museo Sor María Romero", tipo: "Histórico", lugar: "WWM4+HGG, Sor María Romero, San Bosco, San José", horario: "Lunes a sábado, de 8:00 a.m. a 5:00 p.m.", descripcion: "Acá reside el recuerdo de una religiosa nicaragense del Instituto de las Hijas de María Auxiliadora, que desarrolló su trabajo en bien de los más pobres y necesitados en Costa Rica.", id: "sor" }, { museo: "Museo Regional Omar Salazar Obando", tipo: "Arqueológico", lugar: "Provincia de Cartago, Turrialba", horario: "Lunes a sábado, de 8:00 a.m. a 5:00 p.m.", descripcion: "En las salas del museo se pretende rescatar las raíces indígenas del cantón, por medio de una exhibición arqueológica de la zona que presenta los modos de vida de las primeras poblaciones de Turrialba, además de información sobre el Monumento Nacional Guayabo. Se exhiben figuras en cerámica y líticas que incluyen raspadores, buriles, cuchillos, etc.", id: "omar" }, { museo: "Museo Histórico Cultural Juan Santamaría", tipo: "Histórico", lugar: "Av. 1, Provincia de Alajuela, Alajuela", horario: "Martes a domingo, de 10:00 a.m. a 6:00 p.m. Lunes cerrado//Sábados, de 8:00 a.m. a 3:00 p.m.//Domingos, de 10:00 a.m. a 4:00 p.m", descripcion: "Las colecciones del museo están constituidas por materiales que testimonian aspectos históricos relacionados con la guerra centroamericana librada contra los invasores filibusteros entre 1856-1857: óleos, retratos, documentos, armas y objetos diversos vinculados con esa gesta heroica.", id: "santamaria" }, { museo: "Museo de Cultura Popular", tipo: "Histórico", lugar: "Heredia, Barva", horario: "Lunes a viernes, de 8:00 a.m. a 4:00 p.m.", descripcion: "El museo de Cultura Popular es donde las tradiciones adquieren vida y actualidad. Investiga, rescata, preserva y comunica las manifestaciones de la cultura popular del Valle Central en un edificio tradicional de la Costa Rica de antaño.", id: "popular" }, { museo: "Museo de Arte Religioso San José de Orosi", tipo: "Histórico", lugar: "Costado norte de la Iglesia Colonial de Orosi, 224, Provincia de Cartago, Orosí", horario: "Lunes a domingo, de 9:00 a.m. a 5:00 p.m.", descripcion: "El museo es el antiguo convento de padres franciscanos que se remonta al año 1743. Ahí se conservan pinturas, un sepulcro, y objetos e imaginería religiosa del período colonial que todavía se emplean en ocasiones especiales. El lugar ofrece un panorama bellísimo de la historia católica del Valle de Orosi.", id: "orosi" }, { museo: "Museo de los Niños", tipo: "Ciencia/interactivo", lugar: "WWR9+GR4, Av 9, Bajos de La Union, San José", horario: "Época lectiva: martes a viernes, 8:00 a.m. a 4:30 p.m. Sábado y domingo 9:30 a.m. a 5:00 p.m.//Vacaciones: lunes a domingo: 9:30 a.m. a 5:00 p.m.", descripcion: "Museo interactivo de niños que tiene exhibiciones en un edificio estilo castillo.", id: "ninos" }]);

    return (
        <div>
            <div className='lista_actividades'>
                <div className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
                    <div className='nav_act'>
                        <img className='logo' src={logo} alt='logo' />
                        <h1>Museos</h1>
                        <ul className='link_actividades navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista'>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Regresar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='museos_centro'>
                    <div className='museos_tabla'>
                        <div className='top_act'>
                            <table>
                                <div>
                                        <thead className='tabla_content'>
                                            <tr className='filas-museos'>
                                                <th className='museos_top columnas-museos'>Museo</th>
                                                <th className='museos_top columnas-museos'>Tipo</th>
                                                <th className='museos_top columnas-museos-lugar'>Lugar</th>
                                                <th className='museos_top columnas-museos'>Horario</th>
                                                <th className='museos_top columnas-museos-descripcion'>Descripción</th>
                                                <th className='museos_top columnas-museos'>Acciones</th>
                                            </tr>
                                        </thead >
                                    <tbody className='museos_body'>
                                        {
                                            museos.map((museo, index) => (
                                                <tr key={index} className='filas-museos'>
                                                    <td className='columnas-museos'>{museo.museo}</td>
                                                    <td className='columnas-museos'>{museo.tipo}</td>
                                                    <td className='columnas-museos-lugar horario'>{museo.lugar}</td>
                                                    <td className='columnas-museos horario'>{museo.horario}</td>
                                                    <td className='columnas-museos-descripcion'>{museo.descripcion}</td>
                                                    <td className='columnas-museos'>
                                                        <Link to={`/museos/ver/${museo.id}`} className='actividadesLink'>Ver</Link>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </div>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Museos;