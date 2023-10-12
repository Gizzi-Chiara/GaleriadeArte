import { Link } from "react-router-dom";
import "./AcercaDe.css";


const DesarrolladorasCuatro = () => {
    return (
        <div className="desarrolladoras">

            <div className="Marie">
                <div className="fotos">
                    <h4>Marie Adani</h4>
                    <img src="https://media.licdn.com/dms/image/D4E03AQFgxsxUFIqGWg/profile-displayphoto-shrink_800_800/0/1692988954052?e=1701907200&v=beta&t=wh1aW6t9YaqPfANusvz_nbYoJEhxd0fbtlwpyeoKG0w" width={60} />
                </div>
                <br></br>
                <p>MERN FullStack certified developer. With HTML, CSS, JavaScript, Node, React, Express, MongoDB, GitHub, Microsoft Office. With B1 English level. With capacity for empathy, openness to learning, attention to detail. I am currently interested in continuing to develop my career in the IT area, specifically I am looking to put into practice my knowledge in MERN and increase my knowledge in the IT area.</p> <br></br>
                <div className="linkedin1">
                    <Link to={"https://www.linkedin.com/in/marieadani/"}>
                        <img src="https://th.bing.com/th/id/R.30afdd24da58196721bc03259c74f4db?rik=IM%2bHCjkDeZQDvQ&pid=ImgRaw&r=0" width="30%
                        "/>
                    </Link>
                </div>
            </div>

        </div>
    )
}
export default DesarrolladorasCuatro;