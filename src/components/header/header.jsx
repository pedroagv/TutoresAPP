import React from 'react';

function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

            <div className="container">
                <a className="navbar-brand" href="#home">
                    Tutori-FLY
                </a>
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
                            <a className="nav-link" href="#features">
                                Turores
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pricing">
                                Materias
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#deets">
                                Registro Estudiante
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#deets">
                                Registro Tutores
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#memes">
                                Iniciar Sesion
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
