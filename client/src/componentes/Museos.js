import React, { useState} from 'react';
import {Link} from 'react-router-dom';

const Museos = () => {
    const [museos, setMuseos] = useState([{museo:"Museo Nacional de Costa Rica",tipo:"histórico",lugar:"Cuesta de Moras, Av. Central, Bella Vista, San José", horario:"Martes a Sábado: de 8:30 a.m. a 4:30 p.m.//Domingo: de 9:00 a.m. a 4:30 p.m.",descripcion:"Museo nacional costarricense que tiene exhibiciones arqueológicas, culturales, militares y de vida silvestre.", id:"nacional"},{museo:"Museo del Jade y de la Cultura Precolombina",tipo:"patrimonio arqueológico",lugar:"13 bis, y, Av. Central, San José", horario:"De lunes a domingo de 8:00 a.m. a 5:00 p.m.",descripcion:"Museo con exhibiciones de objetos antropológicos, geológicos y arqueológicos, y una gran colección de jade.", id:"jade"},{museo:"Museos del Banco Central de Costa Rica",tipo:"patrimonio arqueológico, numismático y artístico",lugar:"Bajos de la Plaza de la Cultura. Avenida Central. Calle 5 San José Centro San José CR 10104, Av. Central, San José", horario:"Todos los días de 9:15 a.m. a 5:00 p.m.",descripcion:"Museo que cuenta con artefactos de oro, incluidas figuras y monedas, en un espacio moderno y subterráneo.", id:"bancocentral"},{museo:"Museo Sor María Romero",tipo:"histórico",lugar:"WWM4+HGG, Sor María Romero, San Bosco, San José", horario:"Lunes a sábado, de 8:00 a.m. a 5:00 p.m.",descripcion:"Acá reside el recuerdo de una religiosa nicaragense del Instituto de las Hijas de María Auxiliadora, que desarrolló su trabajo en bien de los más pobres y necesitados en Costa Rica.", id:"sor"},{museo:"Museo Regional Omar Salazar Obando",tipo:"arqueológico",lugar:"Provincia de Cartago, Turrialba", horario:"Lunes a sábado, de 8:00 a.m. a 5:00 p.m.",descripcion:"En las salas del museo se pretende rescatar las raíces indígenas del cantón, por medio de una exhibición arqueológica de la zona que presenta los modos de vida de las primeras poblaciones de Turrialba, además de información sobre el Monumento Nacional Guayabo. Se exhiben figuras en cerámica y líticas que incluyen raspadores, buriles, cuchillos, etc.", id:"omar"},{museo:"Museo Histórico Cultural Juan Santamaría",tipo:"histórico",lugar:"Av. 1, Provincia de Alajuela, Alajuela", horario:"Martes a domingo, de 10:00 a.m. a 6:00 p.m. Lunes cerrado//Sábados, de 8:00 a.m. a 3:00 p.m.//Domingos, de 10:00 a.m. a 4:00 p.m",descripcion:"Las colecciones del museo están constituidas por materiales que testimonian aspectos históricos relacionados con la guerra centroamericana librada contra los invasores filibusteros entre 1856-1857: óleos, retratos, documentos, armas y objetos diversos vinculados con esa gesta heroica.", id:"santamaria"},{museo:"Museo de Cultura Popular",tipo:"histórico",lugar:"Heredia, Barva", horario:"Lunes a viernes, de 8:00 a.m. a 4:00 p.m.",descripcion:"El museo de Cultura Popular es donde las tradiciones adquieren vida y actualidad. Investiga, rescata, preserva y comunica las manifestaciones de la cultura popular del Valle Central en un edificio tradicional de la Costa Rica de antaño.", id:"popular"},{museo:"Museo de Arte Religioso San José de Orosi",tipo:"histórico",lugar:"Costado norte de la Iglesia Colonial de Orosi, 224, Provincia de Cartago, Orosí", horario:"Lunes a domingo, de 9:00 a.m. a 5:00 p.m.",descripcion:"El museo es el antiguo convento de padres franciscanos que se remonta al año 1743. Ahí se conservan pinturas, un sepulcro, y objetos e imaginería religiosa del período colonial que todavía se emplean en ocasiones especiales. El lugar ofrece un panorama bellísimo de la historia católica del Valle de Orosi.", id:"orosi"},{museo:"Museo de los Niños",tipo:"ciencia/interactivo",lugar:"WWR9+GR4, Av 9, Bajos de La Union, San José", horario:"Época lectiva: martes a viernes, 8:00 a.m. a 4:30 p.m. Sábado y domingo 9:30 a.m. a 5:00 p.m.//Vacaciones: lunes a domingo: 9:30 a.m. a 5:00 p.m.",descripcion:"Museo interactivo de niños que tiene exhibiciones en un edificio estilo castillo.", id:"ninos"}]);

    return(
        <div>
        <Link to="/">Página Principal</Link>
        <table>
                <thead>
                    <tr>
                        <th>Museo</th>
                        <th>Tipo</th>
                        <th>Lugar</th>
                        <th>Horario</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        museos.map((museo, index) =>(
                            <tr key={index}>
                                <td>{museo.museo}</td>
                                <td>{museo.tipo}</td>
                                <td>{museo.lugar}</td>
                                <td>{museo.horario}</td>
                                <td>{museo.descripcion}</td>
                                <td>
                                    <Link to={`/museos/ver/${museo.id}`}>Ver</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Museos;