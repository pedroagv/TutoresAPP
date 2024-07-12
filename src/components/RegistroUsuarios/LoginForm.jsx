import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const LoginForm = ({ onLogin }) => {

    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(null); // Estado para almacenar el usuario

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const userData = { usuario, clave };

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}api/usuarios/iniciar-sesion`, userData);
            const userDataResponse = response.data[0]; // Ajusta según la estructura de tu respuesta
            setUser(userDataResponse); // Guarda el usuario en el estado
            onLogin(); // Llama a la función para actualizar el estado de autenticación
            setTimeout(() => {
                window.location.href = '/';
            }, 3000);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            alert('Credenciales incorrectas. Intenta de nuevo.');
            setLoading(false);
        }
    };

    // useEffect para almacenar el usuario en localStorage cuando cambia
    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user)); // Almacenar datos del usuario
            onLogin(); // Llama a la función para actualizar el estado de autenticación
        }
    }, [user, onLogin]); // Ejecutar cuando 'user' cambie

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="bg-dark text-white p-4 rounded">
                        <h2 className="text-center">Iniciar sesión</h2>
                        <div className="mb-3">
                            <label className="form-label">Usuario:</label>
                            <input
                                type="text"
                                className="form-control bg-secondary text-white"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                className="form-control bg-secondary text-white"
                                value={clave}
                                onChange={(e) => setClave(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary w-100" disabled={loading}>
                            {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
