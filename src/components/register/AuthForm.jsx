import React, { useState } from 'react';

function AuthForm({ onSubmit, buttonText }) {
    const [userData, setUserData] = useState({
        nombres: '',
        apellidos: '',
        login: '',
        password: '',
        codtipodocumento: '',
        identificacion: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(userData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">

            <div className="form-group">
                <label htmlFor="nombres">Nombres</label>
                <input type="text" id="nombres" className='form-control' name="nombres" value={userData.nombres} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" className='form-control' name="apellidos" value={userData.apellidos} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="login">Usuario</label>
                <input type="text" id="login" className='form-control' name="login" value={userData.login} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" className='form-control' name="password" value={userData.password} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="codtipodocumento">Código Tipo Documento</label>
                <input type="number" id="codtipodocumento" className='form-control' name="codtipodocumento" value={userData.codtipodocumento} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label htmlFor="identificacion">Identificación</label>
                <input type="number" id="identificacion" className='form-control' name="identificacion" value={userData.identificacion} onChange={handleChange} required />
            </div>

            <button type="submit" className="mt-3 btn btn-primary">
                Registrese
            </button>
        </form>
    );
}

export default AuthForm;
