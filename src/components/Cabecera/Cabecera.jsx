import React from 'react';
import { Link } from 'react-router-dom';

function Cabecera({ user, onLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    Tutori-FLY Online
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/resultados-tutores">
                                Turores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Materias">
                                Materias
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro-de-usuarios">
                                Registro Estudiante
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro-de-usuarios">
                                Registro Tutores
                            </Link>
                        </li>

                        {user ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link">Bienvenido, {user.nombres} {user.apellidos}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn" onClick={onLogout}>Cerrar sesión</button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/iniciar-sesion">Iniciar sesión</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Cabecera;
