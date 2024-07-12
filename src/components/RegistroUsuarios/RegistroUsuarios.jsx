import axios from 'axios';
import React, { useEffect, useState } from 'react';

function RegistroUsuarios({ onSubmit, buttonText }) {


    const [tipodocumento, setTipoDocumento] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/tipodocumento`)
            .then(response => {
                setTipoDocumento(response.data);
            })
            .catch(error => {
                console.error('Hubo un error obteniendo las TipoDocumento:', error);
            });
    }, []);

    const [tipousuario, setTipoUsuario] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}api/tipousuarios`)
            .then(response => {
                setTipoUsuario(response.data);
            })
            .catch(error => {
                console.error('Hubo un error obteniendo las tipousuario:', error);
            });
    }, []);


    const [userData, setUserData] = useState({
        codtipousuario: '',
        nombres: '',
        apellidos: '',
        usuario: '',
        clave: '',
        codtipodocumento: '',
        identificacion: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            debugger;
            await axios.post(`${process.env.REACT_APP_API_URL}api/usuarios`, userData);
            alert('Usuario registrado exitosamente!');
            // Puedes agregar más lógica aquí después de enviar la solicitud POST
        } catch (error) {
            console.error('Hubo un error al registrar el usuario:', error);
            alert('Hubo un error al registrar el usuario. Por favor, intenta de nuevo.');
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group mb-3">
                <label htmlFor="codtipousuario">Tipo Usuario</label>
                <select id="codtipousuario" className="form-select w-100" name="codtipousuario" value={userData.codtipousuario} onChange={handleChange} required>
                    <option value="">Selecciona un tipo de usuario</option>
                    {tipousuario.map(item => (
                        <option key={item.id} value={item.id}>{item.tipousuario}</option>
                    ))}
                </select>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="nombres">Nombres</label>
                <input type="text" id="nombres" className='form-control' name="nombres" value={userData.nombres} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" className='form-control' name="apellidos" value={userData.apellidos} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="usuario">Usuario</label>
                <input type="text" id="usuario" className='form-control' name="usuario" value={userData.usuario} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="clave">Contraseña</label>
                <input type="password" id="clave" className='form-control' name="clave" value={userData.clave} onChange={handleChange} required />
            </div>

            <div className="form-group mb-3">
                <label htmlFor="codtipodocumento">Tipo Documento</label>
                <select id="codtipodocumento" className="form-select w-100" name="codtipodocumento" value={userData.codtipodocumento} onChange={handleChange} required>
                    <option value="">Selecciona un tipo documento</option>
                    {tipodocumento.map(item => (
                        <option key={item.id} value={item.id}>{item.tipodocumento}</option>
                    ))}
                </select>
            </div>

            <div className="form-group mb-3">
                <label htmlFor="identificacion">Identificación</label>
                <input type="number" id="identificacion" className='form-control' name="identificacion" value={userData.identificacion} onChange={handleChange} required />
            </div>

            <button type="submit" className="mt-3 btn btn-outline-dark w-100">
                Registrese
            </button>
        </form>
    );
}

export default RegistroUsuarios;
