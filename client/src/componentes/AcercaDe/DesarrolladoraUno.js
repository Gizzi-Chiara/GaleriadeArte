import { Link } from "react-router-dom";
import "./AcercaDe.css";



const DesarrolladorasUno = () => {
    return (
        <div className="desarrolladoras">

            <div className="Chiara">
                <div className="fotos">
                    <h4>Chiara Gizzi</h4>
                    <img src="https://media.licdn.com/dms/image/D4E03AQG3NWuuzDvx9Q/profile-displayphoto-shrink_800_800/0/1696006059312?e=1701907200&v=beta&t=APWDitb9-Ob7J_XeF8eTCFj_0TZnb18rDZ-jXT7ZmAU" width={60}></img>
                </div>
                <p>Traductora e intérprete graduada en los idiomas inglés, español e italiano.Desarrolladora Full Stack MERN.Cuento con un sólido conocimiento de HTML, CSS y JavaScript, así como un nivel avanzado de inglés (C1), español (C2) e italiano (nativo).Además, cuento con una fuerte apertura al aprendizaje, al trabajo en equipo y una óptima capacidad de organización y adaptación. Actualmente estoy interesada en desarrollar mi carrera en el área IT y busco oportunidades para contribuir con mis conocimientos de Full Stack MERN a proyectos significativos e interesantes.</p>
                <div />
                <div className="linkedin1">
                    <Link to={"https://www.linkedin.com/in/chiaragizzi"}>
                        <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%
                        "/>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default DesarrolladorasUno;