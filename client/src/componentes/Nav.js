import logo from './logo/logo.png'
import axios from 'axios';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';


const Nav = () => {
    const [abierto, setAbierto] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => navigate("/login"))
            .catch(err => console.log(err));
    }

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-1" data-bs-theme="dark">
            <div className="container">
                <img className='logo' src={logo} alt='logo'/>
                <h1>Galeria de Arte</h1>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                        <li className={`nav-item ${abierto && "abierto"}`}>
                            <Link className="nav-link active" to={"/"}>Inicio</Link>
                        </li>
                        <li className={`nav-item ${abierto && "abierto"}`}>
                            <Link className="nav-link active" to={"/nueva/obra"}>Agregar Obra</Link>
                        </li>
                        <li className={`nav-item ${abierto && "abierto"}`}>
                            <Link className="nav-link active" to={"/misObras"}>Mis Obras</Link>
                        </li>
                    </ul>
                    <button onClick={logout} className="btn btn-light ms-3">Cerrar sesion</button>
                </div>
                <button className="navbar-toggler" onClick={()  => setAbierto(!abierto)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}
export default Nav;