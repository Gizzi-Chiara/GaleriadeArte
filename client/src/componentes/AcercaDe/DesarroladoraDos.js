import { Link } from "react-router-dom";
import "./AcercaDe.css";


const DesarrolladorasDos = () => {
    return (
        <div className="desarrolladoras">
            <div className="Maureen">
                <div className="fotos">
                    <h4>Maureen Jiménez</h4>
                    <img src="https://media.licdn.com/dms/image/D4E03AQEVnhI3bF10aQ/profile-displayphoto-shrink_800_800/0/1693094428541?e=1701907200&v=beta&t=5LFpC-YmwcJjjE_n0njJfuQv1IDNOVYUbzHNK0FPv-I" width={60} />
                </div>
                <p> Diseñadora y Desarrolladora web certificada en MERN, con manejo en el uso
                    de herramientas y lenguajes como: MongoDB, Express.js, React, Node.js,
                    HTML, CSS, JavaScript. Además, tengo conocimiento en el uso de Photoshop,
                    Canva y análisis de circuitos. Cuento con un nivel de inglés B1. Cuento con
                    capacidad para trabajar en equipo, planear y organizar, Actualmente me
                    encuentro interesada en continuar desarrollando mi carrera dentro del área y
                    poner en práctica mis conocimientos en MERN.  </p>
                <div className="linkedin1">
                    <Link to={"https://www.linkedin.com/in/maureenjimenezr-full-stack-developer/"}>
                        <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default DesarrolladorasDos;