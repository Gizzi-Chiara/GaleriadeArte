import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { uploadFile } from "../credenciales/firebase";
import axios from "axios";
import Nav from "./Nav";
import Footer from './Footer';

const EditarObra = () => {
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [fecha, setFecha] = useState("");
    const [categoria, setCategoria] = useState("");

    const [archivo, setArchivo] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/miObra/" + id, {withCredentials:true})
            .then(res => {
                setNombre(res.data.nombre);
                setDescripcion(res.data.descripcion);
                setArchivo(res.data.archivo)
                setImagen(res.data.imagen)
                setFecha(res.data.fecha);
                setCategoria(res.data.categoria);
            })
            .catch(err => console.log(err));
    }, [id])

    const actualizarObra = async (e) => {
        e.preventDefault();
        const result = await uploadFile(archivo);
        console.log(result)
        setImagen(result);
        axios.put("http://localhost:8000/api/actualizar/miObra/" + id, {
            nombre,
            imagen:result,
            descripcion,
            fecha,
            categoria
        }, {withCredentials:true})
            .then(res => navigate("/misObras"))
            .catch( err => {
                setErrors(err.response.data.errors)
                if(err.response.status === 401){
                    navigate("/login")
                } else {
                    console.log(err)
                }
            })
    }
    return(
        <div className='fondo'>
            <Nav/>
            <div className="card w-50 text-light p-5 nuevo">
                <form onSubmit={actualizarObra}>
                    <h1>Actualizar obra</h1>
                    <div>
                        <div>
                            <label>Nombre de la obra:</label>
                            <input type="text" name="nombre" className='form-control mb-3' placeholder="Nombre de la obra" value={nombre} onChange={e => setNombre(e.target.value)}/>
                            {
                                errors.nombre ? <p className="text-danger">{errors.nombre.message}</p> : null
                            }   
                        </div>
                        <div>
                            <label>Imagen:</label>
                            <div>
                                <input className="form-control archivo mb-3" type="file" id="file" onChange={e => setArchivo(e.target.files[0])}/> 
                            </div>
                            {
                                errors.archivo ? <p className="text-danger">{errors.archivo.message}</p> : null
                            }  
                        </div>
                        <div>
                            <label>Descripción:</label>
                            <textarea name="descripcion" className='form-control mb-3' placeholder="Descripción..." value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
                            {
                                errors.descripcion ? <p className="text-danger">{errors.descripcion.message}</p> : null
                            }
                        </div>
                        <div>
                            <label>Fecha de creación:  </label>
                            <input type="date" className='form-control mb-3' name="fecha" value={fecha} onChange={e => setFecha(e.target.value)}/>
                            {
                                errors.fecha ? <p className="text-danger">{errors.fecha.message}</p> : null
                            }
                        </div>
                        <div>
                            <label>Categoría:  </label>
                            <select name="categoria" className='form-control mb-3' onChange={e => setCategoria(e.target.value)} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Seleccione una</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Dibujo">Dibujo</option>
                                <option value="Grabado">Grabado</option>
                                <option value="Diseño 3D">Diseño 3D</option>
                                <option value="Diseño Digital">Diseño Digital</option>
                                <option value="Fotografia">Fotografía</option>
                                <option value="Animación">Animación</option>
                                <option value="Tatuaje">Tatuaje</option>
                            </select>
                        </div>
                        <input type="submit" className='btn btn-info' value="Actualizar"/>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default EditarObra;