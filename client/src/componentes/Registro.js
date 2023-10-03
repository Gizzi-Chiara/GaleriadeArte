import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Registro = () => {
    const [usuario,setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const registro = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/registro', {
            usuario,
            email,
            password,
            confirmPassword
        }) //Guarda el cookie
            .then( res => {
                console.log(res);
                navigate("/login");
            })
            .catch( err => setErrors(err.response.data.errors));
    }

    return(
        <div className='col-6 d-flex formulario2'>
            <div className='decoracion-2'>
                <img src='https://wallpapercrafter.com/th8006/1692040-digital-painting-landscape-sky-clouds-lake-boat.jpg' alt='Paisaje de wallpapercrafter' className='img-fluid'/>
            </div>
            <form onSubmit={registro} className='p-4 m-2'>
                <h2>Registro</h2>
                <div className='form-group mb-2'>
                    <label htmlFor='usuario'>Nombre de usuario:</label>
                    <input type='text' name='usuario' id='usuario' placeholder="Usuario" className='form-control' value={usuario} onChange={e => setUsuario(e.target.value)}/>
                    {
                        errors.usuario ? <p className="text-danger">{errors.usuario.message}</p> : null
                    }
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor='email'>Correo:</label>
                    <input type='text' name='email' id='email' placeholder="ejemplo@gmail.com" className='form-control' value={email} onChange={e => setEmail(e.target.value)}/>
                    {
                        errors.email ? <p className="text-danger">{errors.email.message}</p> : null
                    }
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor='password'>Contraseña:</label>
                    <input type='password' name='password' id='password' placeholder="Contraseña" className='form-control' value={password} onChange={e => setPassword(e.target.value)}/>
                    {
                        errors.password ? <p className="text-danger">{errors.password.message}</p> : null
                    }
                </div>
                <div className='form-group mb-2'>
                    <label htmlFor='confirmPassword'>Confirmar contraseña:</label>
                    <input type='password' name='confirmPassword' id='confirmPassword'placeholder="Confirmar contraseña" className='form-control' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    {
                        errors.confirmPassword ? <p className="text-danger">{errors.confirmPassword.message}</p> : null
                    }
                </div>
                <input type='submit' value="Crear cuenta" className='btn btn-primary mb-1'/>
                <p> Ya tienes una cuenta? <Link to={"/login"}> Iniciar Sesión</Link></p>
            </form>
        </div>
    );
}

export default Registro;