import { Link } from "react-router-dom";
import "./AcercaDe.css";


const DesarrolladorasTres = () => {
    return (
        <div className="desarrolladoras">
            <div className="Monica">
                <div className="fotos">
                    <h4>Mónica Alvarado</h4>
                    <img src="https://media.licdn.com/dms/image/D4E35AQFL9_1ewBmpBA/profile-framedphoto-shrink_800_800/0/1695282998928?e=1698112800&v=beta&t=prDy487AQbB3beggltJq2Dgfex_-lalAKV4q5hn5LiE" width={60} />
                </div>
                <br></br>
                <p>Civil Engineer and certified full stack developer in MERN and Java (in progress), AWS Certified Cloud Practitioner with knowledge in JavaScript | HTML and CSS with a C1 English level. Highly analytical with problem solving, innovation and teamwork skills, seeking to learn more, apply knowledge and develop a career as a full stack developer</p> <br></br>
                <div className="linkedin1">
                    <Link to={"https://www.linkedin.com/in/monica-developer/"}>
                        <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%
                    "/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default DesarrolladorasTres;