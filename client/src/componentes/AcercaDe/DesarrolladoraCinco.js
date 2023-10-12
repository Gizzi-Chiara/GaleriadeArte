import { Link } from "react-router-dom";
import "./AcercaDe.css";


const DesarrolladorasCinco = () => {
    return (
        <div className="desarrolladoras">
            <div className="Cristhel">
                <div className="fotos">
                    <h4>Cristhel Piedra</h4>
                    <img src="https://media.licdn.com/dms/image/D4E03AQGIHlm2fIQx2w/profile-displayphoto-shrink_800_800/0/1677223994720?e=1701907200&v=beta&t=n9iH2ZixAPvryWQ7yTiqF7akbhoNfG1RkVyTuOBFN0k" width={60} />
                </div>
                <br></br>
                <p>Full stack developer with MERN skills (Mongoose, Express,React,Node), JavaScript lenguaje, work with Api’s, HTTML and CSS.
                    Experienced in Machine learning Data analyst, costumer service and social recruitment.
                    Social skills person with an assertive communication, always learning oriented, capable of think out of the box, bilingual.
                    70 % advanced in International Relations, already with negotiation skills, good with the change, and emphatic is one of my principal values at work and life.</p>
                <div className="linkedin1">
                    <Link to={"https://www.linkedin.com/in/cristhel-piedra-baltodano-9b8102204/"}>
                        <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%
                        "/>
                    </Link>
                </div>
            </div>
        </div>
            )
}
            export default DesarrolladorasCinco;