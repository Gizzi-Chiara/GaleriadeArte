import { Link } from "react-router-dom";
import logo2 from "./logo/logo2.png"
const Footer = () => {
    return(
        <footer className="bg-dark text-light">
            <div className="container text-center text-md-start">
                <div className="row text-center text-md-start">
                    <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
                        <img className='logo2 img-fluid' src={logo2} alt='logo'/>
                    </div>

                    <div className="col-md-2 col-lg-3 col-xl-2 mx-auto mt-3">
                        <h5>Contacto</h5>
                        <hr className="mb-4"/>
                        <p>Servicio al cliente: +506 2541 0587</p>
                        <p>Email: servicioclientes@gmail.com</p>
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5>Nuestro objetivo</h5>
                        <hr className="mb-4"/>
                        <p>Creado para que los artistas tengan un espacio para mostrar sus obras al mundo.</p>
                    </div>
                    
                    <hr className="mb-4"/>
                </div>
            </div>
        </footer>
    );
} 

export default Footer;