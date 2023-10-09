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
                        <Link to={"/acercaDe"}>Acerca De</Link>
                        
                    </div>

                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5>Acerca del sitio</h5>
                        <hr className="mb-4"/>
                        <p>Creado para que los artistas tengan un espacio para mostrar sus obras al mundo.</p>
                    </div>
                    
                    <hr className="mb-4"/>
                    <div>
                        <div className="redes">
                            <Link className="red" to={"https://www.linkedin.com/in/maureenjimenezr-full-stack-developer/"}>
                                <h4 className="linkedin">in</h4>
                            </Link>
                            <Link className="red" to={"https://github.com/MaureenJR"}>
                                <img className="github" src="https://pngimg.com/uploads/github/github_PNG40.png" alt="logo-GitHub"/>
                            </Link>
                        </div>
                        <div className="text-center mb-2">
                            <p className="derechos">2023 © MaureenJR Todos los derechos reservados</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 

export default Footer;