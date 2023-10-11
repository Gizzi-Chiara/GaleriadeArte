import logo from './logo/logo.png'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


const Nav = () => {
    const navigate = useNavigate();

    const logout = () => {
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => navigate("/login"))
            .catch(err => console.log(err));
    }

    return(
        <nav className="navbar navbar-expand-lg bg-dark p-1" data-bs-theme="dark">
            <div className="container">
                <img className='logo' src={logo} alt='logo'/>
                <h2>Galería de Arte</h2>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3 lista">
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/"}>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/nueva/obra"}>Agregar Obra</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/misObras"}>Mis Obras</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/actividades"}>Eventos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to={"/acercaDe"}>Acerca De</Link>
                        </li>
                    </ul>
                </div>
                <button onClick={logout} className="btn btn-light ms-3">Cerrar sesión</button>
            </div>
        </nav>
    );
}
export default Nav;