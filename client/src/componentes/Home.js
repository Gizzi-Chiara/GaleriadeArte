import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarrusel.css"
import logo from './logo/logo.png'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Modal from "./Modal/Modal";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Home = () => {
    const [creador, setCreador] = useState(null);

    const navigate = useNavigate();
    const sesion = () => {
        navigate("/login");
    }

    const logout = () => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => {
                navigate("/login");
                setCreador(null);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/onsesion", { withCredentials: true })
            .then(res => { setCreador(res.data._id) })
            .catch(err => {
                if (err.response.status === 401) {
                    setCreador(null);
                    console.log("Sin sesion iniciada!");
                }
            })
    }, [])

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark p-1 " data-bs-theme="dark">
                <div className="container">
                    <img className='logo' src={logo} alt='logo' />
                    <h2>Galería de Arte</h2>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista">
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/"}>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to={"/misObras"}>Mis Obras</Link>
                            </li>
                        </ul>
                    </div>
                    {creador === null ? <button onClick={sesion} className="btn btn-light ms-3">Iniciar sesión</button> :
                        <button onClick={logout} className="btn btn-light ms-3">Cerrar sesión</button>}
                </div>
            </nav>
            <div className="p-5 mt-5 carr">
                <Carousel responsive={responsive}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front cards_home">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1615819895109-2610db394132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80" alt="Prueba" />
                                <div class="centered">Arte</div>
                            </div>
                            <div className="flip-box-back card_back">
                                <p>Galería de Arte con diferentes categorieas donde podrás añadir tus propias obras</p>
                                <Link to={"/principal"} className="tarjeta_name">Ir →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front cards_home">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1937&q=80" alt="Prueba" />
                                <div class="centered">Museos</div>
                            </div>
                            <div className="flip-box-back card_back">
                                <label>Visita los diferentes museso de Costa Rica</label>
                                <Link to={"/museos"} className="tarjeta_name">Ir →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front cards_home">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="Prueba" />
                                <div class="centered">Actividades</div>
                            </div>
                            <div className="flip-box-back card_back">
                                <label>Anímate a ver el arte en persona</label>
                                <Link to={"/actividades"} className="tarjeta_name">Ir →</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front cards_home">
                                <img className="homeCarrusel" src="https://images.unsplash.com/photo-1445258975206-cb4c5d8031d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Prueba" />
                                <div class="centered">Acerca de</div>
                            </div>
                            <div className="flip-box-back card_back">
                                <label>¿Quiénes somos?</label>
                                <Link to={"/acercaDe"} className="tarjeta_name">Ir →</Link>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div>
                <Modal />
            </div>
        </div>
    );
}

export default Home;