import { Link } from "react-router-dom";
import "./AcercaDe.css";


const DesarrolladorasTres= () =>  {
    return( 
            <div className="desarrolladoras">
                <div className="Monica">
                    <h4>Mónica Alvarado</h4>
                    <img src="https://media.licdn.com/dms/image/D4E35AQFL9_1ewBmpBA/profile-framedphoto-shrink_800_800/0/1695282998928?e=1697256000&v=beta&t=7_PiecxZp4hrPbRlbEwCKAU9aIx4hbADJCEtAO_Pkms" width={60}/>
                    <br></br><br></br>
                    <p>Civil Engineer and certified full stack developer in MERN and Java (in progress), AWS Certified Cloud Practitioner with knowledge in JavaScript | HTML and CSS with a C1 English level. Highly analytical with problem solving and innovation and teamwork skills, seeking to learn more, apply knowledge and develop a career as a full stack developer</p> <br></br>
                    <Link to={"https://www.linkedin.com/in/monica-developer/"}>
                    <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%
                    "/>
                    </Link>
                </div>
            </div>
    )
}
export default DesarrolladorasTres;