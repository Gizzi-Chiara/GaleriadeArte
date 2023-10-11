import { Link } from "react-router-dom";
import "./AcercaDe.css";


const DesarrolladorasSeis = () => {
    return (
        <div className="desarrolladoras">
            <div className="Jenny ">
                <div className="fotos">
                    <h4>Jenny Romero</h4>
                    <img src="https://media.licdn.com/dms/image/D4E35AQF3iHLJ8U-LMg/profile-framedphoto-shrink_800_800/0/1684340125439?e=1697608800&v=beta&t=CmdMQO47mhdtb66_I3yT2LiLHuPOCFezzXMWK0pJ2zc" width={60} />

                </div>
                <p>Técnico en electrónica y Desarrolladora en Full Stack MERN, certificada en Azure Fundamentals, Azure Data Fundamentals, Cybersecurity Essentials, Introducción a Bases de Datos SQL. Con manejo en herramientas de desarrollo como lo son HTML, CSS, Javascript y SQL. Cuento capacidad de empatía y escucha activa, creatividad y apertura al aprendizaje continuo. Actualmente estoy interesada en continuar desarrollando mi carrera dentro del área TI, especialmente en el desarrollo de páginas web a fin de poner en práctica mis conocimientos.</p>
                <Link to={"https://www.linkedin.com/in/jenny-romero-a0a759121/"}>
                    <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%" />
                </Link>
            </div>
        </div>
    )
}
export default DesarrolladorasSeis;