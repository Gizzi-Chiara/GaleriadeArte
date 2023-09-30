import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { uploadFile } from "../credenciales/firebase";
import axios from "axios";
import Nav from "./Nav";

const EditarObra = () => {
    const {id} = useParams();

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [fecha, setFecha] = useState("");
    const [categoria, setCategoria] = useState("");

    const [archivo, setArchivo] = useState(null);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/obra/" + id, {withCredentials:true})
            .then(res => {
                setNombre(res.data.nombre);
                setDescripcion(res.data.descripcion);
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

        axios.put("http://localhost:8000/api/actualizar/obra/" + id, {
            nombre,
            imagen:result,
            descripcion,
            fecha,
            categoria
        }, {withCredentials:true})
            .then(res => navigate("/"))
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
        <div>
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
                        <label>Imagen:</label>
                            <div>
                                <input type="file" onChange={e => setArchivo(e.target.files[0])}/>
                            </div>
                        <div>
                            <label>Descripcion:</label>
                            <textarea name="descripcion" className='form-control mb-3' placeholder="Descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)}/>
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
                            <label>Categoria:  </label>
                            <select name="categoria" className='form-control mb-3' onChange={e => setCategoria(e.target.value)} defaultValue={'DEFAULT'}>
                                <option value="DEFAULT" disabled>Seleccione una</option>
                                <option value="Pintura">Pintura</option>
                                <option value="Dibujo">Dibujo</option>
                                <option value="Grabado">Grabado</option>
                                <option value="Diseño 3D">Diseño 3D</option>
                                <option value="Diseño Digital">Diseño Digital</option>
                                <option value="Fotografia">Fotografia</option>
                                <option value="Comic">Comic</option>
                                <option value="Artesania">Artesania</option>
                                <option value="Animación">Animación</option>
                                <option value="Tatuaje">Tatuaje</option>
                            </select>
                        </div>
                        <input type="submit" value="Actualizar"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarObra;