import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const [emailLogin, setEmailLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");

    const navigate = useNavigate();

    const [errors, setErrors] = useState("");

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', {
            email: emailLogin, //Decir como le vamos a enviar la informacion al modelo con otro nombre
            password: passwordLogin
        }, {withCredentials: true})
            .then( res => {
                console.log(res);
                if(res.data.error){
                    //Si hay algun error
                    setErrors(res.data.message);
                } else{
                    navigate("/home");
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <div className='fondoL'>
            <div className=' card-dark col-6 d-flex formulario1'>
                <form onSubmit={login} className='p-4 m-2 login_izq'>
                    <h2>Iniciar Sesión</h2>
                    <div>
                        <div className='form-group mb-3'>
                            <label htmlFor='emailLogin'>Correo:</label>
                            <input type='text' name='emailLogin' id='emailLogin' placeholder="ejemplo@gmail.com" className='form-control' value={emailLogin} onChange={e => setEmailLogin(e.target.value)}/>
                            {
                            errors.emailLogin ? <p className="text-danger">{errors.emailLogin.message}</p> : null
                            }
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='passwordLogin'>Contraseña:</label>
                            <input type='password' name='passwordLogin' id='passwordLogin' placeholder="Contraseña" className='form-control' value={passwordLogin} onChange={e => setPasswordLogin(e.target.value)}/>
                            {
                            errors.passwordLogin ? <p className="text-danger">{errors.passwordLogin.message}</p> : null
                            }
                        </div>
                        <div>
                            {errors !== "" ? <p className='text-danger'>{errors}</p> : null}
                        </div>
                        <input type='submit' value="Iniciar Sesión" className='btn btn-primary mb-1'/>
                    </div>
                    <p className='mt-3'>
                        Aún no tienes una cuenta? 
                    </p>
                    <div>
                        <Link className='linkLogin' to={"/registro"}> Registrate aquí</Link>
                    </div>
                    <div>
                        <Link className='linkLogin' to={"/home"}>Regresar a la pagina principal</Link>
                    </div>
                </form>
                <div className='decoracionLogin'>
                    <img className='img-fluid' src='https://wallpapercrafter.com/th8006/1692030-digital-painting-night-sky-car-landscape-clouds.jpg' alt='Paisaje creado por BisBiswas'/>
                </div>
            </div>
        </div>
    );
}
export default Login;